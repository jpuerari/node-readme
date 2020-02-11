//Global Variables:
var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown.js")
var email;
var pic;
var username;
//Github User Prompt:
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github user name?",
      name: "username"
    }
  //Github API
  ]).then(function(answers){
    console.log(answers)
    return axios.get("https://api.github.com/users/" + answers.username)
  }).then(function(res) {
    console.log(res.data);
    username = res.data.login;
    email = res.data.email;
    pic = res.data.avatar_url;
    return inquirer.prompt([
      {
        type: "input",
        message: "What is your project name?",
        name: "projectName"
      },
      {
        type: "input",
        message: "What is your description?",
        name: "description"
      },
      {
        type: "input",
        message: "What is the usage?",
        name: "usage"
      },
      {
        type: "input",
        message: "What are the installation steps?",
        name: "installation"
      },
      {
        type: "input",
        message: "What licenses did you use?",
        name: "license"
      },
    ])
  }).then(function(moreAnswers){
      moreAnswers.email = email;
      moreAnswers.avatar_url = pic;
      moreAnswers.username = username;
      console.log(moreAnswers)
    //Export code to readme.md
      fs.writeFile("./readme.md", generateMarkdown(moreAnswers), function(err) {
        if (err) {
          return console.log(err);
        }
      })
  }).catch(function(err){
    if (err) throw err;
})
