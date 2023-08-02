# automation
This repository holds the cypress automation code for sonder.com
Installation Procedure for Cypress:
1.	 Prerequisites:
Ensure that you have Node.js and npm installed on your system. You can download Node.js from the official website: https://nodejs.org/
2.	Create a new project (Optional)
If you don't have an existing project, you can create a new directory and initialize it with npm. Open your terminal and navigate to the desired location where you want to create your project, then run:
mkdir my-sonder-project
cd my-sonder-project
npm init –y
3.	Install Cypress:
Now, install Cypress using npm. In the same terminal, run the following command:
         npm install cypress --save-dev
This command installs Cypress as a development dependency (--save-dev) in your Sonder project.
4.	Project Structure:
The Sonder Automation Project follows a well-organized directory structure to maintain a clean and scalable codebase. Here's an overview of the directory structure:
- cypress/
  - fixtures/             // Contains static test data and mock responses.
  - e2e/          // Contains Cypress test files.
  - download/              // Contains custom Cypress plugins.
  - support/              // Contains custom commands and global setup/teardown files.
- node_modules/           // Contains Node.js modules (installed dependencies).
- cypress.json            // Cypress configuration file.
- package.json            // Node.js project configuration file.
-package-lock.json   

5.	Run Cypress Tests from the Terminal:
While in the integrated terminal, you can run Cypress tests using the npx cypress run command. This will execute all the tests headlessly (without the Test Runner UI). To run the tests with the Test Runner UI, use the command npx cypress open.
To download a Cypress project from Git and replace the existing cypress folder or package.json, you'll need to perform the following steps:

6.	Clone the Git Repository:
Open your terminal or command prompt and navigate to the location where you want to clone the Cypress project. Then, use the git clone command followed by the Git repository URL to clone the project. For example:
        git clone <repository_url>
This will create a new directory with the project files based on the repository content.
7.	Replace cypress Folder:
Once the Git repository is cloned, you can replace the existing cypress folder in your local project with the one from the cloned repository. To do this, navigate to your local project directory and replace the cypress folder with the one you just cloned.
8.	Replace package.json (Optional):
If the cloned project's package.json contains any additional or updated dependencies that you want to include in your local project, you can replace your existing package.json with the one from the cloned repository. However, be cautious while replacing the package.json file as it may overwrite any custom configurations or dependencies specific to your local project.

9.	Install Dependencies:
After replacing the cypress folder or package.json (if necessary), navigate to your local project's root directory in the terminal and run npm install to install the required dependencies specified in the package.json file.
             cd /path/to/your/local/project
             npm install

10.	Verify the Changes:
Once you have replaced the cypress folder or package.json and installed the dependencies, you can verify the changes by running Cypress to ensure everything is working as expected.
             npx cypress open
This will launch the Cypress Test Runner, and you should see the test scenarios from the cloned project.

