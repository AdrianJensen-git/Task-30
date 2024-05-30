/*
Task:                api.js
Assigned to:         Admin
Date assigned:       20th July 2024
Due date:            20th July 2024
Task complete?       Yes
Task description:    Create an html file called api.js
*/

const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Axios = require('axios');
const helmet = require('helmet');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

const port = process.env.PORT || 3500;

//-----------------------------------------------------
//Below is my function that returns my json file.
function getUser(){
    try {
        const content = fs.readFileSync('users.json')
        return JSON.parse(content)
    }catch (e) { 
        fs.writeFileSync('users.json', '[]')
        return []
    }
}

//------------------------------------------------------------------------------
// Below allows me to display my json file.
app.get('/api', (req, res) => {
    const display2 = getUser();
    res.send(display2);
});


//------------------------------------------------------------------------------
// Below is my put request that fetches from the api an sends it back to the frontend.
app.put('/search', (req, res) => {
    const wordInput = req.body.word;

    // Below is my search function.
    const search = async() => {
      const user = "AdrianJensen-git";

      // Below are my first api calls.
      const api = await fetch(`https://api.github.com/users/${wordInput}`);
      const api2 = await fetch(`https://api.github.com/users/${wordInput}/repos`);

      const json = await api.json();
      const json2 = await api2.json();

      // Below I am assigning the fetched data to variables.
      const userName = json.login;
      const repos = json.public_repos;
      const bio = json.bio;
      const pfp = json.avatar_url;

      const repoID = json2[json2.length - 1].id;
      const repoID2 = json2[json2.length - 2].id;
      const repoID3 = json2[json2.length - 3].id;
      const repoID4 = json2[json2.length - 4].id;
      const repoID5 = json2[json2.length - 5].id;

      const lastCommit = json2[json2.length - 1].updated_at;
      const lastCommit2 = json2[json2.length - 2].updated_at;
      const lastCommit3 = json2[json2.length - 3].updated_at;
      const lastCommit4 = json2[json2.length - 4].updated_at;
      const lastCommit5 = json2[json2.length - 5].updated_at;

      const creationDate = json2[json2.length - 1].created_at;
      const creationDate2 = json2[json2.length - 2].created_at;
      const creationDate3 = json2[json2.length - 3].created_at;
      const creationDate4 = json2[json2.length - 4].created_at;
      const creationDate5 = json2[json2.length - 5].created_at;

      const desc = json2[json2.length - 1].description;
      const desc2 = json2[json2.length - 2].description;
      const desc3 = json2[json2.length - 3].description;
      const desc4 = json2[json2.length - 4].description;
      const desc5 = json2[json2.length - 5].description;

      const repoName = json2[json2.length - 1].name;
      const repoName2 = json2[json2.length - 2].name;
      const repoName3 = json2[json2.length - 3].name;
      const repoName4 = json2[json2.length - 4].name;
      const repoName5 = json2[json2.length - 5].name;

      // Below the api fetches the 'sha' codes to get further information.
      const api3 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName}/commits`);
      const api4 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName2}/commits`);
      const api5 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName3}/commits`);
      const api6 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName4}/commits`);
      const api7 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName5}/commits`);

      const json3 = await api3.json();
      const json4 = await api4.json();
      const json5 = await api5.json();
      const json6 = await api6.json();
      const json7 = await api7.json();

      const sha = json3[0].sha;
      const sha2 = json4[0].sha;
      const sha3 = json5[0].sha;
      const sha4 = json6[0].sha;
      const sha5 = json7[0].sha;

      // Below I am using the sha codes to fetch the 'message' information.
      const api8 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName}/git/commits/${sha}`);
      const api9 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName2}/git/commits/${sha2}`);
      const api10 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName3}/git/commits/${sha3}`);
      const api11 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName4}/git/commits/${sha4}`);
      const api12 = await fetch(`https://api.github.com/repos/${wordInput}/${repoName5}/git/commits/${sha5}`);

      const json8 = await api8.json();
      const json9 = await api9.json();
      const json10 = await api10.json();
      const json11 = await api11.json();
      const json12 = await api12.json();

      const msg = json8.message;
      const msg2 = json9.message;
      const msg3 = json10.message;
      const msg4 = json11.message;
      const msg5 = json12.message;

      // Below the res.send is sending the data back to front end.
      res.send({
        username: userName,
        rep: repos,
        biog: bio,
        prof: pfp,
        repID: repoID,
        repID2: repoID2,
        repID3: repoID3,
        repID4: repoID4,
        repID5: repoID5,
        lCommit: lastCommit,
        lCommit2: lastCommit2,
        lCommit3: lastCommit3,
        lCommit4: lastCommit4,
        lCommit5: lastCommit5,
        cDate: creationDate,
        cDate2: creationDate2,
        cDate3: creationDate3,
        cDate4: creationDate4,
        cDate5: creationDate5,
        dsc: desc,
        dsc2: desc2,
        dsc3: desc3,
        dsc4: desc4,
        dsc5: desc5,
        mes: msg,
        mes2: msg2,
        mes3: msg3,
        mes4: msg4,
        mes5: msg5,
    })

    }
    search();
    console.log(wordInput);

})


app.listen(port, () => console.log(`Listening on port ${port}`));