<template>
    <div class="screen-container d-flex flex-wrap">
        <div v-if="store.dataReady" v-for="(singlePic, index) in picData" :key="index" :ref="'move' + index" :style="{ top: singlePic.yAxis + '%', left: singlePic.xAxis + '%', zIndex: singlePic.layer }" class="moving-objects">
            <a :href="singlePic.linksTo">
                <figure :style="{width: singlePic.width, height: singlePic.height}">
                    <img :src="`${store.apiBase}storage/${singlePic.imagePic}`" alt="" :style="{width: singlePic.width +  'px', height: singlePic.height + 'px'}">
                </figure>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '@/store';

export default {
    name: "RealHomePage",
    data() {
        return {
            store,
            picData: [],
            mousePosition: "",
            offset: [0, 0],
            isDown: [],
            clicks: 0,
            timer: null
        }
    },
    methods: {
        async getDatas() {
            try {
                const response = await axios.get(`${store.apiUrl}`);
                this.picData = response.data.homePic;
                store.dataReady = true;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        handleMouseDown(index, event) {
            event.preventDefault();
            this.isDown[index] = true;
            const element = this.$refs[`move${index}`][0];
            this.offset = [
                element.offsetLeft - event.clientX,
                element.offsetTop - event.clientY
            ];
        },
        handleMouseUp() {
            this.isDown = this.isDown.map(() => false);
        },
        handleMouseMove(event) {
            event.preventDefault();
            this.isDown.forEach((down, index) => {
                if (down) {
                    this.mousePosition = {
                        x: event.clientX,
                        y: event.clientY
                    };
                    const element = this.$refs[`move${index}`][0];
                    element.style.left = (this.mousePosition.x + this.offset[0]) + 'px';
                    element.style.top = (this.mousePosition.y + this.offset[1]) + 'px';
                }
            });
        },
        handleClick(event, index) {
            event.preventDefault();
            this.clicks++;
            if (this.clicks === 1) {
                this.timer = setTimeout(() => {
                    this.clicks = 0; // Reset clicks count after timeout
                }, 250); // Delay for distinguishing single and double click
            } else {
                clearTimeout(this.timer);
                this.clicks = 0;
                // Perform double-click action
                const link = event.currentTarget.querySelector('a');
                if (link) {
                    window.location.href = link.href; // Redirect to the href of the link
                }
            }
        }
    },
    async mounted() {
        await this.getDatas();
        document.addEventListener('mouseup', this.handleMouseUp, true);
        document.addEventListener('mousemove', this.handleMouseMove, true);

        this.picData.forEach((_, index) => {
            const element = this.$refs[`move${index}`][0];
            element.dataset.index = index;
            element.addEventListener('mousedown', event => this.handleMouseDown(index, event), true);
            element.addEventListener('click', event => this.handleClick(event, index), true);
        });
    },
    beforeDestroy() {
        document.removeEventListener('mouseup', this.handleMouseUp, true);
        document.removeEventListener('mousemove', this.handleMouseMove, true);

        this.picData.forEach((_, index) => {
            const element = this.$refs[`move${index}`][0];
            element.removeEventListener('mousedown', event => this.handleMouseDown(index, event), true);
            element.removeEventListener('click', event => this.handleClick(event, index), true);
        });
    }
}
</script>



<style lang="scss" scoped>

.moving-objects{
    cursor: pointer;
    position: absolute;
    figure{
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

@media (max-width: 768px) {

.moving-objects{
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
}
.screen-container{
    height: calc(100% - 15px);
    overflow: auto;
    width: 100%;
    justify-content: space-between;
    .moving-objects{
        width: calc(100% / 2);
    }
}
}

</style>