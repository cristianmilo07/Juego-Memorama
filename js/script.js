class Memorara {

    constructor(){
        this.totalTarjetas = [];
        this.numeroTarjetas = 0;
        this.verificadorTarketas = [];
        this.errores = 0;
        this.nivelDificultad = '';
        this.imagenesCorrectas = [];
        this.agregadorTarjetas = [];

        this.$contenedorGeneral = document.querySelector('.contenedor-general')
        this.$contenedorTarjetas = document.querySelector('.contenedor-tarjetas');
        this.$pantallaBloqueada = document.querySelector('.pantalla-bloqueada');
        this.$mensaje = document.querySelector('h2.mensaje');
        //Llamado a los eventos
        this.eventos();
    }

    eventos(){
        window.addEventListener('DOMContentLoaded', () => {
            this.cargaPantalla();

        })
    }

    async cargaPantalla(){
        const respuesta = await fetch('../memo.json')
        const data = await respuesta.json()
        console.log("asa",data);
        this.totalTarjetas = data;
        if(this.totalTarjetas.length > 0) {
            this.totalTarjetas.sort(orden)
            function orden(a,b){
                return Math.random() -0.5;
            }
        }
        console.log(this.totalTarjetas);
    }
}

new Memorara();