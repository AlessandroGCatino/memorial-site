<template>
    <div>
        <div class="text-center">
            <h1>
                Questa sarà la pagina con le immagini fluttuanti
            </h1>
        </div>
        <div>

        </div>
        <a ref="move" id="test" style="position: absolute; top: 150px; left: 50px;" href="/" class="btn btn-primary " >
            Torna alla Home
        </a>

        <div ref="move2" id="test" style="position: absolute; top: 150px; left: 800px;" class="btn btn-warning">Altro Elemento</div>
    </div>
</template>

<script>

    export default {
        name: "RealHomePage",
        data() {
            return {
                el: "#app",
                mousePosition: "",
                offset: [0,0],
                isDown1: false,
                isDown2: false
            }
        },
        methods: {
            
        },
        mounted () {

            const listener = function(e){
                e.preventDefault()
            }

            let vueDatas = this;

            // pulsante home
            this.$refs.move.addEventListener('mousedown', function(e){
                e.preventDefault();
                vueDatas.isDown1 = true;
                let lOffset = this.offsetLeft;
                let tOffset = this.offsetTop
                vueDatas.offset = [lOffset - e.clientX,tOffset - e.clientY];
                console.log("Preso", vueDatas.isDown1, vueDatas.offset, e.clientX)
            }, true);

            // secondo pulsante
            
            this.$refs.move2.addEventListener('mousedown', function(e){
                e.preventDefault();
                vueDatas.isDown2 = true;
                let lOffset = this.offsetLeft;
                let tOffset = this.offsetTop
                vueDatas.offset = [lOffset - e.clientX,tOffset - e.clientY];
                console.log("Preso", vueDatas.isDown2, vueDatas.offset, e.clientX)
            }, true);

            document.addEventListener('mouseup', function() {
                vueDatas.isDown1 = false;
                vueDatas.isDown2 = false;
                console.log("lasciato", vueDatas.isDown1)

            }, true);

            this.$refs.move.addEventListener('click', listener)
            this.$refs.move2.addEventListener('click', listener)



            let clicks = 0;
            let timer;
            // Pulsante home
            vueDatas.$refs.move.addEventListener('click', function(e){
                clicks++;
                if (clicks === 1) {
                    timer = setTimeout( () => {
                    clicks = 0
                    }, 200);
                } else {
                    clearTimeout(timer);
                    vueDatas.$refs.move.removeEventListener("click", listener)
                    console.log("entrato")
                    clicks = 0;
                }         
            }, true)

            // secondo pulsante
            vueDatas.$refs.move2.addEventListener('click', function(e){
                clicks++;
                if (clicks === 1) {
                    timer = setTimeout( () => {
                    clicks = 0
                    }, 200);
                } else {
                    clearTimeout(timer);
                    vueDatas.$refs.move2.removeEventListener("click", listener)
                    console.log("entrato")
                    clicks = 0;
                }         
            }, true)

            document.addEventListener('mousemove', function(e) {
                e.preventDefault();
                if (vueDatas.isDown1) {
                    console.log("mi sposto nell'if")
                    
                    vueDatas.mousePosition = {

                        x : e.clientX,
                        y : e.clientY

                    };
                    vueDatas.$refs.move.style.left = (vueDatas.mousePosition.x + vueDatas.offset[0]) + 'px';
                    vueDatas.$refs.move.style.top  = (vueDatas.mousePosition.y + vueDatas.offset[1]) + 'px';
                }
                if (vueDatas.isDown2) {
                    console.log("mi sposto nell'if")
                    
                    vueDatas.mousePosition = {

                        x : e.clientX,
                        y : e.clientY

                    };
                    vueDatas.$refs.move2.style.left = (vueDatas.mousePosition.x + vueDatas.offset[0]) + 'px';
                    vueDatas.$refs.move2.style.top  = (vueDatas.mousePosition.y + vueDatas.offset[1]) + 'px';
                }
            }, true);
        },   
    }
</script>

<style lang="scss" scoped>

// .moving{
//     position: absolute;
//     left: 0;
//     top: 0;
// }

</style>