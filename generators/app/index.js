'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the rad ${chalk.red('generator-omg-forms')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your Addon?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'namespace',
        message: 'What namespace would you like to use for your Addon',
        default: 'Addon'
      },
      {
        type: 'input',
        name: 'orgName',
        message:
          'If you plan to publish this to Packagist, what is your Organization name?',
        default: ''
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project desciption?',
        default: 'My cool new Addon'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github Username?',
        default: ''
      },
      {
        type: 'confirm',
        name: 'build',
        message: 'Does your Addon need a CSS and JS Build Process?',
        default: 'no'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('composer.json'),
      this.destinationPath('composer.json'),
      {
        projectName: this.props.projectName,
        github: this.props.github,
        description: this.props.description,
        orgName: this.props.orgName
      }
    );

    this.fs.copyTpl(
      this.templatePath('index.php'),
      this.destinationPath(
        `${this.props.projectName.replace(/\s+/g, '-').toLowerCase()}.php`
      ),
      {
        namespace: this.props.namespace
      }
    );

    this.fs.copyTpl(
      this.templatePath('api.php'),
      this.destinationPath('include/api.php'),
      {
        namespace: this.props.namespace
      }
    );

    this.fs.copyTpl(
      this.templatePath('validation.php'),
      this.destinationPath('include/validation.php'),
      {
        namespace: this.props.namespace
      }
    );

    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));

    if (this.props.build) {
      this.fs.copy(
        this.templatePath('index.js'),
        this.destinationPath('assets/js/index.js')
      );

      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );

      this.fs.copy(
        this.templatePath('postcss.config.js'),
        this.destinationPath('postcss.config.js')
      );

      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        {
          projectName: this.props.projectName,
          github: this.props.github,
          description: this.props.description
        }
      );

      this.fs.copyTpl(
        this.templatePath('core.php'),
        this.destinationPath('includes/core.php'),
        {
          projectName: this.props.projectName,
          namespace: this.props.namespace
        }
      );
    }
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
};
