import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> My React Web Page</h1>
      <p>I build this Page using React and hosted it with git hub pages!</p>
      <h2>Steps to Install React:</h2>
      <p>I first installed Node.js and npm:</p>
      <p>React requires Node.js and npm</p>
      <p>I downloaded Node.js from Node.js official website and installed it.</p>
      <p>I then verified the installation using the following commands:</p>
      <p>node -v</p>
      <p>npm -v</p>
      <p>Then it was time to create a New React App:</p>
      <p>I used the npx command (a tool that comes with npm) to create a new React app:</p>
      <p>npx create-react-app my-react-app</p>
      <p>This created a directory named my-react-app containing the necessary files and dependencies for a React project.</p>
      <p>Then I navigated to the project directory through the terminal command:</p>
      <p>cd my-react-app</p>
      <p>And then installed Project Dependencies by running the command:</p>
      <p>npm install</p>
      <p>I tested the React app locally by running:</p>
      <p>npm start</p>
      <p>I was able to open http://localhost:3000 in your browser to view the app.</p>
      <p>Then to host the page, I installed gh-pages:</p>
      <p>npm install gh-pages --save-dev</p>
      <p>I created a repository in my github and connected them through adding the following line in my package.json file:</p>
      <p>"homepage": "https://pzare2023.github.io/my-react-app"</p>
      <p>Then I initialized git repository from my terminal and connected my local project to the GitHub repository:</p>
      <p>git remote add origin https://github.com/pzare2023/my-react-app.git</p>
      <p>I added all the files in by:</p>
      <p>git add .</p>
      <p>Finally I pushed the changes to the main branch of the GitHub repository.</p>
      <p>My last step was to run the deployment:</p>
      <p>npm run deploy</p>
      <h2>Difficulties Encountered:</h2>
      <p>One challenge was getting my final url that was not working, which I fixed by going to repository settings on github and checking off the option for "Use your GitHub Pages website".</p>
    </div>
  );
}

export default App;
