$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function (data){
        for (var i = 0; i < data.length; i++){
            var tr = $("<tr></tr>");
            tr.append("<td>" + data[i].name + "</td>");
            tr.append("<td>" + data[i].description + "</td>");
            tr.append("<td><a target='_blank' href='http://www.google.com/maps/place/"+ data[i].location[0] + "," + data[i].location[1] + "'><button>Open in Googe Maps</button></a></td>");
            $('table').append(tr);
        }
    })
});
