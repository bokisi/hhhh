var input = document.getElementById("nr_koloru")
var gl = document.getElementById("kolorgl")
var k2 = document.getElementById("kolor2")
var k3 = document.getElementById("kolor3")
var k4 = document.getElementById("kolor4")
var k5 = document.getElementById("kolor5")






function klik(){
    wartosc=input.value
    gl.style.backgroundColor = `hsl(${wartosc}, 100%, 50%)`
    k2.style.backgroundColor = `hsl(${wartosc}, 80%, 50%)`
    k3.style.backgroundColor = `hsl(${wartosc}, 60%, 50%)`
    k4.style.backgroundColor = `hsl(${wartosc}, 40%, 50%)`
    k5.style.backgroundColor = `hsl(${wartosc}, 20%, 50%)`
}