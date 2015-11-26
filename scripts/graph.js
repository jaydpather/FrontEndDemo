function btnAddNumber_Click() {
    var curHtml = $("#divNumbersAdded").html();
    var curNum = $("#txtNumber").val();

    var delimiter;
    if (curHtml == "&nbsp;")
        delimiter = " ";
    else
        delimiter = ", ";

    var fulltext = curHtml + delimiter + curNum;
    $("#divNumbersAdded").html(fulltext);
}

function InitGraphBars() {
    var numBars = 9;
    var marginLeftEach = 5;
    var width = 31;

    for(var i = 1; i<= numBars; i++)
    {
        var marginLeftCur = ((i - 1) * (width + marginLeftEach)) + marginLeftEach;
        $("#bar" + i).css("margin-left", marginLeftCur);
        $("#bar" + i).css("width", width);

        $("#barLabel" + i).css("margin-left", marginLeftCur);
        $("#barLabel" + i).css("width", width);
    }

}
$(document).ready(function ()
{
    InitGraphBars();
});;
