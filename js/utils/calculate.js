calculateInterest = () => {     
    let amount = document.getElementById('deposit_amount').value;
    amount = parseFloat(amount);
    if(isNaN(amount)){
        alert("Enter a valid Amount!");
    }
    else if(document.getElementById('product_selected') == ""){
        alert("select a product!");
    }
    else if(document.getElementById('days_selected') == ""){
        alert("select duration!");
    }
    else{
        const productRate = {
            piggybank:0.10,
            flexnaira:0.10, 
            safelock:0.13, 
            flexdollars:0.06
        }
         
        let product = document.getElementById('product_selected').value;   
        let duration = document.getElementById('days_selected').value;
        duration = parseInt(duration);     
        console.log(productRate[product]);
        let interest = productRate[product] / 365 * parseInt(duration) * parseFloat(amount);
        interest = interest.toFixed(2);
        document.getElementById('total_interest').innerHTML = interest;
         
    }
    

}

setDays = (day) => {
    if(day == 7){
        document.getElementById('7days').classList.add("selectedDay");
        document.getElementById('14days').classList.remove("selectedDay");
        document.getElementById('30days').classList.remove("selectedDay");
        document.getElementById('90days').classList.remove("selectedDay");
        document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 7
    }
    else if(day == 14){
        document.getElementById('7days').classList.remove("selectedDay");
        document.getElementById('14days').classList.add("selectedDay");
        document.getElementById('30days').classList.remove("selectedDay");
        document.getElementById('90days').classList.remove("selectedDay");
        document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 14
    }
    else if(day == 30){
        document.getElementById('7days').classList.remove("selectedDay");
        document.getElementById('14days').classList.remove("selectedDay");
        document.getElementById('30days').classList.add("selectedDay");
        document.getElementById('90days').classList.remove("selectedDay");
        document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 30
    }
    else if(day == 90){
        document.getElementById('7days').classList.remove("selectedDay");
        document.getElementById('14days').classList.remove("selectedDay");
        document.getElementById('30days').classList.remove("selectedDay");
        document.getElementById('90days').classList.add("selectedDay");
        document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 90
    }
    else if(day == 180){
        document.getElementById('7days').classList.remove("selectedDay");
        document.getElementById('14days').classList.remove("selectedDay");
        document.getElementById('30days').classList.remove("selectedDay");
        document.getElementById('90days').classList.remove("selectedDay");
        document.getElementById('180days').classList.add("selectedDay");
        document.getElementById('days_selected').value = 180
    }
}

setProduct = (product) => {

    if(product == 1){
        document.getElementById('prd01').classList.add("selectedProduct");
        document.getElementById('prd02').classList.remove("selectedProduct");
        document.getElementById('prd03').classList.remove("selectedProduct");
        document.getElementById('prd04').classList.remove("selectedProduct");
        document.getElementById('product_selected').value = "piggybank"
         
        document.getElementById('annual_interest').innerHTML = "10";
        document.getElementById('daily_interest').innerHTML = "0.027";
    }
    else if(product == 2){
        document.getElementById('prd01').classList.remove("selectedProduct");
        document.getElementById('prd02').classList.add("selectedProduct");
        document.getElementById('prd03').classList.remove("selectedProduct");
        document.getElementById('prd04').classList.remove("selectedProduct");
        document.getElementById('product_selected').value = "flexnaira"
        document.getElementById('annual_interest').innerHTML = "10";
        document.getElementById('daily_interest').innerHTML = "0.027";
    }
    else if(product == 3){
        document.getElementById('prd01').classList.remove("selectedProduct");
        document.getElementById('prd02').classList.remove("selectedProduct");
        document.getElementById('prd03').classList.add("selectedProduct");
        document.getElementById('prd04').classList.remove("selectedProduct");
        document.getElementById('product_selected').value = "safelock"
        document.getElementById('annual_interest').innerHTML = "13";
        document.getElementById('daily_interest').innerHTML = "0.036";
    }
    else if(product == 4){
        document.getElementById('prd01').classList.remove("selectedProduct");
        document.getElementById('prd02').classList.remove("selectedProduct");
        document.getElementById('prd03').classList.remove("selectedProduct");
        document.getElementById('prd04').classList.add("selectedProduct");
        document.getElementById('product_selected').value = "flexdollars"
        document.getElementById('annual_interest').innerHTML = "6";
        document.getElementById('daily_interest').innerHTML = "0.016";
    }
}