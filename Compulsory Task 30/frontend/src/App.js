/*
Task:                App.js
Assigned to:         Admin
Date assigned:       20th July 2024
Due date:            20th July 2024
Task complete?       Yes
Task description:    Create an html file called api.js
*/

import React, { useState, useEffect, usefetch } from "react";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  //------------------------------------------------------------------------------
  // Instead of using a useEffect to retrieve the fetched data,
  // I am using my sendWord function to retrive and display the data.
  const [word, setWord] = useState("");
  const [fetchJSON, setFetchJSON] = useState({});
  const [loadingFetch, setLoadingFetch] = useState(true);

  // Below in my fucntion I am using a put request to send the username to my backend.
  const sendWord = (event) => {
    event.preventDefault();

    const arr = { "word": word};

    fetch("http://localhost:3500/search", {
      method: "PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(arr)
    })
    .then(response => response.json())
    // Below the loading is set to false,
    // while it is false it displays 'Loading data...' until the fetch is called.
    .then(setLoadingFetch(false))
    .then(fetchJSON => setFetchJSON(fetchJSON));
  }

  

  return(
    <div>
      <div>
        <h1> Welcome to my fullstack webpage! </h1>
      </div>

      <div>
        <h3> To search for a user on github enter their username below: </h3>

        <form >
          <input type="text" id="Username" name="Username" placeholder="Username: " value={word} onChange={(e) => setWord(e.target.value)} /><br/>
          <button type="submit" onClick={sendWord} > Search </button>
        </form>
      </div>

      <div>
        {loadingFetch ? (
          <p> Loading user </p>
        ) : <div>
          <div> Username: {fetchJSON.username} </div>
          <div> Repos: {fetchJSON.rep} </div>
          <div> Bio: {fetchJSON.biog} </div>
          <div> Profile picture url: {fetchJSON.prof} </div>
          <br/>
          <div> Repo 1</div>
          <div> Repo ID: {fetchJSON.repID} </div>
          <div> Latest commit: {fetchJSON.lCommit} </div>
          <div> Creation date: {fetchJSON.cDate} </div>
          <div> Description: {fetchJSON.dsc} </div>
          <div> Commit description: {fetchJSON.msg} </div>
          <br/>
          <div> Repo 2 </div>
          <div> Repo ID: {fetchJSON.repID2} </div>
          <div> Latest commit: {fetchJSON.lCommi2t} </div>
          <div> Creation date: {fetchJSON.cDate2} </div>
          <div> Description: {fetchJSON.dsc2} </div>
          <div> Commit description: {fetchJSON.msg2} </div>
          <br/>
          <div> Repo 3</div>
          <div> Repo ID: {fetchJSON.repID3} </div>
          <div> Latest commit: {fetchJSON.lCommit3} </div>
          <div> Creation date: {fetchJSON.cDate3} </div>
          <div> Description: {fetchJSON.dsc3} </div>
          <div> Commit description: {fetchJSON.msg3} </div>
          <br/>
          <div> Repo 4</div>
          <div> Repo ID: {fetchJSON.repID4} </div>
          <div> Latest commit: {fetchJSON.lCommit4} </div>
          <div> Creation date: {fetchJSON.cDate4} </div>
          <div> Description: {fetchJSON.dsc4} </div>
          <div> Commit description: {fetchJSON.msg4} </div>
          <br/>
          <div> Repo 5</div>
          <div> Repo ID: {fetchJSON.repID5} </div>
          <div> Latest commit: {fetchJSON.lCommit5} </div>
          <div> Creation date: {fetchJSON.cDate5} </div>
          <div> Description: {fetchJSON.dsc5} </div>
          <div> Commit description: {fetchJSON.msg5} </div>
          <br/>
        </div>
        }
      </div>

    </div>
  )


  

}

export default App;
