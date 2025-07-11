
document.getElementById("loan-form").addEventListener("submit",calculate);
function calculate(e){
    const amount = document.getElementById("loan_amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlypayment = document.getElementById("monthly_payment");
    const totalamount = document.getElementById("total_amount");
    const totalinterest = document.getElementById("total_interest");
    
    const principal = parseFloat(amount.value);
    const calculatedinterest = parseFloat(interest.value)/100/12;
    const calculatedpayment = parseFloat(years.value) * 12; 
    const x = Math.pow(1 + calculatedinterest, calculatedpayment);
    const monthly = (principal *x* calculatedinterest)/(x-1);
    if(isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2)
        totalamount.value = (monthly * calculatedpayment).toFixed(2);
        totalinterest.value = (monthly * calculatedpayment - principal).toFixed(2);
        
        document.getElementById("results").style.display = "block"
        document.getElementById('loading').style.display = "block"
    } else {
        showAlert("Plses enter the amount");
      
    }
    // console.log(calculatedpayment);
    e.preventDefault();
}

function showAlert(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);
};
setTimeout(function(){
    document.querySelector('.alert').remove()
}, 3000)