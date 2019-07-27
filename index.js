class temporizador{
    
    constructor(){
        this.segundos = 60
    }

    iniciarCuenta() {
        this.idto = setTimeout( ()=>{
            if (this.segundos === 0) {
                clearTimeout(this.idto)
            }
            this.segundos -= 1;
        } , 1000 );
    }

}

