

function calculateDaysNeeded() {
    const pagesRead = parseInt (document.getElementById("pages").value);
    const daysNeeded = 604 / pagesRead;
    printDaysNeededToCard(daysNeeded, pagesRead);
    
}

function printDaysNeededToCard(daysNeeded, pagesRead) {
    let message = "If you read " + pagesRead + " page(s) a day, you will complete it in about " + daysNeeded + " day(s). ";
    if (pagesRead === 0) {
        message = "Please read the Quran...";
    } else if (pagesRead < 0) {
        message = "Error! No negative pages!";
    } else if (pagesRead > 604){
        message = "Error! Maximum pages in the Quran is 604 pages!";
    } else if (daysNeeded < 30) {
        message += "Keep up the good pace! You will khatam the quran in no time!";
    } else if (daysNeeded > 30) {
        message+="Keep on reading the Quran meticulously! You will reach the end one day!"
    } else if (daysNeeded > 365) {
        message += "You will khatam the Quran slowly but surely. All your hardwork will be paid off, insyaallah!";
    }

    

    document.getElementById("cardContents").innerHTML = message;
    
}