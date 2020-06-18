$('#calculatorTab').click(function(){
    (!$("#calculatorTab").hasClass('tab-active')) ? $('#calculatorTab').addClass('tab-active'):'';
    $("#forecastTab").removeClass('tab-active');

    ($("#interestCalculator").hasClass('d-none')) ? $('#interestCalculator').removeClass('d-none') : '';
    $("#savingsForecast").addClass('d-none');
})
$('#forecastTab').click(function () {
    (!$("#forecastTab").hasClass('tab-active')) ? $('#forecastTab').addClass('tab-active') : '';
    $("#calculatorTab").removeClass('tab-active');

    ($("#savingsForecast").hasClass('d-none')) ? $('#savingsForecast').removeClass('d-none') : '';
    $("#interestCalculator").addClass('d-none');
})