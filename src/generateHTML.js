let part1 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<header>
  <div class="container flex-row justify-space-between align-center py-3">
    <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile</h1>
  </div>
</header>
<div class="container my-5">
<div class="row">
`

let part3 = `
</div>
</div>
</body>
</html>
`

function generateHTML(array) {
    let cardsSection = ``;

    // Loop through array data
    for (var i = 0; i < array.length; i++) {
        // Manager Card
        if (array[i].getRole() === "Manager") {
            cardsSection += `
            <div class="col-md-6 col-lg-4">
            <div class="card" style="width: 18rem">
            <h2 class="card-header">Manager: ${array[i].name}</h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${array[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
                <li class="list-group-item">Office Number: ${array[i].officeNo}</li>
            </ul>
            </div>
            </div>
            `
        }
        // Engineer Cards
        else if (array[i].getRole() === "Engineer") {
            cardsSection += `
            <div class="col-md-6 col-lg-4">
            <div class="card" style="width: 18rem">
            <h2 class="card-header">Engineer: ${array[i].name}</h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${array[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
                <li class="list-group-item">Office Number: <a href="https://github.com/${array[i].github}">${array[i].github}</a></li>
            </ul>
            </div>
            </div>
            `
        }
        // Intern Cards
        else {
            cardsSection += `
            <div class="col-md-6 col-lg-4">
            <div class="card" style="width: 18rem">
            <h2 class="card-header">Intern: ${array[i].name}</h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${array[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
                <li class="list-group-item">School: ${array[i].school}</li>
            </ul>
            </div>
            </div>
            `           
        }
    }

    return part1 + cardsSection + part3;
}

module.exports = generateHTML;