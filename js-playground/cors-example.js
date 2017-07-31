window.onload = initAll;

function initAll() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(makeCall)
    } else
        alert("your browser doesn't support this!");
}

function makeCall(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var script = document.createElement("script");
    script.src = 'https://api.github.com/gists?callback=myCallBack';
    document.body.appendChild(script);
}

function myCallBack(response) {
    document.getElementById("content").innerHTML = response.toString();
}