
//VISION SETUP
const key = "AIzaSyBt7oA-DT1I6u-q-rdxKsZT8hqNFdpPpiY";
const url = "https://vision.googleapis.com/v1/images:annotate?key=" + key;
/*
var gcloud = require('gcloud')({
    keyFilename: 'C:/Users/Teya/Documents/Visual\ Studio\ 2015/WebSites/Vision/Vision-d54be51ad271.json',
    projectId: 'vision-196620'
});*/
//var vision = gcloud.vision();

var image = 'img/profile.jpg';









var registerButton = document.getElementById('register-button');

$(registerButton).on('click', function () {
});


//AJAX

var xhr = new XMLHttpRequest(); //create XMLHttp object

//Callback function to handle the response sent by server
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { //Got the response back, status of 200 is good, status of 404 is not found
        if (xhr.status === 200) {
            //document.getElementById('register-button').innerHTML = xhr.responseText;
            //var a = JSON.stringify(xhr.responseText);
            var imageParsed = JSON.parse(xhr.responseText); //parsed the json
            
            var moods = '<ul class="list-group">';
            for (var i = 0; i < imageParsed.faceAnnotations.length; i += 1) {
                var joyDescription = '<li class="list-group-item d-flex justify-content-between align-items-center">Happy'+
                        '<span class="badge badge-primary badge-pill">' + imageParsed.faceAnnotations[i].joyLikelihood + '</span></li>';
                var sorrowDescription = '<li class="list-group-item d-flex justify-content-between align-items-center">Sad' +
                        '<span class="badge badge-primary badge-pill">' + imageParsed.faceAnnotations[i].sorrowLikelihood + '</span></li>';
                var angerDescription = '<li class="list-group-item d-flex justify-content-between align-items-center">Anger' +
                        '<span class="badge badge-primary badge-pill">' + imageParsed.faceAnnotations[i].angerLikelihood + '</span></li>';
                var m = imageParsed.faceAnnotations[i].joyLikelihood;

                moods = moods + joyDescription + sorrowDescription + angerDescription + '</ul>';
                $('#me').html(moods);
                $('#kazoua').html(moods); //for now just fill with the same info

            }

        } else {
        }
    }
};

//Open the request using HTTP GET to receive information
xhr.open('GET', 'data/profile.json'); //GET information from this site.
//Send request
xhr.send();


//Use POST when you're gonna save things to database
var register = new XMLHttpRequest();
register.onreadystatechange = function () {
    if (register.readyState === 4) {
    }
}


