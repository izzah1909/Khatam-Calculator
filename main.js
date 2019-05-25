

function calculateDaysNeeded() {
    const pagesRead = document.getElementById("pages").value;
    const daysNeeded = 604 / pagesRead;
    printDaysNeededToCard(daysNeeded);
    
}

function printDaysNeededToCard(daysNeeded) {
    document.getElementById("cardContents").innerHTML = daysNeeded;
    
}