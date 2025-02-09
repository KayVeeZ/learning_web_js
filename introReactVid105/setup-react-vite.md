# Setting Up a React App with Vite (Corrected Steps)

## **Step 1: Install Node.js (if not installed)**
Ensure you have Node.js installed. You can check by running:

```sh
node -v
npm -v
```

If not installed, download it from [Node.js official site](https://nodejs.org/).

## **Step 2: Initialize a New Project**

First, create a new folder and navigate to it:

```sh
mkdir my-react-app
cd my-react-app
```

Then initialize a `package.json` file:

```sh
npm init -y
```

## **Step 3: Install React and ReactDOM**

Since you don’t want a framework, install only React and ReactDOM:

```sh
npm install react react-dom
```

## **Step 4: Create a React App with Vite**

If you've already created a project folder (`my-react-app`), there's no need to `cd` into it again after running the Vite installation command. Here are the correct steps:

### **Option 1: If You Already Created a Folder (`mkdir my-react-app && cd my-react-app`)**

Then inside the folder, install Vite manually:

```sh
npm create vite@latest . --template react
npm install
npm run dev
```

Here, the `.` tells Vite to set up the project in the current directory instead of creating a new one.

### **Option 2: If You Haven't Created a Folder Yet**

Run this command directly:

```sh
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev
```

This creates the `my-react-app` folder and sets up Vite inside it.

## **Step 5: Open the App in Your Browser**

After running `npm run dev`, you’ll see a local development server URL in the terminal, usually:

```
  Local: http://localhost:5173/
```

Open that URL in your browser to see your React app running.

Now you're ready to start building with React and Vite! 🚀
