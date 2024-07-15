function changeContent() {
    document.getElementById("title").textContent = "Hello, JavaScript!";
    document.querySelector(".content").innerHTML = "This paragraph has been changed.";
}

function toggleHighlight() {
    document.getElementById("title").classList.toggle("highlight");
}
