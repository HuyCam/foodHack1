console.log(ratingData);

$table = $('#table-data');


let content = "";
for (let i = 0; i < ratingData.length; i++) {
    content += "<tr>";
    content += "<td>"+ ratingData[i].COMPANY +"</td>";
    content += "<td>"+ ratingData[i].PREVIOUS_SCORE +"</td>";
    content += "<td>"+ ratingData[i].LATEST_SCORE +"</td>";
    content += "</tr>";
}

$table.append(content);