// console.log("This script works");

// document.getElementById("button").addEventListener("click", logButtonClick);

// function myApp() {
//     const button = document.getElementById("button");
//     button.addEventListener("click", logButtonClick);
// }

// function logButtonClick() {
//     alert("This button is clicked");
// }

function callAPI() {
    // fetch("https://raw.githubusercontent.com/datacharmer/test_db/master/load_departments.dump").then(function(response){
    //   console.log(response); 
    // });


    //     fetch("https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api").then(
    //     function(response) {
    //       if (response.status !== 200) {
    //         console.log('Looks like there was a problem. Status Code: ' +
    //           response.status);
    //         return;
    //       }

    //       // Examine the text in the response
    //       response.json().then(function(data) {
    //         console.log(data);
    //       });
    //     }
    //   )
    //   .catch(function(err) {
    //     console.log('Fetch Error :', err);
    //   });

    //   postData(`"https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api`, {username: "joe", password: "nunya"})
    //   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    //   .catch(error => console.error(error));
    fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'foo=bar&lorem=ipsum'
        })
        .then(json)
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });
}

function callAPI2(post) {
    console.log('Posting request to JSON');
    fetch('https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api', {
        method: 'post',
        body: post
    }).then(function(response) {
        return response.json();
    });
}

document.getElementById('postData').addEventListener('submit', postData);

function postData(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let pass = document.getElementById('pass').value;

    fetch('https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username: username, pass: pass })
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}



// function postData(url = ``, data = {}) {
//   // Default options are marked with *

//     return fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, cors, *same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//         redirect: "follow", // manual, *follow, error
//         referrer: "no-referrer", // no-referrer, *client
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses JSON response into native Javascript objects 
// }
