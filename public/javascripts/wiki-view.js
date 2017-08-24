var entry = document.getElementById('search').value;
var submit = document.getElementById('submit');
var endpoint = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=df712972cb4ab5fa9eca2a9e04c2511d";

function getWiki() {
    var http = new XMLHttpRequest();

    http.onreadystatechange = () => {

        if (http.readyState == 4 && http.status == 200) {
            let result = JSON.parse(http.response);
            console.log(result);
        }
    };
    http.open("GET", endpoint, true);
    http.send();
};

// jQuery method
function getWiki2() {

    $.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=df712972cb4ab5fa9eca2a9e04c2511d", function(data) {
        console.log(data);
    });
};

submit.addEventListener('click', getWiki2);