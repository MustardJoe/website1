var theDate = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
     "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
     "Friday", "Saturday"];

    let doWeek = days[theDate.getDay()];
    let formatMonth = months[theDate.getMonth()];
    let formatDay = theDate.getDate();
    let formatYear = theDate.getFullYear();
    let textDate = doWeek + ", " + formatMonth + " " + formatDay + ", "
        + formatYear;

    document.getElementById("theTime").innerHTML = textDate;
    document.getElementById("theTime2").innerHTML = theDate;