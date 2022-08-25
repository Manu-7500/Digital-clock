let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

document.getElementById( "hours" ).innerHTML = hours;
document.getElementById( "minutes" ).innerHTML = minutes;
document.getElementById( "seconds" ).innerHTML = seconds;

var ampm = "AM";
if ( hours == 0 ) {
    hours = 12;
}
if ( hours > 12 ) {
    hours = hours - 12;
    ampm = "PM";
};
document.getElementById( "ampm" ).innerHTML = ampm;