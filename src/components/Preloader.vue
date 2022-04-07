<template>
    <div class="preloader-wrapper">
        <div class="leftFile">
            <img class="leftFileOpen" src="../assets/fileFullOpen.png" alt="">
            <img class="leftFileMediumOpen" src="../assets/fileMediumOpen.png" alt="">
        </div>
        
        <div class="progressBar">
            <div class="progressGreen"></div>
            <div class="progressGreen"></div>
            <div class="progressGreen"></div> 
            <div class="progressGreen"></div> 
            <div class="progressGreen"></div> 
        </div>

        <div class="rightFile">
            <img class="rightFileOpen" src="../assets/fileFullOpen.png" alt="">
            <img class="rightFileMediumOpen" src="../assets/fileMediumOpen.png" alt="">
        </div>
    </div>
</template>

<script>
import {gsap} from "gsap"
import { onMounted } from '@vue/runtime-core'
// import {CSSPlugin} from "gsap/CSSPlugin"
// import {CSSRulePlugin} from "gsap/CSSRulePlugin"
// gsap.registerPlugin(CSSPlugin,CSSRulePlugin);


export default {
    
    setup(){
        
        onMounted(()=>{
            
            // Greens anim
            var greens_tl = gsap.timeline({repeat:-1} )
            function greensAnim(){
                greens_tl.to(".progressGreen",{x: 400, duration: 1.5, ease:"none"})                
            }

            //file anim
            var lfile_tl = gsap.timeline({repeat:-1, yoyo: true})
            function lfileAnim(){                
                lfile_tl.to(".leftFileOpen",{display: "none"})
                lfile_tl.to(".leftFileMediumOpen",{display: "block"})
                lfile_tl.to(".leftFileMediumOpen",{display: "none"})
                lfile_tl.to(".leftFileOpen",{display: "block"})                
            }

            var rfile_tl = gsap. timeline({repeat:-1, yoyo: true, delay: 1})
            function rfileAnim(){
                rfile_tl.to(".rightFileOpen",{display: "none"})
                rfile_tl.to(".rightFileMediumOpen",{display: "block"})
                rfile_tl.to(".rightFileMediumOpen",{display: "none"})
                rfile_tl.to(".rightFileOpen",{display: "block"}) 
            }

            lfileAnim();
            rfileAnim();
            greensAnim();            
        })
    }
}
</script>

<style>
.preloader-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.leftFile{
    width: 100px;
    /* height: 53px; */
    /* background-image: url(""); */
    /* background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: rotateY(180deg); */
    /* margin: 10px; */
    /* display: inline-block; */
}
.leftFile img{
    width: 80px;
    height: 53px;
    vertical-align: top;
    /* margin: 10px; */
}
.leftFileMediumOpen, .rightFileMediumOpen{
    display: none;
}
.progressBar{
    width: 400px;
    background-color: white;
    height: 20px;
    border-radius: 50px;
    margin: 10px;
    padding: 3px;
    overflow: hidden;
    /* display: inline-block; */
}
.progressGreen{
    display: inline-block;
    width: 15px;
    height: 20px;
    background-color: #65BE2D;
    border-radius: 3px;
    margin: 0px 1px;
}

.rightFile{
    width: 100px;
    margin-left: 15px;
}
.rightFile img{
    width: 80px;
    height: 53px;
    vertical-align: top;
}


</style>