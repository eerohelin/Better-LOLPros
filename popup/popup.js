OPGGButton = document.getElementById("OPGGButton")

var isMulti

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let url = tabs[0].url;
    if (url.includes("lolpros.gg/multi")) {
        isMulti = true
    } else {
        isMulti = false
    }
    // use `url` here inside the callback because it's asynchronous!
});

function createOPGG() {
    if (isMulti) {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            tabID = tabs[0].id;
            chrome.scripting.executeScript(
                {
                  target: {tabId: tabID},
                  files: ['createOPGG.js'],
                },
                () => {  });
        });
    } else {
        console.log("ERROR! Make sure you have a multi-lolpros open")
    }
}
OPGGButton.addEventListener("click", createOPGG)