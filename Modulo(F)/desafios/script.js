let na = window.document.querySelector('input#ina')
let s = window.document.querySelector('select#sel')
let d = window.document.querySelector('div#ct')
let val = []
function iNumber(n) {
    if (Number(n)>0 && Number(n)<101) {
        return true
    }
    else {
        return false
    }
}
function iList(n, l) {
    if (l.indexOf(Number(n))!= -1) {
        return true
    }
    else {
        return false
    }
}
var start = window.document.querySelector('input#star')
start.addEventListener('click', clic)
function clic() {
    if (iNumber(na.value) && !iList(na.value, val)) {
        val.push(Number(na.value))//
        var opt = document.createElement('option')
        opt.innerHTML = `Assigned = ${Number(na.value)}`
        s.appendChild(opt)
        var r = window.document.querySelector('fieldset#re')
        r.style.display = 'block'
    }
    else {
        window.alert('Fill in appropriately (Invalid value or already found)')
    }
    na.value = ''
    na.focus()////////////////////////////
        var result = window.document.querySelector('input#result')
        result.addEventListener('click', res)
        function res() {
            d.innerHTML = ''
            var op = document.createElement('p')
            let vbig = val[0]
            let vlittle = val[0]
            let add = 0
            let averege = 0
            for(let pos in val) {
                add += val[pos]
                if (val[pos] < vbig) {
                    vbig = val[pos]
                }
                else{
                    vlittle = val[pos]
                }
            }
            if (na === undefined){
                op.innerHTML = ``
            }
            else {
            op.innerHTML = `
            The numbers ${val} are assigned.<br>
            There are ${Number(val.length)} numbers in total.<br>
            The lowest reported value is ${vbig}.<br>
            The highest reported value is ${vlittle}.<br>
            Addinction the values is ${add}.<br>
            the average of the values is ${add/val.length}.
            `
            d.appendChild(op)
            var t = window.document.querySelector('fieldset#et')
            t.style.display = 'block'}
        }
}