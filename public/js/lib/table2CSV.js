jQuery.fn.table2CSV = function(options ,e) {
    var options = jQuery.extend({
        separator: ',',
        header: [],
        delivery: 'popup' // popup, value
    },
    options);

    var csvData = [];
    var headerArr = [];
    var el = this;

    //header
    var numCols = options.header.length;
    var tmpRow = []; // construct header avalible array

    if (numCols > 0) {
        for (var i = 0; i < numCols; i++) {
            tmpRow[tmpRow.length] = formatData(options.header[i]);
        }
    } else {
        $(el).filter(':visible').find('th').each(function() {
            if ($(this).css('display') != 'none') tmpRow[tmpRow.length] = formatData($(this).html());
        });
    }

    row2CSV(tmpRow);

    // actual data
    $(el).find('tr').each(function() {
        var tmpRow = [];
        $(this).filter(':visible').find('td').each(function(index) {
            if ($(this).css('display') != 'none') {
               if(index==2) {
                     var t = $(this).html()
                                .replace(/\n/g,"")
                                .replace(/&amp;/g, '&')
                                .replace(/&lt;/g, '<')
                                .replace(/&gt;/g, '>');
                                // .replace(/["]/g,"“")
                                //.replace(/[\s]/g,"")
                     tmpRow[tmpRow.length] =t;
                }    
                else {
                    tmpRow[tmpRow.length] = formatData($(this).html());
                }    
            }    
        });
        row2CSV(tmpRow);
    });
    if (options.delivery == 'popup') {
        var mydata = csvData.join('\n');
        return popup(mydata);
    } 
    else if(options.delivery == 'download'){
        var mydata = csvData.join('\n');
        // window.open("data:text/csv;charset=utf-8," + escape(mydata))
        download(mydata);
    }else {
        var mydata = csvData.join('\n');
        return mydata;
    }

    function row2CSV(tmpRow) {
        var tmp = tmpRow.join('') // to remove any blank rows
        // alert(tmp);
        if (tmpRow.length > 0 && tmp != '') {
            var mystr = tmpRow.join(options.separator);
            csvData[csvData.length] = mystr;
        }
    }
    function formatData(input) {
        // replace " with “
        var regexp = new RegExp(/["]/g);
        var output = input.replace(regexp, "“");
        //HTML
        var regexp = new RegExp(/\<[^\<]+\>/g);
        var output = output.replace(regexp, "");
        if (output == "") return '';
        return '"' + output + '"';
    }
    function popup(data) {
        var generator = window.open('', 'csv', 'height=400,width=600');
        generator.document.write('<html><head><title>CSV</title>');
        generator.document.write('</head><body >');
        generator.document.write('<textArea cols=70 rows=15 wrap="off" >');
        generator.document.write(data);
        generator.document.write('</textArea>');
        generator.document.write('</body></html>');
        generator.document.close();
        return true;
    }
    function download(data){
        // e.target.download = 'hello.csv';
        e.target.download = new Date().getTime() + '.csv';

        // $(e.target).attr( 'href' ,"data:text/csv;charset=utf-8," + data.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') );

        data = escape(data)
                .replace(/%u2018/g,'"')
                .replace(/%u2019/g,'"')
                .replace(/%u201C/g,'"')
                .replace(/%u201D/g,'"')

        $(e.target).attr('href' ,"data:text/csv;charset=utf-8," + data);        
        // console.log(e.target);
    }
};