// Create HTML File
const generateHTML = require('./src/generateHTML');

// Dependencies
const fs = require('fs'); 
const inquirer = require('inquirer');

// Profiles (Classes)
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array--Team Members 
const array = [];

// Add New Manager
const newManager = () => {
    console.log(`
    ============
    Team Manager
    ============
    `);

    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Who is the team manager?",
    // Do I need to validate this?
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
            name: "office",
            message: "What is the manager's office number?"
        }
    ])
    .then(managerData => {
        const { name, id, email, office } = managerData;
        const newManager = manager (name, id, email, office);
        array.push(manager);
        console.log(managerData);
    })

// Call addMember function...

}



// Add Team Members
const addMember = () => {
    console.log(`
    ============
    Team Members
    ============
    `);

    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Choose employee role.",
            choices: ["Engineer", "Intern", "Team Complete"] 
        },

// Engineer Prompts...
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
        // Return to menu...

// Intern Prompts...
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
        // Return to menu...

// Team Complete...

    ])
}



// Call newManager function...

