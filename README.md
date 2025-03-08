# React + Vite

# Getting started
-Create a Vite+React Application
-command:(npm create vite@latest devTinder-web --template react)
-Remove the unnecessary files and code(App.css and boilerplate code of count)
-Install the necessary dependencies
-command:(npm install)
-To run the Application
-command:(npm run dev)

-Install Tailwind CSS for Vite(Go to official website)
    -npm install tailwindcss @tailwindcss/vite
    -configure the Vite plugin
    -Add an '@import' to your CSS file that imports Tailwind CSS. This is typically done in your `src/index.css` file.

-DaisyUI - Tailwind CSS Component Library 🌼
    -DaisyUI is a UI component library built on top of Tailwind CSS, providing pre-styled components like buttons, cards, forms, and more. It simplifies the process of building beautiful UIs while maintaining the flexibility of Tailwind.
    -🌟 Why Use DaisyUI?
        ✅ Pre-styled Components → Buttons, cards, alerts, forms, etc.
        ✅ Theme Support → Built-in themes like light, dark, cupcake, etc.
        ✅ Customizable → Uses Tailwind’s utility classes, so you can modify styles easily.
        ✅ Faster Development → No need to style everything from scratch.
    -📌 Installation in a Vite + React Project
        -1️⃣ Install DaisyUI
            -npm install daisyui
        -2️⃣ Configure DaisyUI in your Vite project
            -import daisyui from 'daisyui';
        -3️⃣ Use DaisyUI Components in App.jsx
            -<button className="btn btn-primary">Click Me</button>
            🔹 btn btn-primary → A pre-styled primary button.
        -🎨 Using DaisyUI Themes
            DaisyUI provides multiple themes like light, dark, cupcake, etc.
            You can set a theme in tailwind.config.js:
            In index.css
            @plugin "daisyui"{
                themes:light --default,dark --prefersdark;
            }    
            Or change themes dynamically using data-theme:
            <div data-theme="dark">
                <button className="btn btn-secondary">Dark Mode Button</button>
            </div>
        -🚀 Popular DaisyUI Components
            Component	Class Name
            Button	btn btn-primary
            Card	card bg-base-100 shadow-xl
            Input Field	input input-bordered
            Navbar	navbar bg-base-200
            Alert	alert alert-success
    -Visit this site https://daisyui.com/docs/install/vite/
    -Add Navbar component to App.jsx



