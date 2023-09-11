const express = require("express");
const app = express();
/*const port = 5000;
app.listen(port,() => console.log(`App is listening on port ${port}!`));*/

  /*  const headSetter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin','*')

    next()

    }
app.use(headSetter)*/
app.get('/api/slack_name=Vee&&track=backend',(req, res) => {
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
/*
app.get("/api",(req, res) => {
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
        "github_repo_url": "https://github.com/veemish/taskone_simple_api",
        "status_code": 200,
    }

    res.status(200).json(details)
    
});



app.get('*', (req, res) => {
    res.status(404).json({"error":"The page your looking for is not here"})
})*/










