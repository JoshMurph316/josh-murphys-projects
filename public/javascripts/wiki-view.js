var endpoint = 'https://en.wikipedia.org/wiki/Special:Random';

var entry = document.getElementById('search').value;

var submit = document.getElementById('submit');

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

submit.addEventListener('click', getWiki);