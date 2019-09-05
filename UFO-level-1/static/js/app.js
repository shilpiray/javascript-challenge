// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")
tableData.forEach(element => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

document.getElementById("filter-btn").addEventListener("click", function(){ alert("Hello World!");});
