window.onload = makeCall;


function makeCall() {
    var script = document.createElement("script");
    script.src = 'https://api.github.com/gists?callback=myCallBack';
    document.body.appendChild(script);
    $.getJSON('https://api.github.com/gists?callback=?', function(json) {
        $("#content").html(json);

    });
}

function myCallBack(response) {
    document.getElementById("content").innerHTML = response.toString();
}