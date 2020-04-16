function age() {

    var Today = new Date();

    Date1 = document.getElementById("birthday").value;
    var BirthDay = new Date(Date1);

    Difference = Today.getTime() - BirthDay.getTime()

    //document.getElementById("show").innerHTML = Difference;

    var diffDays = Math.floor(Difference / (1000 * 3600 * 24));

    diffYears = Math.floor(diffDays / 365);
    diffYearsElse = Math.floor(diffDays % 365);

    diffMonth = Math.floor(diffYearsElse / 30);
    diffDays = Math.floor(diffYearsElse % 30);

    document.getElementById("show").innerHTML = "You are ";
    if (diffYears != 0) {
        document.getElementById("show").innerHTML += + diffYears;
        if (diffYears == 1) document.getElementById("show").innerHTML += " year ";
        else document.getElementById("show").innerHTML += " years ";
    }
    if (diffMonth != 0) {
        document.getElementById("show").innerHTML += diffMonth;
        if (diffMonth == 1) document.getElementById("show").innerHTML += " month ";
        else document.getElementById("show").innerHTML += " months ";
    }
    if (diffDays != 0) {
        document.getElementById("show").innerHTML += diffDays;
        if (diffDays == 1) document.getElementById("show").innerHTML += " day ";
        else document.getElementById("show").innerHTML += " days ";
        document.getElementById("show").innerHTML += "old";
    }


}

//mm-dd-yyyy
//04-16-2020
//06-20-2018
//+ " years " + diffMonth + " months " + diffDays + " days";