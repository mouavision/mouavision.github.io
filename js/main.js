

var registerButton = document.getElementById('register-button');

$(registerButton).on('click', function () {
    alert("SUBMIT");
});








//AJAX

var xhr = new XMLHttpRequest(); //create XMLHttp object

//Callback function to handle the response sent by server
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { //Got the response back, status of 200 is good, status of 404 is not found
        if (xhr.status === 200) {
            document.getElementById('register-button').innerHTML = xhr.responseText;
        } else {
        }
    }
};

//Open the request using HTTP GET to receive information
xhr.open('GET', 'https://api.darksky.net/forecast/bb4d6f416f68271f7102264619bc6569/38.254637,-121.299949'); //GET information from this site.

//Send request
xhr.send();


//Use POST when you're gonna save things to database
var register = new XMLHttpRequest();
register.onreadystatechange = function () {
    if (register.readyState === 4) {
    }
}


