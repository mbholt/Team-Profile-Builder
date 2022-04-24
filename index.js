// Create HTML File
const generateHTML = require('./src/generateHTML');

// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// Profiles (Classes)
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const { profile } = require('console');

// Team Member Array
let array = [];

// Manager Questions
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Who is the team manager?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?" 
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
    },
    {
        type: "input",
        name: "officeNo",
        message: "What is the manager's office number?"
    },
    {
        type: "list",
        name: "continue",
        message: "What would you like to do next?",
        choices: ["Add another employee", "Finish"]
    }
]

// Engineer Questions
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
    },
    {
        type: "list",
        name: "continue",
        message: "What would you like to do next?",
        choices: ["Add another employee", "Finish"]
    }
]

// Intern Questions
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    },
    {
        type: "list",
        name: "continue",
        message: "What would you like to do next?",
        choices: ["Add another employee", "Finish"]
    }
]

const employeeType = [
    {
        type: "list",
        name: "continue",
        message: "What type of employee do you want to add?",
        choices: ["Engineer", "Intern", "Finish"]
    }
]

// Create HTML page using fs
const writeFile = () => {
    console.log("Team Profile generated! See index.html in /dist");
    console.log(array);
    fs.writeFile('./dist/index.html', generateHTML(array), err => {
        if (err) throw new Error(err);
    })
}

// generateProfile
const generateProfile = () => {
    generateHTML(array);
}

// Add Engineer
const addEngineer = () => {
    console.log(`
    ============
    Add Engineer
    ============
    `);

    return inquirer
        .prompt(engineerQuestions)

        // engineerData to array
        .then(engineerData => {
            let engineer = new Engineer (engineerData.name, engineerData.id, engineerData.email, engineerData.github, engineerData.continue);
            array.push(engineer);

            // Add another team member
            if (engineerData.continue === "Add another employee") {
                addEmployee();

            // Finish team
            } else {
                generateProfile();
                writeFile();
            }
        })
}

// Add Intern
const addIntern = () => {
    console.log(`
    ==========
    Add Intern
    ==========
    `);

    return inquirer
        .prompt(internQuestions)

        // internData to array
        .then(internData => {
            let intern = new Intern (internData.name, internData.id, internData.email, internData.school, internData.continue);
            array.push(intern);

            // Add another team member
            if (internData.continue === "Add another employee") {
                addEmployee();
            
            // Finish team
            } else {
                generateProfile();
                writeFile();
            }
        })
}

// Add New Employee
const addEmployee = () => {
    console.log(`
    ============
    Add Employee
    ============
    `);

    return inquirer
        .prompt(employeeType)
        .then(employeeTypeData => {
            // Add engineer
            if (employeeTypeData.continue === "Engineer") {
                addEngineer();
            }

            // Add intern
            else if (employeeTypeData.continue === "Intern") {
                addIntern();
            }

            // Finish team
            else {
                generateProfile();
                writeFile();
            }
        })
}

// Add New Manager
const addManager = () => {
    console.log(`
    ============
    Team Manager
    ============
    `);

    return inquirer
        .prompt(managerQuestions)

        // managerData to array
        .then(managerData => {
            let manager = new Manager (managerData.name, managerData.id, managerData.email, managerData.officeNo, managerData.continue);
            array.push(manager);
            if (managerData.continue === "Add another employee") {
                addEmployee();
            } else {
                generateProfile();
                writeFile();
            }
        })
}

// Call addManager (Start Team)
addManager();