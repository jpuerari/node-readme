const generateMarkdown = function(readMeData) {
    return `
  # ${readMeData.username}
  ![Avatar for Github User](${readMeData.avatar_url}) \n
  ## Info
  Email: [${readMeData.email}](mailto:${readMeData.email}) \n
  ## Project Name
  ${readMeData.projectName} \n
  ## Description
  ${readMeData.description} \n
  ## Installation
  ${readMeData.installation} \n
  ## Usage
  ${readMeData.usage} \n
  ## License
  ${readMeData.license}
  `;
};

module.exports = generateMarkdown;