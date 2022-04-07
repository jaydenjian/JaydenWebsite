<template>
    <div class="work_wrap">
        <div class="title">>> Project</div>                       
        <div class="projects">              
            <div class="project" v-for="project in projects" :key="project.id">
                    <router-link :to="project.path" class="router-link">
                        <ProjectWindow class="pjWindow1" w="400px" h="460px" imgLeft="50" imgTop="70" imgHeight="250px" :item="project"/>                        
                        <ProjectWindow class="pjWindow2" w="80vw" h="55vh" imgLeft="" imgTop="" imgWidth="100%" imgHeight="30vh" :item="project"/>
                    </router-link>                        
            </div>
        </div>
    </div>
    
</template>

<script>
import { ref } from '@vue/reactivity'
import ProjectWindow from '../components/ProjectWindow.vue'
import { onMounted } from '@vue/runtime-core'


export default {
    name: "Work",
    components: {ProjectWindow},
    setup(){
        const projects = ref([
            {"name": "VR熱觸覺遊戲", "id": 1, "path": "/project_thermal", "img_path": require("@/assets/project_thermal.png"), "tools":["Unity", "Arduino IDE", "C#"],"text": "在VR遊戲中，透過「音量的漸增」來影響人對「溫度的提升」的判斷。 藉由聲音來強化雙手溫度的感知。"  },
            {"name": "AR 聖誕互動濾鏡", "id": 2, "path": "/project_filter", "img_path": require("@/assets/project_filter.png"), "tools":["SparkAR"],"text": "與插畫家、遊戲設計專才合作，設計符合需求之AR濾鏡遊戲， 濾鏡互動包含眨眼、張嘴、搖頭、點頭、點擊畫面等。"  },
            {"name": "哩趣兜位乘", "id": 3, "path": "/project_travel", "img_path": require("@/assets/project_travel.png"), "tools":["Unity", "C#"],"text": "觀光旅遊於腦海中留下的點滴，經擴增實境(AR)遊戲， 拼湊旅遊景點的建築、文物等場景，浮現出景點的合影與回憶， 來達到銀髮族記憶認知上的回憶效果。"  },
            {"name": "裝置藝術 - 搖擺星火", "id": 4, "path": "/project_swingLed", "img_path": require("@/assets/project_swingLED.png"), "tools":["Arduino IDE", "Kicad"],"text": "與燈光公司合作之裝置藝術作品。透過 步進馬達調整控制搖擺幅度、緩進緩停，並設計PCB電路板讓裝置體積更小。2020年初於屏東展出。"  },
        ]);

        onMounted(()=>{
            
        });
        return{projects}
    }
}
</script>

<style scoped>
/* *{
    border: solid 1px white;    
} */

.work_wrap{
    max-width: 1440px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    overflow-y: scroll;
    -ms-overflow-style: none;/* for hide scrollbar on Internet Explorer, Edge*/
    scrollbar-width: none; /*for Firefox*/
    height: 100%;/* scroll range */ 
    
}

.title{
    font-size: 2.5rem;
    font-weight: bold;
    color: #E3D9DD;
    width: auto;
    height: auto;
    padding: 0;
    margin-left: 80px;
    margin-top: 30px;
    
}
.projects{    
    width: 100%;
    padding: 0px 50px 50px 50px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
}
.project{
    margin-top: 50px;
    
    
}
.pjWindow2{
    display: none;
}
.router-link{
    text-decoration: none;
}
@media screen and (max-width: 1520px){

}
@media screen and (max-width: 1200px){

}
@media screen and (max-width: 1023px){
}

@media screen and (max-width: 768px){ 
    .pjWindow1{
        display: none;
    }
    .pjWindow2{
        display: block;
    }
}
@media screen and (max-width: 425px){
    .title{
        margin-left: 30px;
    }
    .project{
        margin-top: 30px;
    }

}
@media screen and (max-width: 375px){

}
    
</style>