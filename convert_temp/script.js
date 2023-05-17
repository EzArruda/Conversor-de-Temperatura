var set_temp = ""
var btn_cel = document.getElementById("cel")
var btn_kel = document.getElementById("kel")
var btn_fah = document.getElementById("fah")
var bnt_convert = document.getElementById("convert")
var campo_temp = document.querySelector("#campo-temp")

btn_cel.addEventListener("click", setcel)
btn_kel.addEventListener("click", setkel)
btn_fah.addEventListener("click", setfah)
bnt_convert.addEventListener("click", convert)

function setcel() {
    set_temp = "c"
    btos_ativ("cel")


    btos_disb("kel")
    btos_disb("fah")

}
function setfah() {
    set_temp = "f"
    btos_ativ("fah")
    btos_disb("cel")
    btos_disb("kel")

}
function setkel() {
    set_temp = "k"
    btos_ativ("kel")
    btos_disb("cel")
    btos_disb("fah")
}
function btos_disb(ident) {
    var a1_sel = document.getElementById(ident)
    a1_sel.style.background = "lightgrey"
    a1_sel.style.color = "black"
    a1_sel.style.borderColor = 'black'
    a1_sel.style.border.style = 'solid'
}
function btos_ativ(ident) {
    var a1_sel = document.getElementById(ident)
    a1_sel.style.background = "red"
    a1_sel.style.color = "white"
    a1_sel.style.borderColor = 'red'
    a1_sel.style.border.style = 'solid'

}

function convert() {

    var valorC = Number(campo_temp.value)

    if (set_temp != "") {

        if (set_temp == "c") {

            cel_r = parseFloat(campo_temp.value)
            fah_r = (cel_r * 1.8) + 32
            kel_r = cel_r + 273.15

            document.querySelector("#cel-result").innerHTML = cel_r.toFixed(2)
            document.querySelector("#fah-result").innerText = fah_r.toFixed(2)
            document.querySelector("#kel-result").innerText = kel_r.toFixed(2)

        }
        if (set_temp == "f") {
            fah_r = parseFloat(campo_temp.value)
            cel_r = (fah_r - 32) * (5/9)
            kel_r = cel_r + 273.15

            document.querySelector("#cel-result").innerHTML = cel_r.toFixed(2)
            document.querySelector("#fah-result").innerText = fah_r.toFixed(2)
            document.querySelector("#kel-result").innerText = kel_r.toFixed(2)
        }
        if (set_temp == "k") {
            kel_r = parseFloat(campo_temp.value)
            cel_r = kel_r - 273
            fah_r = (cel_r * 1.8) + 32

            document.querySelector("#cel-result").innerHTML = cel_r.toFixed(2)
            document.querySelector("#fah-result").innerText = fah_r.toFixed(2)
            document.querySelector("#kel-result").innerText = valorC.toFixed(2)
        }




    } else {
        window.alert("A escala não foi indicada !")
    }

}







