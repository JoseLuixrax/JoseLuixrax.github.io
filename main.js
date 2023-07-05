/**
 * @author Jose Luixrax
 */

document.addEventListener("DOMContentLoaded",()=>{

    let btn = document.getElementById("btn");
    let hertas = document.getElementById("hertas");
    let contador = document.getElementById("contador");
    let veces = document.getElementById("veces");
    let reset = document.getElementById("reset");   
    let cont = localStorage.getItem("veceskururin") ? localStorage.getItem("veceskururin") : 0;
    console.log(contador.innerHTML);
    contador.innerHTML = cont;
    comprobarVez();
    btn.addEventListener("click", ()=>{
        let sound = new Audio("KuruKuru.wav");
        sound.play();
        let img = new Image();
        img.src = "Kururin.gif";
        img.width = 300;
        hertas.appendChild(img)
        setTimeout(() => {
            hertas.removeChild(img);
        }, 1500);
        contador.innerHTML = ++cont;
        comprobarVez();
        localStorage.setItem("veceskururin", cont);
    });

    reset.addEventListener("click", ()=>{
        localStorage.removeItem("veceskururin");
        contador.innerHTML = 0;
        cont = 0;
        comprobarVez();
    });


    function comprobarVez(){
        if (contador.innerHTML === "1") {
            veces.innerHTML = " vez";
        } else {
            veces.innerHTML = " veces";
        }
    }
});