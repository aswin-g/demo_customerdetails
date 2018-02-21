# Customer details Endpoint - API Automation

How to setup automation project and run tests in your local:

Pre-requisites: Make sure you have NVM, NPM and Git installed in your local

1. Goto Terminal and type 'git clone https://github.com/aswin-g/demo_customerdetails.git'
2. Type `npm install` - All the dependencies from package.json will be installed in your local
3. Type `Source shell/preview.sh` or `Source shell/demo.sh` - This will set the endpoint URLs with respect to the environment we wish to run
4. Type `mocha` - All the tests will run as per defined in mocha.opts file
5. Logs folder will be generated automatically and a log file will be generated under name of the environment that was run with all requests and responses
6. A report will be auto generated in results folder. Open `API_Automation_Suite_Run.html`
