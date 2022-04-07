<template>
    <div class="window">
        <div class="toplight">
            <div class="windowCtrl">
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
            </div>
        </div>
        <div class="content">
            <div class="imgBlock">
                <img :src="item.img_path" :style="{left: imgLeft+'px', top: imgTop+'px' }"> 
            </div>            
            <div class="content_text">
                <div class="projectName">{{item.name}}</div>
                <div class="tool_btn" v-for="tool in item.tools" :key="tool">{{tool}}</div>
                <div class="text">{{item.text}}</div> 
            </div>       
        </div>
    </div>
</template>

<script>

export default {
    props:["w", "h", "bgc", "imgLeft", "imgTop", "imgWidth", "imgHeight", "item"],
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
    width: v-bind(w);
    height: v-bind(h);
    border-radius: 7px;
    box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.3);
    background-color: #BAAFB3;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    cursor: pointer;
    
}
.window:hover{
    transform: scale(1.05);
    background-color: #E1D6DA;
}
.toplight{
    height: 20px;
    width: 100%;
    /* position: absolute; */
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

.content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.imgBlock{
    width: 100%;
    height: 250px;
    overflow: hidden;
    margin-top: 0.5vh;
    padding: 20px;
    box-sizing: border-box;
}
img {
    /* position: absolute; */
    width: 100%;    
    object-fit: contain;
    /* margin-top: 1vh; */
    /* position: relative;
    top: 2vh; */
}
.content_text{
    /* padding: 20px 40px 0px 40px; */
    padding: 0vh 2vw 1vh 2vw;
    /* margin-top: 1vh; */
    color: #373640;
}
.content_text .projectName{
    font-size: 1.3rem;
    font-weight: 600;
    
}
.content_text .tool_btn{
    display: inline-block;
    background-color: #78636A;
    color: #E1D6DA;
    padding: 0.5vh 1vw 0.5vh 1vw;
    margin-right: 0.5vw;
    margin-top: 1.5vh;
    border-radius: 10px;
}
.content_text .text{
    margin-top: 1.5vh;
    height: 70px;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
@media screen and (max-width: 768px){ 
    img{
        width: v-bind(imgWidth);
        height: v-bind(imgHeight);
    }
    .content_text .text{
        height: 6vh;
        -webkit-line-clamp: 2;
    }
}
@media screen and (max-width: 425px){ 
    .imgBlock{
        padding: 0 20px;
        height: auto;
    }
}
@media screen and (max-width: 375px){
    .window{
        height: 50vh;
    }
    .imgBlock{
        padding: 0 10px;
        height: auto;
    }
    img{
        height: 25vh;
    }
}
</style>