var quebrada = false;

function mudaLampada(tipo) {
    if (!quebrada) {
        document.getElementById("luz").src = "img/" + tipo + ".jpg";
        if (tipo == 'lampada-quebrada') {
            quebrada = true;
        }
    }
}