function calculateLoan() {
    const principal = parseFloat(document.querySelector("#principal").value);
    const annual_rate = parseFloat(document.querySelector("#annual_rate").value)/100;
    const n = parseFloat(document.querySelector("#months").value);


    if(isNaN(principal) || isNaN(annual_rate) || isNaN(n)) {
        alter("Invalid values detected.");
    }


    const r = annual_rate/12;
    const m = principal * r * (1+r)**n/((1+r)**n-1);
    const total_paid = m * n;
    const total_interest = total_paid - principal;

    document.querySelector(".payment > span").textContent = m.toFixed(2);
    document.querySelector(".interest > span").textContent = total_interest.toFixed(2);

    document.querySelector(".results").classList.remove("hidden");
}