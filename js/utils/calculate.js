var report = "nill";
const interestData = {
    "Deposit Amount": "",
    "Duration": "",
    "Product": "", 
    "Total Interest Amount": ""
}
calculateInterest = () => {  
    report = 'interest';   
    let amount = document.getElementById('deposit_amount').value;
    interestData['Deposit Amount'] = amount;
    amount = parseFloat(amount);
    if(isNaN(amount)){
        alert("Enter a valid Amount!");
    }
    else if(document.getElementById('time-selector').selectedIndex == 0){
        alert("select duration!");
    }
    else if(document.getElementById('product-selector').selectedIndex == 0){
        alert("select a product!");
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
        interestData['Duration'] =duration;
        interestData['Product'] = product;
        duration = parseInt(duration);     
        console.log(productRate[product]);
        let interest = productRate[product] / 365 * parseInt(duration) * parseFloat(amount);
        interest = interest.toFixed(2);
        document.getElementById('total_interest').innerHTML = interest;
        interestData['Total Interest Amount'] = interest;
         
    }
    

}

setDays = (day) => {
    if(day == 7){
        // document.getElementById('7days').classList.add("selectedDay");
        // document.getElementById('14days').classList.remove("selectedDay");
        // document.getElementById('30days').classList.remove("selectedDay");
        // document.getElementById('90days').classList.remove("selectedDay");
        // document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 7
    }
    else if(day == 14){
        // document.getElementById('7days').classList.remove("selectedDay");
        // document.getElementById('14days').classList.add("selectedDay");
        // document.getElementById('30days').classList.remove("selectedDay");
        // document.getElementById('90days').classList.remove("selectedDay");
        // document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 14
    }
    else if(day == 30){
        // document.getElementById('7days').classList.remove("selectedDay");
        // document.getElementById('14days').classList.remove("selectedDay");
        // document.getElementById('30days').classList.add("selectedDay");
        // document.getElementById('90days').classList.remove("selectedDay");
        // document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 30
    }
    else if(day == 90){
        // document.getElementById('7days').classList.remove("selectedDay");
        // document.getElementById('14days').classList.remove("selectedDay");
        // document.getElementById('30days').classList.remove("selectedDay");
        // document.getElementById('90days').classList.add("selectedDay");
        // document.getElementById('180days').classList.remove("selectedDay");
        document.getElementById('days_selected').value = 90
    }
    else if(day == 180){
        // document.getElementById('7days').classList.remove("selectedDay");
        // document.getElementById('14days').classList.remove("selectedDay");
        // document.getElementById('30days').classList.remove("selectedDay");
        // document.getElementById('90days').classList.remove("selectedDay");
        // document.getElementById('180days').classList.add("selectedDay");
        document.getElementById('days_selected').value = 180
    }
}

setProduct = (product) => {

    if(product == 1){
        // document.getElementById('prd01').classList.add("selectedProduct");
        // document.getElementById('prd02').classList.remove("selectedProduct");
        // document.getElementById('prd03').classList.remove("selectedProduct");
        // document.getElementById('prd04').classList.remove("selectedProduct");
        document.getElementById('product_selected').value = "piggybank"
         
        document.getElementById('annual_interest').innerHTML = "10";
        document.getElementById('daily_interest').innerHTML = "0.027";
    }
    else if(product == 2){
        // document.getElementById('prd01').classList.remove("selectedProduct");
        // document.getElementById('prd02').classList.add("selectedProduct");
        // document.getElementById('prd03').classList.remove("selectedProduct");
        // document.getElementById('prd04').classList.remove("selectedProduct");
        document.getElementById('product_selected').value = "flexnaira"
        document.getElementById('annual_interest').innerHTML = "10";
        document.getElementById('daily_interest').innerHTML = "0.027";
    }
    else if(product == 3){
        // document.getElementById('prd01').classList.remove("selectedProduct");
        // document.getElementById('prd02').classList.remove("selectedProduct");
        // document.getElementById('prd03').classList.add("selectedProduct");
        // document.getElementById('prd04').classList.remove("selectedProduct");
        document.getElementById('product_selected').value = "safelock"
        document.getElementById('annual_interest').innerHTML = "13";
        document.getElementById('daily_interest').innerHTML = "0.036";
    }
    else if(product == 4){
        // document.getElementById('prd01').classList.remove("selectedProduct");
        // document.getElementById('prd02').classList.remove("selectedProduct");
        // document.getElementById('prd03').classList.remove("selectedProduct");
        // document.getElementById('prd04').classList.add("selectedProduct");
        document.getElementById('product_selected').value = "flexdollars"
        document.getElementById('annual_interest').innerHTML = "6";
        document.getElementById('daily_interest').innerHTML = "0.016";
    }
}

const isNumber = (evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //console.log("Key code: "+charCode);
    if(charCode == 46){
        return true
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}