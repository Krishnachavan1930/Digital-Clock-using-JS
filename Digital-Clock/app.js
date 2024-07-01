// Get references to the HTML elements for time
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Get references to the HTML elements for date, month, and dayname
let dayname = document.getElementById("dayname");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

// Function to update time and date elements every second
setInterval(() => {
    let currentTime = new Date();

    // Update time elements
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    // Update date elements
    date.innerHTML = currentTime.getDate();

    // Array of month names
    let monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];

    // Update month element with current month name
    month.innerHTML = monthNames[currentTime.getMonth()]; // Month is zero-indexed

    // Update year element with current year
    year.innerHTML = currentTime.getFullYear();

    // Array of day names for easy lookup
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Update dayname element with current day's name
    dayname.innerHTML = dayNames[currentTime.getDay()];
}, 1000); // Update every 1000ms (every second)
