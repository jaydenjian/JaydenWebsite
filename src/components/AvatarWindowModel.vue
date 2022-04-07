<template>
    <div class="window" :style="{width : w+ 'px', height: h+'px', backgroundColor: bgc}">
        <div class="toplight">
            <div class="windowCtrl">
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
            </div>
        </div>
        <img src="../assets/avatar.png" :style="{left: imgLeft+'px', top: imgTop+'px' }">        
    </div>
</template>

<script>

export default {
    props:["w", "h", "bgc", "imgLeft", "imgTop" ],
    setup(props){
        // console.log(props.imgLeft, props.imgTop);
    },
}
</script>

<style scoped>
/* div{
    border: solid 1px black;
} */
.window{
    /* width: 500px;
    height: 400px; */
    border-radius: 7px;
    box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.3);
    /* background-color: #39313D; */
    position: relative;
    overflow: hidden;
}
.toplight{
    height: 20px;
    width: 100%;
    position: absolute;
    top: 0px;
    border-radius: 7px 7px 0px 0px;
    background: #EFEFEF;
    z-index: 1;
}
.windowCtrl{
    position: absolute;
    top: 0px;
    left: 5px;
    margin: 0px;
    padding: 0px;
    height: 10px;
}
.circle{
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 100%;
    margin-left: 5px;
}
.circle1{background-color: #CD4F18;}
.circle2{background-color: #EB941E;}
.circle3{background-color: #48B26D;}
img {
    position: absolute;
    width: 400px;
}

@media screen and (max-width: 1024px){
    img {
        width: 350px;
    }
    .toplight{
        height: 10px;
    }
    .circle{
        width: 5px;
        height: 5px;
    }
    .windowCtrl{
        top: -8.5px;
    }
}

@media screen and (max-width: 768px){
    .toplight{
        height: 15px;
    }
    .circle{
        width: 8px;
        height: 8px;
    }
    .windowCtrl{
        top: -8.5px;
    }
}
@media screen and (max-width: 425px){
    img {
        width: 230px;
        padding: 10px;
    }
}
@media screen and (max-width: 375px){

}
</style>