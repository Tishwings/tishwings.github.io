//Quelle: https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

function startTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var elements = document.getElementsByClassName('datetime');

    for (i = 0; i < elements.length; i++) {
      elements[i].innerHTML =
      dd + '/' + mm + '/' + yyyy + " um " + h + ":" + m + " Uhr";
      var t = setTimeout(startTime, 5000);
    }

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
