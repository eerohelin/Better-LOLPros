names = document.getElementsByClassName("--selected")
nameList = ""
link = "https://euw.op.gg/multisearch/euw?summoners="
for (let item of names) {
    nameList += item.getElementsByClassName("summoner-name")[0].innerHTML + ","
}

url = link + nameList

window.open(url, '_blank').focus();