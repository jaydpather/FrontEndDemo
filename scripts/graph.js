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

function InitGraphBars()
{
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

function InitGraphLabels()
{
    SetMarginTop("graphLabel100");
    
    var graphHeight = $("#divBarGraph").css("height");
    graphHeight = StripPxEnding(graphHeight);
    $("#graphLabel100").css("height", graphHeight / 4);
    $("#graphLabel75").css("height", graphHeight / 4);
    $("#graphLabel50").css("height", graphHeight / 4);
    $("#graphLabel25").css("height", graphHeight / 4);
}

function SetMarginTop(controlId)
{
    var cssSelector = "#" + controlId;
    var labelHeight = $(cssSelector).css("height");
    labelHeight = StripPxEnding(labelHeight);
    var paddingTop = -(labelHeight / 2);
    $(cssSelector).css("margin-top", paddingTop + "px");
}

function StripPxEnding(str)
{
    return str.substring(0, str.indexOf("p"));
}

$(document).ready(function ()
{
    InitGraphBars();
    InitGraphLabels();
});;
