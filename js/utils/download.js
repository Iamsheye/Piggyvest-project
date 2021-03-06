function download(){
    if(report == "nill"){
        alert("No data to download. Calculate Interest, or do a forcast!")
    }
    else if (report == 'interest'){
        var createXLSLFormatObj = [];

/* XLS Head Columns */
var xlsHeader = ["Deposit Amount","Duration","Product", "Total Interest Amount"];

/* XLS Rows Data */
var xlsRows = [{...interestData}];


createXLSLFormatObj.push(xlsHeader);
$.each(xlsRows, function(index, value) {
    var innerRowData = [];
    //$("tbody").append('<tr><td>' + value.EmployeeID + '</td><td>' + value.FullName + '</td></tr>');
    $.each(value, function(ind, val) {

        innerRowData.push(val);
    });
    createXLSLFormatObj.push(innerRowData);
});


/* File Name */
var filename = "piggy_interest_estimate.xlsx";

/* Sheet Name */
var ws_name = "piggySheet";

if (typeof console !== 'undefined') console.log(new Date());
var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

/* Add worksheet to workbook */
XLSX.utils.book_append_sheet(wb, ws, ws_name);

/* Write workbook and Download */
if (typeof console !== 'undefined') console.log(new Date());
XLSX.writeFile(wb, filename);
if (typeof console !== 'undefined') console.log(new Date());
    }
    else if (report == 'forecast'){
        var createXLSLFormatObj = [];

/* XLS Head Columns */
var xlsHeader = ["Expected Return","Savings Interval","Product", "Start Date", "End Date","Recommended Savings"];

/* XLS Rows Data */
var xlsRows = [{...forecastData}];


createXLSLFormatObj.push(xlsHeader);
$.each(xlsRows, function(index, value) {
    var innerRowData = [];
    //$("tbody").append('<tr><td>' + value.EmployeeID + '</td><td>' + value.FullName + '</td></tr>');
    $.each(value, function(ind, val) {

        innerRowData.push(val);
    });
    createXLSLFormatObj.push(innerRowData);
});


/* File Name */
var filename = "piggy_forecast.xlsx";

/* Sheet Name */
var ws_name = "piggySheet";

if (typeof console !== 'undefined') console.log(new Date());
var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

/* Add worksheet to workbook */
XLSX.utils.book_append_sheet(wb, ws, ws_name);

/* Write workbook and Download */
if (typeof console !== 'undefined') console.log(new Date());
XLSX.writeFile(wb, filename);
if (typeof console !== 'undefined') console.log(new Date());
    }
    
}