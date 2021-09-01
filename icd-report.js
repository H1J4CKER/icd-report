
function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbw6jsBjKXv-K9Q7AHA9iEuwbIg8oba5UCoGrBpfPcizMlqRWk2nKBfh0sQp2TUdhXeBPA/exec"


    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}
document.getElementById("btn").addEventListener("click",testGS);

function doGet() {
    const response = [{status: "Cool!"}];

    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
  
}
