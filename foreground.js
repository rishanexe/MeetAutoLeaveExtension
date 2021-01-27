var maxPart = 0;
var timeCount = 0;
alert("Auto Leave activated for this Meet session.");

console.log("[PROGRESS] Counting number of participants.\n"); 
var phaseOne = setInterval(function() {
                    try {
                        var partP = document.getElementsByClassName("wnPUne N0PJ8e")[0].innerText;
                    } catch(err) {
                        console.log("Cannot activate on this page.");
                        clearInterval(phaseOne);
                    }
                    partP = parseInt(partP);
                        if(partP > maxPart) {
                            maxPart = partP;
                        }
                        timeCount++;
                        console.log("["+timeCount+"]"+" Participants: "+maxPart);
                        if(timeCount > 450) {
                            clearInterval(phaseOne);
                            console.log("[DONE] Counting number of participants.\n");
                            phaseTwo(maxPart);
                        }
                }, 2000);

function phaseTwo(maxP) {
    partLimit = Math.ceil(maxP/2);
    console.log("[PROGRESS] Ending session at "+partLimit+" participants.\n");
    setInterval(function() { 
        var parts = document.getElementsByClassName("wnPUne N0PJ8e")[0].innerText;
        parts = parseInt(parts);
        console.log("[-] Participants Remaining: "+parts+"\n");
        if(parts <= partLimit) {
            document.getElementsByClassName("U26fgb JRY2Pb mUbCce kpROve GaONte Qwoy0d ZPasfd vzpHY")[0].click();
            console.log("[-] Meet Ended.");
        }
     }, 1000);
}