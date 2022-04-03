function tabuada() {
    num = document.querySelector('input#txtn')
    tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        alert('[ERRO] digite um numero!')
    } else {
        n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}