const verde = document.getElementById("btn-verde");
const rojo = document.getElementById("btn-rojo");
const azul = document.getElementById("btn-azul");

console.log(document.cookie);

window.onload = function () {
   mostrar();
    verde.addEventListener('click', function(){
        document.body.style.backgroundColor = "green";
        document.cookie = ("background-color=green; max-age=86400; path=/")
    })
    rojo.addEventListener('click', function(){
        document.body.style.backgroundColor = "red";
        document.cookie =  ("background-color=red;max-age=86400;path=/")
    })
    azul.addEventListener('click', function(){
        document.body.style.backgroundColor = "blue";
        document.cookie =("background-color=blue;max-age=86400;path=/")
    })

};

function mostrar() {
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let parClaveValor = cookieArray[i].split('=');
        if ( "background-color"== parClaveValor[0].trim()) {
          document.body.style.backgroundColor = parClaveValor[1];
        }
    }

}
