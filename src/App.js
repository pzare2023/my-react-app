import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My React Web Page</h1>

      <div className="section">
        <h2>Steps to Install React:</h2>
        <p>I first installed Node.js and npm:</p>
        <p>React requires Node.js and npm.</p>
        <p>I downloaded Node.js from the official website and installed it.</p>
        <p>I then verified the installation using the following commands:</p>
        <code>node -v</code>
        <br />
        <code>npm -v</code>
        <p>Then it was time to create a New React App:</p>
        <p>I used the npx command (a tool that comes with npm) to create a new React app:</p>
        <code>npx create-react-app my-react-app</code>
        <p>This created a directory named `my-react-app` containing the necessary files and dependencies for a React project.</p>
        <p>Then I navigated to the project directory through the terminal command:</p>
        <code>cd my-react-app</code>
        <p>And then installed project dependencies by running the command:</p>
        <code>npm install</code>
        <p>I tested the React app locally by running:</p>
        <code>npm start</code>
        <p>I was able to open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> in the browser to view the app.</p>
      </div>

      <div className="section">
        <h2>Hosting the Page:</h2>
        <p>To host the page, I installed gh-pages:</p>
        <code>npm install gh-pages --save-dev</code>
        <p>I created a repository in GitHub and added the following line in my `package.json` file:</p>
        <code>"homepage": "https://pzare2023.github.io/my-react-app"</code>
        <p>Then I initialized a git repository and connected my local project to GitHub:</p>
        <code>git remote add origin https://github.com/pzare2023/my-react-app.git</code>
        <p>I added all the files:</p>
        <code>git add .</code>
        <p>Finally, I pushed the changes to the main branch of the GitHub repository.</p>
        <p>The last step was to deploy the app:</p>
        <code>npm run deploy</code>
      </div>

      <div className="section">
        <h2>Difficulties Encountered:</h2>
        <p>One challenge was getting my final URL to work. I fixed this by going to the repository settings on GitHub and enabling the option for "Use your GitHub Pages website."</p>
      </div>
    </div>
  );
}

export default App;
