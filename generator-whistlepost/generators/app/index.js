"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the sweet ${chalk.red("generator-whistlepost")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projectId",
        message: "Project ID ?",
        default: "mysite"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
//    this.fs.copyTpl(
//        this.templatePath('package.json'),
//        this.destinationPath('.'),
//        { projectId: this.props.projectId }
//    );

    this.fs.copy(this.templatePath("*"), this.destinationPath("."));
  }

  install() {
    this.installDependencies();
  }
};
