<template>
    <div class="mg-midcontent">
        <div class="mg-realMenu d-flex flex-column justify-content-between ">
            
            <div class="top-leftspace"></div>
            <div class="bot-leftspace"></div>
            
                
            <div class="top-content d-flex">
                <div class="col-6">
                    <h5>Memorial Gestures</h5>
                </div>
                <div class="col-6 d-flex justify-content-between ">
                    <h5>About us</h5>
                    <h5>Contact</h5>
                </div>
            </div>
            <div class="copyright">
                <div class="topleftcopy"></div>
                <h6>
                    Memorial Gestures &copy;
                </h6>
                <div class="toprightcopy"></div>
            </div>
                
            <div class="top-rightspace"></div>
            <div class="bot-rightspace"></div>
        </div>

    </div>
</template>

<script>
import { store } from '../store';
import SelectedDetails from "./SelectedDetails.vue"

export default {
    name: "MainContent2",
    components: {
        SelectedDetails
    },
    data () {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

    .copyright{
        padding: 15px;
        border-left: 1px solid black;
        border-top: 1px solid black;
        position: relative;
        .topleftcopy,
        .toprightcopy{
            width: 15px;
            height: 5px;
            position: absolute;
            top: -1px;
            background-color: white;
        }
        .topleftcopy{
            left: 0;
        }
        .toprightcopy{
            right: 0;
        }
    }

    .mg-midcontent{
        padding: 15px 15px 15px 0 ;
        height: calc(100vh - 15px);
        
        width: calc((100%/4) * 3);
        
        
        .mg-realMenu{
            width: 100%;
            height: 100%;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            position: relative;

            .top-content{
                padding: 15px;
                border-bottom: 1px solid black;
            }
            .content{
                height: calc(100% - 63px);
                padding: 0 15px 15px 15px;
                overflow: auto;
                .scrollable{
                 overflow: auto;
                 height: 100%;
                }

                

                .sections{
                    border-top: 1px solid black;
                    padding-top: 5px;
                    padding-bottom: 20px;
                }
            }
            .top-leftspace,
            .top-rightspace,
            .bot-leftspace,
            .bot-rightspace{
                background-color: white;
                height: 5px;
                width: 15px;
                position: absolute;
            }
            .top-leftspace{
                border-left: 1px solid black;
                height: 57.5px;
                top: -1px;
            }
            .top-rightspace{
                height: 100px;
                top: -1px;
                right: 0;
            }
            .bot-leftspace{
                bottom: -1px;
            }
            .bot-rightspace{
                bottom: -1px;
                right: 0;
            }
        }   
    }
</style>