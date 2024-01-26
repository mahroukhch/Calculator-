var a=+prompt('enter value 1')
var b=+prompt('enter value 2')


var add=a+b
var sub=a-b
var mul=a*b
var div=a/b

document.write(
    '<table border=2px align=center>'+
    '<tr>'+'<th>'+'ADDITION'+'</th>'+
    '</tr>'+
    '<tr>'+'<td>'+add+'</td>'+'</tr>'+
    '<tr>'+'<th>'+'SUBTRACTION'+'</th>'+
    '</tr>'+
    '<tr>'+'<td>'+sub+'</td>'+'</tr>'+
    '<tr>'+'<th>'+'MULTIPLICATION'+'</th>'+
    '</tr>'+
    '<tr>'+'<td>'+mul+'</td>'+'</tr>'+
    '<tr>'+'<th>'+'DIVISION'+'</th>'+
    '</tr>'+
    '<tr>'+'<td>'+div+'</td>'+'</tr>'+
    '</table>'
)