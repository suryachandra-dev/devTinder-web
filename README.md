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
    -Add Navbar component of daisyui jsx code to App.jsx
    -Create a new component NavBar.jsx in components folder
    -Install(6.30.0 version using) React Router Dom(npm install react-router-dom)
    --Create BrowserRouter >Routes >Route= "/Body" >Route Children
    -Create an outlet in your Body Component
    -Create a footer component using daisy Ui Components
    -Install Axios 
    -Cors -Install cors in Backend=>add this middleware to the backend with configuration  origin and credentials:true
    -Whenever you are making an API Call pass axios =>{withCredentials:true}
    -Install redux toolkit +react-redux https://redux-toolkit.js.org/tutorials/quick-start
    -Create an appStore =>Configure the store
    -Provide the appStore to the app component using <Provider store={appStore}></Provider> provided by the redux library   .
    -Create a slice for the user and add it to the store
    -Add user reducer to the appstore
    -Add redux devtools in chrome
    -Login and see if user details are stored in redux store
    -Navbar sshould update details of user
    -Refactor our code to contants BASE_URL and create a new components folder
    -You should not be able to access the other page without being logged in
    -If token is not present redirect to login page
    -Logout
    -Profile
    -Get the feed and the feed in the store
    -Build the user card on the feed
    -Edit profile feature
    -show toast message on save of profile
    -NEW PAGE -To See all my existing connections
    -NEW PAGE -To See all my connection Requests
    -Feature -Review Connection Request ->Accept/Reject 
    -Send/ignore the user card from feed
    Remaining :
    
    -Signup New User
    -E2ETesting


Body
    NavBar
    Route="/" =>Feed
    Route="/login" =>Login
    Route="/signup" =>Signup
    Route="/connections" =>Connections
    Route="/profile" =>Profile
    Route="/settings" =>Settings



-Deployment
    -Signup on AWS
    -Create a new EC2 instance
    -Launch an instance 
    -Connect to instance
    -In Gitbash cd to where you downloaded the devTinder-secret.pem file
    -chmod 400 "devTinder-secret.pem"
    -ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-73-244.eu-north-1.compute.amazonaws.com
    -Connected to the virtual machine using ssh command
    -Install node version 18.18.2 using commands from nodejs official downloads page select nvm and select macos .
    -Git clone from frontend and backend 
    git clone https://github.com/suryachandra-dev/devTinder.git ---for backend
    git clone https://github.com/suryachandra-dev/devTinder-frontend.git ---for frontend
    -Frontend
        -npm install ---> for the dependencies 
        -npm run build 
        -Install Nginx on to ubuntu server
        You can install **NGINX** on your Ubuntu EC2 instance by following these steps:  

---

### **Step 1: Connect to Your Ubuntu Server**  
If you haven't already, SSH into your instance:  
```sh
ssh -i "path/to/your-key.pem" ubuntu@your-public-ip
```
(Replace `your-public-ip` with your EC2 instance's IP address.)  

---

### **Step 2: Update Package Lists**  
First, update your package list to ensure you're installing the latest version:  
```sh
sudo apt update
```

---

### **Step 3: Install NGINX**  
```sh
sudo apt install nginx -y
```
The `-y` flag automatically confirms installation.  

---

### **Step 4: Start and Enable NGINX**  
Start the NGINX service:  
```sh
sudo systemctl start nginx
```
Enable NGINX to start on boot:  
```sh
sudo systemctl enable nginx
```

---

<!-- ### **Step 5: Allow Traffic in Firewall (If Enabled)**  
Check if **UFW (Uncomplicated Firewall)** is active:  
```sh
sudo ufw status
```
If active, allow HTTP and HTTPS traffic:  
```sh
sudo ufw allow 'Nginx Full'
sudo ufw reload
```

---

### **Step 6: Verify Installation**  
Check if NGINX is running:  
```sh
sudo systemctl status nginx
```
You should see something like **"active (running)"**.  

---

### **Step 7: Test NGINX**  
In your **browser**, visit:  
```
http://your-public-ip
```
You should see the **NGINX welcome page**.  

---

### **Optional: Restart or Stop NGINX**  
- **Restart** NGINX:  
  ```sh
  sudo systemctl restart nginx
  ```
- **Stop** NGINX:  
  ```sh
  sudo systemctl stop nginx
  ```

Let me know if you need help! 🚀


 -->

-copy code from dist folder(build files) to /var/www/html folder
 Command:sudo scp -r dist/* /var/www/html/
Enable port:80 of your instance in security group Inbound rules


-Backend
    -npm install
    -updated db password
    -allowed ec2 instance public Ip of virtual machine  on mongodb server in network access
    -Allowed security config on port number 3000
    -Installed npm install pm2 -g 
    -pm2 start npm -- start
    -pm2 logs
    -pm2 flush <npm>
    -pm2 stop <npm>
    -pm2 delete <npm>
    -pm2 start npm --name "devTinder" -- start
NGINX config file using:
    sudo nano /etc/nginx/sites-available/default
Update the Configuration
     location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
restart nginx
 sudo systemctl restart nginx
-Modify the base url in constants.js file to "/api" from 
http://localhost:3000/api




    Frontend =http://13.60.73.244/
    Backend =http://13.60.73.244:3000/
    Domain Name=devtinder.com=>13.60.73.244
    Frontend=devtinder.com
    Backend=devtinder.com:3000=>devtinder.com/api

   


