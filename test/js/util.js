
var _table_ = document.createElement('table'),
_tr_ = document.createElement('tr'),
_th_ = document.createElement('th'),
_td_ = document.createElement('td');
 _th_.setAttribute('scope','col');
 _td_.setAttribute('scope','row');

// Builds the HTML Table out of myList json data from Ivy restful service.
function buildHtmlTable(arr , captionTxt ,sort) {

 var table = _table_.cloneNode(false);
 if(sort==='yes') table.setAttribute("class", "sortable");
 var caption = document.createElement('caption');
 caption.appendChild(document.createTextNode(captionTxt || ''));
 table.appendChild(caption);

 var thead = document.createElement('thead');
 var columns = addAllColumnHeaders(arr, table, thead);
 var tbody = document.createElement('tbody');

 for (var i=0, maxi=arr.length; i < maxi; ++i) {
     var tr = _tr_.cloneNode(false);
     for (var j=0, maxj=columns.length; j < maxj ; ++j) {
         var td = _td_.cloneNode(false);
            if(typeof arr[i] !='undefined'){
                cellValue = arr[i][columns[j]];
                // td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
                td.innerHTML = arr[i][columns[j]] || '&nbsp;';
                tr.appendChild(td);
            }
     }
     tbody.appendChild(tr);
     table.appendChild(tbody);
 }
 if(sort==='yes') sorttable.makeSortable(table);
 return table;
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(arr, table, thead)
{
 var columnSet = [],
     tr = _tr_.cloneNode(false);
 for (var i=0, l=arr.length; i < l; i++) {
     for (var key in arr[i]) {
         if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
             columnSet.push(key);
             var th = _th_.cloneNode(false);
             th.appendChild(document.createTextNode(key));
             th.setAttribute('class','header');
             tr.appendChild(th);
         }
     }
 }
 thead.appendChild(tr);
 table.appendChild(thead);
 return columnSet;
}
//Break the code snippet into multiple lines.
function splitLine(st,n) {
    var b = ''; 
    var s = st;while (s.length > n) {
        var c = s.substring(0,n);
        var d = c.lastIndexOf(' ');
        var e =c.lastIndexOf('\n');
    if (e != -1)
    d = e; 
    if (d == -1) 
    d = n;
    b += c.substring(0,d) + '\n';
    s = s.substring(d+1);
    }       
    return b+s;
}