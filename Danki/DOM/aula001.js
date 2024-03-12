var p = document.getElementsByTagName('p');
window.alert(p[0].innerHTML);
//p[0].innerHTML = 'Manipuletion!';
for(var i = 0; i<p.length; i++){
    p[i].innerHTML = `Manipuletion! ${i}`;
}
for(var i = 0; i<10; i++){
    p[0].innerHTML = p[0].innerHTML + ` -BLZ- `;
}