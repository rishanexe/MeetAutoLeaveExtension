document.getElementById("autoleave").addEventListener("click", runScript);

function runScript() {
    chrome.tabs.executeScript(null, {file: './foreground.js'}, (result) => {if(result == undefined) console.log("Some error occured")});
    document.getElementById('activate-label').innerHTML = "Activated";
}