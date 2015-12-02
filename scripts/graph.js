const _minBar = 1;
const _maxBar = 9;
var _divisibleCounts = [];
var _numbersEnteredCount = 0;

function btnAddNumber_Click() {
    _numbersEnteredCount++;
    var curNum = $("#txtNumber").val();

    UpdateNumbersEnteredLabel(curNum);
    UpdateBars(curNum);

    var curNum = $("#txtNumber").val("");
    $("#txtNumber").focus();
}

function UpdateBars(curNum)
{
    var graphHeight = $("#divBarGraph").css("height");
    graphHeight = StripPxEnding(graphHeight);

    for(var i=_minBar; i<=_maxBar; i++)
    {
        if(curNum % i == 0)
            _divisibleCounts[i - _minBar]++;

        var pct = _divisibleCounts[i - _minBar] / _numbersEnteredCount;
        var barHeight = (pct * graphHeight) + "px";    
        $("#bar" + i).css("height", barHeight);
        
    }
}

function UpdateNumbersEnteredLabel(curNum)
{
    var curHtml = $("#divNumbersAdded").html();
    
    var delimiter;
    if (curHtml == "&nbsp;")
        delimiter = "";
    else
        delimiter = ", ";

    var fulltext = curHtml + delimiter + curNum;
    $("#divNumbersAdded").html(fulltext);
}

function InitGraphBars()
{
    const marginLeftEach = 5;
    const width = 31;

    for(var i = _minBar; i<= _maxBar; i++)
    {
        var marginLeftCur = ((i - _minBar) * (width + marginLeftEach)) + marginLeftEach;
        $("#bar" + i).css("margin-left", marginLeftCur);
        $("#bar" + i).css("width", width);

        $("#barLabel" + i).css("margin-left", marginLeftCur);
        $("#barLabel" + i).css("width", width);
    }

}

function InitGraphLabels()
{
    SetMarginTop("graphLabel100");
    
    const numLabelsNotZero = 4;

    var graphHeight = $("#divBarGraph").css("height");
    graphHeight = StripPxEnding(graphHeight);
    $("#graphLabel100").css("height", graphHeight / numLabelsNotZero);
    $("#graphLabel75").css("height", graphHeight / numLabelsNotZero);
    $("#graphLabel50").css("height", graphHeight / numLabelsNotZero);
    $("#graphLabel25").css("height", graphHeight / numLabelsNotZero);
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

function InitData()
{
    for (var i = 0; i < (_maxBar - _minBar + 1) ; i++)
        _divisibleCounts[i] = 0;
}

$(document).ready(function ()
{
    InitGraphBars();
    InitGraphLabels();
    InitData();

    $("#txtNumber").keypress(function (event)
    {
        const enterKeyCode = 13;
        if (event.keyCode == enterKeyCode)
            $("#btnAddNumber").click();
    });
});;
