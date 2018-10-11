$().ready(function() {
    
    var url ="http://localhost:8080/Vendor/List";

    //take the data and make sure it comes back
    console.log("it worked!")
    $.getJSON(url)
    .then(function(jsonResponse) {
            console.log(jsonResponse);
            render(jsonResponse);
    });


});

function render(jsonResponse) {
    var tbody = $("#tbody");
    var Vendor = jsonResponse.data;
    for(var vend of Vendor) {
      
        var row = "<tr>"; 
        row +="<td>" + vend.id + "</td>";
        row +="<td>" + vend.code + "</td>";
        row +="<td>" + vend.name + "</td>";
        row +="<td>" + vend.address + "</td>";
        row +="<td>" + vend.city + "</td>";
        row +="<td>" + vend.state + "</td>";
        row +="<td>" + vend.zip + "</td>";
        row +="<td>" + vend.phoneNumber + "</td>";
        row +="<td>" + vend.email + "</td>";
        row +="</tr>";
        tbody.append(row);
    
    }
}