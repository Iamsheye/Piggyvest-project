const forecastData = {
    "Expected Return":"",
    "Savings Interval": "",
    "Product":"", 
    "Start Date":"", 
    "End Date":"",
    "Recommended Savings":""
}

function forecast(){
    report = 'forecast';
    let startDate = new Date($("#startDate").val())
    let endDate = new Date($("#endDate").val())
    if (isNaN($("#expected_returns").val()) || $("#expected_returns").val() <=0){
        alert("Enter a valid amount")
    } else if ($("#savings_interval").val() === ""){
        alert("Select a valid interval")
    } else if ($("#product").val() === "") {
        alert("Select a valid product")
    } else if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())){
        alert("Invalid start or end date")
    }else{
        let savingsDuration = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        let expectedReturns = $("#expected_returns").val();
        let dailyInterest = 0;
        forecastData['Savings Interval'] = $("#savings_interval").val();
        forecastData['Product'] = $("#product").val();
        forecastData['Start Date'] = startDate;
        forecastData['End Date'] = endDate;
        forecastData['Expected Return'] = expectedReturns;
        const productRate = {
            piggybank: 0.027,
            flexnaira: 0.027,
            safelock: 0.036,
            flexdollars: 0.016
        }
        if(savingsDuration <= 0){
            alert("Invalid Date Range!\nDate Range cannot go backward")
        }else{
            dailyInterest = productRate[$("#product").val()];
            let dailyRecommended = (expectedReturns / savingsDuration) - dailyInterest;
            if ($("#savings_interval").val() === "Daily"){
                if(savingsDuration <= 1){
                    alert("Date range must be greater than 1 day for Daily saving interval")
                }else{
                    document.getElementById("interval_text").innerHTML = $("#savings_interval").val();
                    document.getElementById("recommended_saving").innerHTML = dailyRecommended.toFixed(2);
                    forecastData['Recommended Savings'] = dailyRecommended.toFixed(2);
                }
            } else if ($("#savings_interval").val() === "Weekly") {
                if (savingsDuration <= 7) {
                    alert("Date range must be greater than 1 week for Weekly saving interval")
                } else {
                    document.getElementById("interval_text").innerHTML = $("#savings_interval").val();
                    document.getElementById("recommended_saving").innerHTML = (dailyRecommended.toFixed(2) * 7).toFixed(2);
                    forecastData['Recommended Savings'] = (dailyRecommended.toFixed(2) * 7).toFixed(2);
                }
            } else if ($("#savings_interval").val() === "Monthly") {
                if (savingsDuration <= 28) {
                    alert("Date range must be greater than 1 month for Monthly saving interval")
                } else {
                    document.getElementById("interval_text").innerHTML = $("#savings_interval").val();
                    document.getElementById("recommended_saving").innerHTML = (dailyRecommended.toFixed(2) * 28).toFixed(2);
                    forecastData['Recommended Savings'] = (dailyRecommended.toFixed(2) * 28).toFixed(2);
                }
            } else if ($("#savings_interval").val() === "Yearly") {
                if (savingsDuration <= 365) {
                    alert("Date range must be greater than 1 year for Yearly saving interval")
                } else {
                    document.getElementById("interval_text").innerHTML = $("#savings_interval").val();
                    document.getElementById("recommended_saving").innerHTML = (dailyRecommended.toFixed(2) * 365).toFixed(2);
                    forecastData['Recommended Savings'] = (dailyRecommended.toFixed(2) * 365).toFixed(2);
                }
            }else{
                alert("Invalid saving plan selected");
            }
            // alert(dailyInterest);
        }
    }
}