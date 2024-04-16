<template>
    <div class="mg-sidebar">
        
        <div class="mg-realMenu border-black">
            <div class="leftspace"></div>
            <div class="content">
                <div class="top-content">
                    <a href="/home">
                        <h5>Holocaust Centre North</h5>

                    </a>
                </div>

            </div>
            <div class="rightspace"></div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: "SideMenu",
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .mg-sidebar{
        padding: 15px 0px 15px 15px;
        height: 100vh;
        width: calc(100%/4);
        
        .mg-realMenu{
            width: 100%;
            height: 100%;
            
            border: 1px solid black;
            
            position: relative;
            .content{
                background-color: coral;
                height: 100%;
                padding: 0 15px;

                .top-content{
                    padding: 15px 0;
                }
            }
            .leftspace,
            .rightspace{
                background-color: white;
                height: 101%;
                width: 15px;
                position: absolute;
            }
            .leftspace{
                top: -1px;
            }
            .rightspace{
                top: -1px;
                right: 0;
            }
        }

        
    }
    
</style>