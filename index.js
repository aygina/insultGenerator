const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

fetch(url).then(response => response.json())
    .then(insult => {
        document.getElementById("insult").innerHTML = insult.insult;
    })
    .catch(error => console.log(error));

function getInsult() {
    newUrl = `https://evilinsult.com/generate_insult.php?lang=en&type=json&_=${Date.now()}`;
    fetch(newUrl).then(response => response.json())
        .then(insult => {
            document.getElementById("insult").innerHTML = insult.insult;
        })
        .catch(error => console.log(error));
}