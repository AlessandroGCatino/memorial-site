<template>
    <div>
        <div class="text-center">
            <h1>
                Questa sarà la pagina con le robe fluttuanti
            </h1>
        </div>
        <div>

        </div>
        <a ref="move" id="test" style="position: absolute; top: 0; left: 0;" href="/" class="btn btn-primary " >
            Torna alla Home
        </a>

        <!-- <div ref="move" id="test" style="position: absolute; top: 0; left: 0;">ciao</div> -->
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
                isDown: false
            }
        },
        methods: {
            
        },
        mounted () {

            const listener = function(e){
                e.preventDefault()
            }

            let vueDatas = this;
            this.$refs.move.addEventListener('mousedown', function(e){
                e.preventDefault();
                vueDatas.isDown = true;
                let lOffset = this.offsetLeft;
                let tOffset = this.offsetTop
                vueDatas.offset = [lOffset - e.clientX,tOffset - e.clientY];
                console.log("Preso", vueDatas.isDown, vueDatas.offset, e.clientX)
            }, true);

            document.addEventListener('mouseup', function() {
                vueDatas.isDown = false;
                console.log("lasciato", vueDatas.isDown)

            }, true);

            this.$refs.move.addEventListener('click', listener)



            let clicks = 0;
            let timer;
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

            document.addEventListener('mousemove', function(e) {
                e.preventDefault();
                if (vueDatas.isDown) {
                    console.log("mi sposto nell'if")
                    
                    vueDatas.mousePosition = {

                        x : e.clientX,
                        y : e.clientY

                    };
                    vueDatas.$refs.move.style.left = (vueDatas.mousePosition.x + vueDatas.offset[0]) + 'px';
                    vueDatas.$refs.move.style.top  = (vueDatas.mousePosition.y + vueDatas.offset[1]) + 'px';
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