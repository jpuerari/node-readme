var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");

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
    var email = res.data.email;
    var pic = res.data.avatar_url;

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
        message: "What is your description?",
        name: "description"
      },
    ])
  }).then(function(moreAnswers){
      //have all answers
      //call fs.writefile here maybe?
      //activity 6
      //variables? global
  }).catch(function(err){
    if (err) throw err;
  })


  function five(){
    return 5;
  }
  
  var number = five();
  console.log(2 + five())
  console.log(five())

