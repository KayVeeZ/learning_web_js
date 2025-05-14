const svg = document.getElementById("graph");
const nodes = {};
const edges = [];
const nodeCount = 100; // Increased node count
const maxConnections = 3;
const radius = 15;
const width = svg.getAttribute("width");
const height = svg.getAttribute("height");

// Wait until the image is loaded
const img = new Image();
img.src = "KYB_Brain_Basics_Brain040522.png";
img.crossOrigin = "Anonymous";
img.onload = () => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);

  let placed = 0;
  // First place perimeter nodes
  const perimeterCount = Math.floor(nodeCount * 0.6); // 60% of nodes on perimeter
  while (placed < perimeterCount) {
    // Choose a side (0=top, 1=right, 2=bottom, 3=left)
    const side = Math.floor(Math.random() * 4);
    let x, y;
    
    if (side === 0) { // top
      x = Math.random() * (width - 2 * radius) + radius;
      y = radius;
    } else if (side === 1) { // right
      x = width - radius;
      y = Math.random() * (height - 2 * radius) + radius;
    } else if (side === 2) { // bottom
      x = Math.random() * (width - 2 * radius) + radius;
      y = height - radius;
    } else { // left
      x = radius;
      y = Math.random() * (height - 2 * radius) + radius;
    }

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const alpha = pixel[3];
    if (alpha > 10) {
      const id = `N${placed}`;
      nodes[id] = { id, x, y, neighbors: [] };

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("class", "node");
      circle.setAttribute("id", `node${id}`);
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", radius);
      circle.setAttribute("fill", "gray");
      svg.appendChild(circle);
      placed++;
    }
  }

  // Then place the remaining nodes randomly inside
  while (placed < nodeCount) {
    const x = Math.random() * (width - 2 * radius) + radius;
    const y = Math.random() * (height - 2 * radius) + radius;

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const alpha = pixel[3];
    if (alpha > 10) {
      const id = `N${placed}`;
      nodes[id] = { id, x, y, neighbors: [] };

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("class", "node");
      circle.setAttribute("id", `node${id}`);
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", radius);
      circle.setAttribute("fill", "gray");
      svg.appendChild(circle);
      placed++;
    }
  }

  connectNodes();
  attachEvents();
};

function connectNodes() {
  const nodeIds = Object.keys(nodes);
  nodeIds.forEach((id) => {
    const source = nodes[id];
    const targets = nodeIds.filter(t => t !== id);
    const connections = new Set();
    while (connections.size < maxConnections) {
      const targetId = targets[Math.floor(Math.random() * targets.length)];
      if (!source.neighbors.some(n => n.id === targetId)) {
        const target = nodes[targetId];
        const weight = Math.hypot(source.x - target.x, source.y - target.y);
        source.neighbors.push({ id: targetId, weight });
        target.neighbors.push({ id: id, weight });
        connections.add(targetId);

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("class", "edge");
        line.setAttribute("x1", source.x);
        line.setAttribute("y1", source.y);
        line.setAttribute("x2", target.x);
        line.setAttribute("y2", target.y);
        svg.insertBefore(line, svg.querySelector("circle")); // Keep edges above image but below nodes
        edges.push({ from: id, to: targetId, element: line });
      }
    }
  });
}

function attachEvents() {
  Object.keys(nodes).forEach(id => {
    const nodeEl = document.getElementById(`node${id}`);
    nodeEl.addEventListener("mouseenter", () => runDijkstra(id));
    nodeEl.addEventListener("mouseleave", resetGraph);
  });
}

let activeAnimation = [];
function runDijkstra(startId) {
  resetGraph();
  const dist = {};
  const prev = {};
  const visited = new Set();
  const queue = [];
  const nodeIds = Object.keys(nodes);

  nodeIds.forEach(id => dist[id] = Infinity);
  dist[startId] = 0;
  queue.push({ id: startId, dist: 0 });

  while (queue.length > 0) {
    queue.sort((a, b) => a.dist - b.dist);
    const { id: current } = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    nodes[current].neighbors.forEach(n => {
      const alt = dist[current] + n.weight;
      if (alt < dist[n.id]) {
        dist[n.id] = alt;
        prev[n.id] = current;
        queue.push({ id: n.id, dist: alt });
      }
    });
  }

  const connectedNodes = new Set();
  const animatePath = (to) => {
    const from = prev[to];
    if (!from) return;
    connectedNodes.add(from);
    connectedNodes.add(to);
    const edge = edges.find(e => (e.from === from && e.to === to) || (e.from === to && e.to === from));
    if (edge) {
      const step = () => {
        gsap.to(edge.element, { stroke: "yellow", strokeWidth: 4, duration: 0.1 });
        gsap.to(`#node${to}`, { fill: "lime", duration: 0.1 });
      };
      const timeout = setTimeout(step, connectedNodes.size * 30);
      activeAnimation.push(timeout);
    }
    animatePath(from);
  };

  Object.keys(prev).forEach(to => animatePath(to));
  connectedNodes.add(startId);
  gsap.to(`#node${startId}`, { fill: "lime", duration: 0.1 });

  nodeIds.forEach(id => {
    if (!connectedNodes.has(id)) {
      const nodeEl = document.getElementById(`node${id}`);
      gsap.to(nodeEl, { fill: "#444", duration: 0.1 });
    }
  });
}

function resetGraph() {
  activeAnimation.forEach(timeout => clearTimeout(timeout));
  activeAnimation = [];

  document.querySelectorAll(".node").forEach(n => {
    gsap.killTweensOf(n);
    gsap.set(n, { fill: "gray" });
  });

  document.querySelectorAll(".edge").forEach(e => {
    gsap.killTweensOf(e);
    gsap.set(e, { stroke: "#888", strokeWidth: 2 });
  });
}