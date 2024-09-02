function calculateLove() {
    const name1 = document.querySelector("#name1").value.trim();
    const name2 = document.querySelector("#name2").value.trim();

    if (name1 === "" | name2 === "") {
        alert("Please provide a proper name for both fields");
        return;
    }

    const percentage = Math.floor(Math.random() * 101);

    const result = document.querySelector("#result");
    result.innerHTML = `${name1} and ${name2}'s \nLove Percentage: ${percentage}%\n`;

    if (percentage < 30) result.innerHTML += "<span class='status'>\nNot a great match, keep looking.</span>";
    if (percentage >= 30 && percentage < 80) result.innerHTML += "<span class='status'>\nThere is a potential. Give it a try.</span>";
    if (percentage >= 80) result.innerHTML += "<span class='status'>\nPerfect Match! Love is in the air.</span>";
}
