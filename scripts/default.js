
$(document).ready(function ()
{
    initCommonSections();
    highlightCurrentMenuItem();
});

function highlightCurrentMenuItem()
{
    $("#leftMenu").find("a").each(function()
    {
        $(this).css("font-weight", "normal");
    });

    var url = window.location.href;
    var page = url.substr(url.lastIndexOf("/") + 1);

    $("#leftMenu").find("a[href='" + page + "']").each(function ()
    {
        $(this).css("font-weight", "bold");
    });
}

function initCommonSections()
{
    var leftMenuHtml = "<a href='index.html' class='menuItem'>Home</a>" +
                        "<a href='graph.html' class='menuItem'>Dynamic Graph</a>"+
                        "<a href='info.html' class='menuItem'>Info</a>";

    $("header").html("Jayd Pather's Front End Demo");
    $("#leftMenu").html(leftMenuHtml);
    $("footer").html("A demo of HTML 5, CSS 3, and JQuery");

    var mainHeight = $("main").css("height");
    $("#leftMenu").css("height", mainHeight);
}