var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown.js")
var email;
var pic;
var username;
//prompt user
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github user name?",
      name: "username"
    }
  ]).then(function(answers){
    console.log(answers)
    return axios.get("https://api.github.com/users/" + answers.username)
    //axios.get(`https://api.github.com/users/${username}`)
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
      //have all answers
      //call fs.writefile here maybe?
      // console.log(email, pic)
      //moreAnswers.projectName = "something new"
      moreAnswers.email = email;
      moreAnswers.avatar_url = pic;
      moreAnswers.username = username;
      console.log(moreAnswers)
      
      fs.writeFile("./readme.md", generateMarkdown(moreAnswers), function(err) {
        if (err) {
          return console.log(err);
        }
      //variables? global
      })
  }).catch(function(err){
    if (err) throw err;
})
