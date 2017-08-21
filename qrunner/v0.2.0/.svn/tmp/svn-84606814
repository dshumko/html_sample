
var tdc_html = document.getElementById("tdc_html");
if(tdc_html)
{
    // button
    var btn = document.createElement("BUTTON");
    btn.setAttribute("id", "start_btn");
    var t = document.createTextNode("START");
    btn.appendChild(t);
    tdc_html.appendChild(btn);

    // result table
    var table = document.createElement("TABLE");
    table.setAttribute("id", "resultTable");

    var tr_title = document.createElement("tr");
    tr_title.setAttribute("id", "tr_title");

    var suite_td = document.createElement("td");
    suite_td.setAttribute("id", "suite_td");
    suite_td.innerText = "description";
    tr_title.appendChild(suite_td);

    var result_td = document.createElement("td");
    result_td.setAttribute("id", "result_td");
    result_td.innerText = "result";
    tr_title.appendChild(result_td);

    table.appendChild(tr_title);

    document.body.appendChild(table);
}

function refreshUI(id)
{
    var tr = document.getElementById(id);
    if(tr == null)
    {
        tr = document.createElement("TR");
        tr.setAttribute("id", id);

        var td = document.createElement("TD");
        td.setAttribute("id", "td_suite_"+id);
        td.innerText = arr_suite[id];
        tr.appendChild(td);
        document.getElementById("resultTable").appendChild(tr);
    }
    else
    {
        var td = document.getElementById("td_result_"+id);
        if(td == null)
        {
            td = document.createElement("TD");
            td.setAttribute("id", "td_result_"+id);
            td.innerText = arr_result[id];
            tr.appendChild(td);
        }
        else
        {
            td.innerText = arr_result[id];
        }
    }
}