const genHTML = (employees) => {
    console.log(employees);
const html = [];

const addMgr = manager => {
    let mgrHtml = `
    <div class="card" style="width: 20em">
    <div class="card-header"> ${manager.name} <br>
    <div><i class="fas fa-mug-hot"></i> Manager</div>
    <ul class="list-group list-group flush">
    <li class="list-group-item">ID Num: ${manager.idNum} </li>
    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a><span></li>  
    <li class="list-group-item">Office Number: ${manager.officeNum}</li>
    </ul>
    </div>
    `;
    html.push(mgrHtml)
}

const addEng = engineer => {
    let engHtml = `
    <div class="card" style="width: 20em">
    <div class="card-header"> ${engineer.name} <br>
    <div><i class="fas fa-glasses"></i> Engineer</div>
    <ul class="list-group list-group flush">
    <li class="list-group-item">ID Num: ${engineer.idNum} </li>
    <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a><span></li> 
    <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
    </div>
    `; 
    html.push(engHtml);
}

const addInt = intern => {
    let intHtml = `
    <div class="card" style="width: 20em">
    <div class="card-header"> ${intern.name} <br>
    <div><i class="fas fa-brain"></i> Intern</div>
    <ul class="list-group list-group flush">
    <li class="list-group-item">ID Num: ${intern.idNum} </li>
    <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a><span></li> 
    <li class="list-group-item">School: ${intern.school} </li>
    </ul>
    </div> 
    `;
    html.push(intHtml);
};

console.log("manager", employees[0].getJobTitle())

for (i = 0; i < employees.length; i++) {
    if (employees[i].getJobTitle() === "Manager") {
        addMgr(employees[i])
    } else if (employees[i].getJobTitle() === "Engineer") {
        addEng(employees[i])
    } else if (employees[i].getJobTitle() === "Intern") {
        addInt(employees[i])
    }
}
return html.join('');
}

module.exports = employees => {
return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="src/css/style.css" />
      <title>forTheTeam</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-2">Meet the Team that will Take Over the World!</h1>
        <main> ${genHTML(employees)} </main>
      </div>
    </div>
    </body>
    </html>
    `;
}

