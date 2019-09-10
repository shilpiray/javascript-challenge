// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the tbody
var tbody = d3.select("tbody")

// Loop Through `tableData` 
tableData.forEach(element => {
    // append table row `tr` for each data object
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");


button.on("click",function(){

    // Select the input element and get the raw HTML node
    var input = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = input.property("value");

    // remove any children from the tbody to
    tbody.html("");
    
    // get the filter data
    var filteredData = tableData.filter(values => values.datetime === inputValue);
    console.log(filteredData);
    

    // check for data availability in dataset
    if (filteredData.length != 0) {
        filteredData.forEach(element => {
            var row = tbody.append("tr");
            Object.entries(element).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    // if not print data not found
    } else {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("Data Not Found");
    };
});
