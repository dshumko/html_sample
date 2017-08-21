function myFunction()
{
    var div1 = document.getElementById("div2");
    div1.focus();
}

function onFocus()
{
    console.log("onFocus");
    var div1 = document.getElementById("div2");
    div1.classList.add("ex3");
}

function myFunction2()
{
    var div1 = document.getElementById("div2");
    div1.classList.remove("ex3");
    div1.classList.add("ex2");
}

function onFocus2()
{
    console.log("onFocus");
    var div1 = document.getElementById("div2");
    div1.classList.remove("ex2");
    div1.classList.add("ex3");
}