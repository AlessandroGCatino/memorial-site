<template>

    

        <!-- <div class="text-center">
            <h1>
                This will be the page with moving images
            </h1>
        </div> -->
        
        <a ref="move" id="test" style="position: absolute; top: 150px; left: 150px;" href="/" class="btn btn-primary " >
            Back to Index
        </a>

        <div ref="move2" style="position: absolute; top: 150px; left: 1200px;" class="moving-objects">
            <figure>
                <img src="../assets/img/Ariane - Yellow Clock - Canvas, organza, clock_2021(1).png" alt="">
            </figure>
        </div>

        <div ref="move3" style="position: absolute; top: 550px; left: 200px;" class="moving-objects">+
            <figure>
                <img src="../assets/img/catalog_Irina_22_print7.png" alt="">
            </figure>
        </div>
        <div ref="move4" style="position: absolute; top: 550px; left: 1200px;" class="moving-objects">
            <figure>
                <img src="../assets/img/DSC_4394.png" alt="">
            </figure>
        </div>
        <div ref="move5" style="position: absolute; top: 550px; left: 800px;" class="moving-objects">
            <figure>
                <img src="../assets/img/ExhibitionPosterDraftFinalA3-Center.png" alt="">
            </figure>
        </div>
    
</template>

<script>
import SideMenu from '@/components/SideMenu2.vue';
import MainContent from '@/components/MainContent2.vue';

    export default {
        name: "RealHomePage",
        components: {
            SideMenu,
            MainContent
        },
        data() {
            return {
                el: "#app",
                mousePosition: "",
                offset: [0,0],
                isDown1: false,
                isDown2: false,
                isDown3: false,
                isDown4: false,
                isDown5: false,
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

            // terzo pulsante
            
            this.$refs.move3.addEventListener('mousedown', function(e){
                e.preventDefault();
                vueDatas.isDown3 = true;
                let lOffset = this.offsetLeft;
                let tOffset = this.offsetTop
                vueDatas.offset = [lOffset - e.clientX,tOffset - e.clientY];
                console.log("Preso", vueDatas.isDown3, vueDatas.offset, e.clientX)
            }, true);

            // terzo pulsante
            
            this.$refs.move4.addEventListener('mousedown', function(e){
                e.preventDefault();
                vueDatas.isDown4 = true;
                let lOffset = this.offsetLeft;
                let tOffset = this.offsetTop
                vueDatas.offset = [lOffset - e.clientX,tOffset - e.clientY];
                console.log("Preso", vueDatas.isDown4, vueDatas.offset, e.clientX)
            }, true);

            // terzo pulsante
            
            this.$refs.move5.addEventListener('mousedown', function(e){
                e.preventDefault();
                vueDatas.isDown5 = true;
                let lOffset = this.offsetLeft;
                let tOffset = this.offsetTop
                vueDatas.offset = [lOffset - e.clientX,tOffset - e.clientY];
                console.log("Preso", vueDatas.isDown5, vueDatas.offset, e.clientX)
            }, true);

            document.addEventListener('mouseup', function() {
                vueDatas.isDown1 = false;
                vueDatas.isDown2 = false;
                vueDatas.isDown3 = false;
                vueDatas.isDown4 = false;
                vueDatas.isDown5 = false;
                console.log("lasciato", vueDatas.isDown1)

            }, true);

            this.$refs.move.addEventListener('click', listener)
            this.$refs.move2.addEventListener('click', listener)
            this.$refs.move3.addEventListener('click', listener)
            this.$refs.move4.addEventListener('click', listener)
            this.$refs.move5.addEventListener('click', listener)



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

            // second image
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

            // third image
            vueDatas.$refs.move3.addEventListener('click', function(e){
                clicks++;
                if (clicks === 1) {
                    timer = setTimeout( () => {
                    clicks = 0
                    }, 200);
                } else {
                    clearTimeout(timer);
                    vueDatas.$refs.move3.removeEventListener("click", listener)
                    console.log("entrato")
                    clicks = 0;
                }         
            }, true)

            // third image
            vueDatas.$refs.move4.addEventListener('click', function(e){
                clicks++;
                if (clicks === 1) {
                    timer = setTimeout( () => {
                    clicks = 0
                    }, 200);
                } else {
                    clearTimeout(timer);
                    vueDatas.$refs.move4.removeEventListener("click", listener)
                    console.log("entrato")
                    clicks = 0;
                }         
            }, true)

            // third image
            vueDatas.$refs.move5.addEventListener('click', function(e){
                clicks++;
                if (clicks === 1) {
                    timer = setTimeout( () => {
                    clicks = 0
                    }, 200);
                } else {
                    clearTimeout(timer);
                    vueDatas.$refs.move5.removeEventListener("click", listener)
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
                if (vueDatas.isDown3) {
                    console.log("mi sposto nell'if")
                    
                    vueDatas.mousePosition = {

                        x : e.clientX,
                        y : e.clientY

                    };
                    vueDatas.$refs.move3.style.left = (vueDatas.mousePosition.x + vueDatas.offset[0]) + 'px';
                    vueDatas.$refs.move3.style.top  = (vueDatas.mousePosition.y + vueDatas.offset[1]) + 'px';
                }
                if (vueDatas.isDown4) {
                    console.log("mi sposto nell'if")
                    
                    vueDatas.mousePosition = {

                        x : e.clientX,
                        y : e.clientY

                    };
                    vueDatas.$refs.move4.style.left = (vueDatas.mousePosition.x + vueDatas.offset[0]) + 'px';
                    vueDatas.$refs.move4.style.top  = (vueDatas.mousePosition.y + vueDatas.offset[1]) + 'px';
                }
                if (vueDatas.isDown5) {
                    console.log("mi sposto nell'if")
                    
                    vueDatas.mousePosition = {

                        x : e.clientX,
                        y : e.clientY

                    };
                    vueDatas.$refs.move5.style.left = (vueDatas.mousePosition.x + vueDatas.offset[0]) + 'px';
                    vueDatas.$refs.move5.style.top  = (vueDatas.mousePosition.y + vueDatas.offset[1]) + 'px';
                }
            }, true);
        },   
    }
</script>

<style lang="scss" scoped>

.moving-objects{
    cursor: pointer;
    figure{
        width: 150px;
        img{
            width: 100%;
        }
    }
}

// .moving{
//     position: absolute;
//     left: 0;
//     top: 0;
// }

</style>