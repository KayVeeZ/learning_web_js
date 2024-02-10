console.log("kshitij is awesome");

setTimeout(() => {
    console.log("Kshitij sach bolta hai")
}, 1000);
console.log("alex gadu");





const fn = () => {
    console.log("Nothing");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("KayVeeZ", fn);
    document.head.append(sc);
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);