<template>
    <div class="window">
        <div class="toplight">
            <div class="windowCtrl">
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
            </div>
        </div>        
    </div>
</template>

<script>

export default {
    props:["w", "h", "bgc", "maxW", "minW","maxH","minH"],
    setup(props){
        // console.log(props.img);
    },
}
</script>

<style scoped>
/* div{
    border: solid 1px black;
} */
.window{
    min-width: v-bind(minW);
    max-width: v-bind(maxW);
    min-height: v-bind(minH);
    max-height: v-bind(maxH);
    width: v-bind(w);
    height: v-bind(h);
    border-radius: 7px;
    box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.3);
    background-color: v-bind(bgc);
    position: relative;
}
.toplight{
    height: 20px;
    width: 100%;
    position: absolute;
    top: 0px;
    border-radius: 7px 7px 0px 0px;
    background: #EFEFEF;
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

</style>