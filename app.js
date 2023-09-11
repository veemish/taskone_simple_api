const express = require("express");
const app = express();



const http = require('http');
const PORT = 4000;


const currentDate = new Date() 
const utc_time = currentDate.toISOString().slice(0,+5)+"Z";/*let utc_time = currentDate.toISOString().slice(0,-5)+'Z'; */
const currentDateNum = currentDate.getDay();
const daysInWeek = ['Sunday','Monday' ,'Tuesday' ,'Wensday','Thursday','Friday','Saturday'];
const currentDayToday = daysInWeek[currentDateNum];

/**/

// const currentUtcTime = new Date().toISOString();

/*const current = new Date();
const year = current.getUTCFullYear();
const month = String(current.getUTCMonth() + 1).padStart(2, "0"); // Add 1 to month because it's 0-indexed
const day = String(current.getUTCDate()).padStart(2, "0");
const hours = String(current.getUTCHours()).padStart(2, "0");
const minutes = String(current.getUTCMinutes()).padStart(2, "0");
const seconds = String(current.getUTCSeconds()).padStart(2, "0");

const currentUtcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`; */


/*Time ----------------------------- */

/*let currentDate = new Date() undefine for time
let utc_time = currentDate.toISOString().split(".")[1,-2];/*let utc_time = currentDate.toISOString().slice(0,-5)+'Z'; */
/*const currentDateNum = currentDate.getDay();
const daysInWeek = ['Sunday','Monday' ,'Tuesday' ,'Wensday','Thursday','Friday','Saturday'];
const currentDayToday = daysInWeek[currentDateNum];*/
    /*let now = new Date();
    utc_time = currentDate.toISOString().split(".")[0];*/
  
/*Day ---------------------------*/

/* works const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayToday = daysInWeek[new Date().getDay()];*/


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(
    JSON.stringify({
 "slack_name": "Vee",
  "current_day": `${currentDayToday}`,
  "utc_time": `${utc_time}`,
  "track": "backend",
  "github_file_url": "https://github.com/veemish/taskone_simple_api/blob/main/app.js",
  "github_repo_url": "https://github.com/veemish/taskone_simple_api",
  "status_code": 200},
   ));
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)

})
/*app.get('/api?slack_name=Vee&track=backend', (req, res) => {
    


})*/









/*  utc function
function utcTime() {
    const now = new Date();
    let utc_time = currentDate.toISOString().split(".")[0] + "Z";
    return utc_time;
 */
/*req.on('data', (chunk) => {
    console.log('You received a chunk of data', chunk)
  })

  res.end('some data')*/

 /* app.get('/api?slack_name=Vee&track=backend', (req, res) => {
    // handle the reques
    let currentDate = new Date()
    let utc_time = currentDate.toISOString().slice(0, -5) +'Z';
    const currentDateNum = currentDate.getDay();
    const daysInWeek = ["Sunday",'Monday' ,'Tuesday' ,'Wensday','Thursday','Friday','Saturday'];
    const currentDayToday = daysInWeek[currentDateNum];
   
    const details = {
        "slack_name":`${slack_name}`,
        "current_day":`${currentDayToday}`,
        'utc_time':`${utc_time}`,
        "track":`${track}`,
        "github_file_url": "https://github.com/veemish/taskone_simple_api/blob/main/app.js",
        "github_repo_url": "https://github.com/veemish/taskone_simple_app",
        "status_code": 200,
    }


    res.send('application/json').json(details)
  })

*/

/*app.get("/api?slack_name=Vee&&track=backend",(req, res) => {
   let slack_name = req.query.slack_name
    let track = req.query.track
    /*Date time*/
   /*let currentDate = new Date()
    let utc_time = currentDate.toISOString().slice(0, -5) +'Z';
    const currentDateNum = currentDate.getDay();
    const daysInWeek = ['Monday' ,'Tuesday' ,'Wensday','Thursday','Friday','Saturday','Sunday'];
    const currentDayToday = daysInWeek[currentDateNum];


    const details = {
        "slack_name":`${slack_name}`,
        "current_day":`${currentDayToday}`,
        'utc_time':`${utc_time}`,
        "track":`${track}`,
        "github_file_url": "https://github.com/veemish/taskone_simple_api/blob/main/app.js",
        "github_repo_url": "https://github.com/veemish/taskone_simple_app",
        "status_code": 200,
    }

    res.status(200).json(details)
    
});*/






/*app.use(express.json());*/
/*const port = process.env.PORT || 5000;*/


/*app.listen(port,() => console.log(`App is listening on port ${port}!`));*/

   /* const headSetter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin','*')

    next()

    }*/
/*app.use(headSetter)*/
/*app.get('/api?slack_name=Vee&&track=backend',(req, res) => {
    res.send([
        {
            "slack_name": "Vee",
            "current_day": "Sunday",
            "utc_time": "2023-09-10T19:05:00",
            "track": "backend",
            "github_file_url": "https://github.com/veemish/taskone_simple_api/blob/main/app.js",
            "github_repo_url": "https://github.com/veemish/taskone_simple_api",
            "status_code": 200 
        }
    ]);
});

app.use('/', express.static('/build'))


app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});

app.listen(5000, () => {
    console.log("listening on http://localhost:5000");
})
*/
/*app.get("/api?slack_name=Vee&&track=backend",(req, res) => {
   let slack_name = req.query.slack_name
    let track = req.query.track
    /*Date time*/
  /* let currentDate = new Date()
    let utc_time = currentDate.toISOString().slice(0, -5) +'Z';
    const currentDateNum = currentDate.getDay();
    const daysInWeek = ['Monday' ,'Tuesday' ,'Wensday','Thursday','Friday','Saturday','Sunday'];
    const currentDayToday = daysInWeek[currentDateNum];


    const details = {
        "slack_name":`${slack_name}`,
        "current_day":`${currentDayToday}`,
        'utc_time':`${utc_time}`,
        "track":`${track}`,
        "github_file_url": "https://github.com/veemish/taskone_simple_api/blob/main/app.js",
        "github_repo_url": "https://github.com/veemish/taskone_simple_app",
        "status_code": 200,
    }

    res.status(200).json(details)
    
});
*/


/*app.get('*', (req, res) => {
    res.status(404).json({"error":"The page your looking for is not here"})
})*/










