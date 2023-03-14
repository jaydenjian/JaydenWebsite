<template>
<div class="about-wrap">
  
  <div class="aboutLeftPart">
    <div class="avatar">
      <div class="win1">
        <AvatarWindowModel class="window" w="300" h="250" bgc="#E1D6DA" imgLeft="50" imgTop="70"/>
        
      </div>
      <div class="win2">
        <AvatarWindowModel class="window" w="330" h="350" bgc="#E1D6DA" imgLeft="-130" imgTop="10"/>
        
      </div>
      <div class="win3">
        <AvatarWindowModel class="window" w="250" h="280" bgc="#E1D6DA" imgLeft="80" imgTop="-140"/>
        
      </div>      
    </div>
    <div class="avatar2">
      <div class="win1">
        <AvatarWindowModel class="window" w="250" h="210" bgc="#E1D6DA" imgLeft="30" imgTop="70"/>
        
      </div>
      <div class="win2">
        <AvatarWindowModel class="window" w="220" h="300" bgc="#E1D6DA" imgLeft="-150" imgTop="10"/>
        
      </div>
      <div class="win3">
        <AvatarWindowModel class="window" w="250" h="250" bgc="#E1D6DA" imgLeft="60" imgTop="-140"/>
        
      </div>      
    </div>
  </div>

  <div class="aboutRightPart">    
    <div class="aboutContent">
      <div class="avatar3">
        <AvatarWindowModel class="window" w="400" h="450" bgc="#E1D6DA" imgLeft="25" imgTop="30"/>
      </div>
      <div class="avatar4">
        <AvatarWindowModel class="window" w="250" h="300" bgc="#E1D6DA" imgLeft="0" imgTop="20"/>
      </div>
      <div class="title">>> <span class="bigTitle">About Me</span> </div>
      
      <div class="name">簡均丞 &nbsp;&nbsp;Jian Jyun-Cheng</div>
      
      <div class="title">>> Intro</div>
      
      <div class="intro">
        Hi ! 我是<span class="bigText yText">Jayden</span>。<br>
        過去曾製作過許多軟硬體結合的 <span class="yText">VR</span>、<span class="yText">觸覺回饋遊戲</span>，<br>
        近期則開發了<span class=" yText">個人網站</span>。<br>
        大部分作品都是自行開發完成，詳細的作品內容已放置於作品集中！<br>
        希望未來能夠接觸到更多實務上的程式技術，創造、開發更多不同的互動體驗！</div>
      
      <div class="title">>> Skill</div>
      <div v-for="skill in skills" :key="skill.id" class="skill_btn">
        <div class="skill_btn_content">
          <img :src="skill.icon_path" alt="" class="icon">
          {{skill.text}}
        </div>
      </div>
      
      <div class="title">>> Education</div>
      <div class="edu">
        2018 - 2021 <span class="rText">M.A. 碩士學位</span><br>
        國立臺北科技大學 互動設計系<br>
        Interaction Design<br>
        National Taipei University of Technology<br>
        <br>
        2014 - 2018 <span class="rText">B.Eng 學士學位</span><br>
        淡江大學 電機系<br>
        Electrical and Computer Engineering<br>
        Tankang University
      </div>
      <div class="title">>> Experience</div>
      <div class="exp">
        
        <span class="underline">22.09 - 23.03</span><br>
        CodingAPE <span class="yText">程式設計課程講師</span><br>
        猿創力程式設計學校<br>
        <br>
        
        <span class="underline">20.09 - 21.05</span> <br>
        <span class="yText">International Conference Paper Author</span><br>
        2021 ICIDD<br>
        2020 IEEE- ICCE <a href="https://ieeexplore.ieee.org/document/9258288" class="paperBtn" target="_blank">Paper Link</a><br>
        
        <br>
        <span class="underline">19.10 - 20.01</span><br>
        <span class="yText">Interactive Programmer Intern</span><br>
        Peppercorns Interactive Media Art Inc.<br>
        <br>
        <span class="underline">19.04 - 20.07</span><br>
        CodingAPE <span class="yText">程式設計課程講師</span><br>
        猿創力程式設計學校<br>
        <br>
        <span class="underline">19.01 - 19.04</span> <br>
        第十六屆育秀盃創意獎 <span class="yText">佳作</span><br>
        哩企兜位乘<br>
      </div>
    </div>

  </div>
  
</div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import AvatarWindowModel from "../components/AvatarWindowModel.vue"
import WindowModel from "../components/WindowModel.vue"


export default {
  name: "About",
  components: {AvatarWindowModel, WindowModel},
  setup(){
    const skills = ref([
        {"name": "vue_icon", "text": "Vue","id": 1, "icon_path": require('@/assets/vue_icon.png')},
        {"name": "js_icon", "text": "JavaScript","id": 2, "icon_path": require('@/assets/js_icon.png')},
        {"name": "unity_icon", "text": "Unity","id": 3, "icon_path": require('@/assets/unity_icon.png')},
        {"name": "arduino_icon", "text": "Arduino IDE","id": 4 , "icon_path": require('@/assets/arduino_icon.png')},
        {"name": "python_icon", "text": "Python","id": 5, "icon_path": require('@/assets/python_icon.png')},
        {"name": "sparkAR_icon", "text": "SparkAR","id": 6, "icon_path": require('@/assets/sparkAR_icon.png')},
        {"name": "ai_icon", "text": "Illustrator","id": 7, "icon_path": require('@/assets/ai_icon.png')}
    ]);
    // const skills = ref([]);
    // const error = ref(null);
    // const load = async ()=>{
    //   try{
    //     let data = await fetch("http://localhost:3000/skills")
    //     if(!data.ok){
    //       throw Error("no data available!");
    //     }
    //     skills.value = await data.json();
    //   }
    //   catch(err){
    //     error.value = err.message;
    //     console.log(error.value);
    //   }
    // };
    // load();

    return{skills}
  }
}
</script>

<style scoped>
/* *{
  border: solid 1px white;
  
} */
.about-wrap{
  display: flex;  
  padding: 15px 5vw 5vh 5vw;
  margin-top: 80px;
}
/* LEFT PART */
.aboutLeftPart{
  flex-basis: 600px;
  flex-grow: 1;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar{
  position: relative;
  left: -350px;
  top: -300px;
  /* margin-left: -650px;
  margin-top: -400px; */
}
.avatar2{
  display: none;
}
.avatar3{
  display: none;
}
.avatar4{
  display: none;
}
.win1{
  position: absolute;
  /* left: 180px;
  top: 100px;  */
  left: 80px;
}
.win2{  
  position: absolute;
  /* left: 360px;
  top: 160px; */
  left: 260px;
  top: 60px;
}

.win3{
  position: absolute;
  /* left: 150px;
  top: 310px; */
  left: 50px;
  top: 210px;
}

/* RIGHT PART */
.aboutRightPart{
  flex-basis: 600px;
  flex-grow: 1;
  position: relative;
  left: 30px;
}


.aboutContent{ 
  /* padding: 25px; */
  position: relative;
  /* top: 5vh; */
  line-height: 30px;
  letter-spacing:2px;
  color: #E3D9DD;
  font-weight: bold;
  font-size: 0.9rem;
  overflow-y: scroll;
  -ms-overflow-style: none;/* for hide scrollbar on Internet Explorer, Edge*/
  scrollbar-width: none; /*for Firefox*/
  height: 700px;/* scroll range */
  
}
.aboutContent::-webkit-scrollbar{
  display: none; /* for hide scrollbar on Chrome, Safari, and Opera */
}
.yText{
  color: #E9C694;
}
.rText{
  color: #D3816E;
}
.underline{
  text-decoration: underline;
}
.bigText{
  font-weight: bold;
  font-size: 1.6rem;
  
}
.title{
  font-size: 1.3rem;
  padding: 30px 0px 5px 0px;
}
.bigTitle{
  font-size: 2.5rem;
}
.name{
  padding: 0px 0px 0px 35px;
  font-size: 1.8rem;
  color:#E9C694;
}
.intro{
  padding: 0px 0px 0px 35px;
}
.skill_btn{ 
  padding: 0px 0px 10px 15px;
  display: inline-block;
}
.skill_btn_content{
  background-color: #9FA6B5;
  width: 150px;
  border-radius: 10px;
  color: #373640;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
}
.icon{
  height: 20px;
  padding-right: 5px;
}
.edu{
  padding: 0px 0px 0px 35px;
}
.exp{
  padding: 0px 0px 0px 35px;
}
.paperBtn{
  text-decoration: none;
  background-color: #9FA6B5;
  color: #373640;
  border-radius: 15px;
  padding: 1px 10px;
  box-sizing: border-box;
  font-size: 0.3rem;
  letter-spacing: 0;
  font-weight: lighter;
  box-shadow: 3px 3px 3px 0.5px rgba(0,0,0,0.5);
}

@media screen and (max-width: 1520px){
  .aboutContent{
    font-size: 0.5rem;
  }
  .title{
    font-size: 1.3rem;
    padding: 15px 0px 5px 0px;
  }
  .name{
    font-size: 1.5rem;
  }
  .bigTitle{
    font-size: 2rem;
  }
  .bigText{
  font-weight: bold;
  font-size: 1.3rem;  
  } 
}
@media screen and (max-width: 1200px){

}
@media screen and (max-width: 1024px){
  .aboutContent{
    height: 620px;
  }
  .avatar{
    display: none;
  }
  .avatar2{
    display: block;
    position: relative;
  }
  .avatar2 .win1{
    top: -300px;
    left: -180px;
  }
  .avatar2 .win2{
    top: -240px;
    left: 0;
  }
  .avatar2 .win3{
    top: -90px;
    left: -210px;
  }
}

@media screen and (max-width: 768px){
  .nav .optionList {
    display: none;
  }
  .aboutLeftPart{
    display: none;
  }
  .avatar3{
    display: block;
    padding: 30px;
  }
  .about-wrap{
    padding: 0px;
  }
  .aboutContent{
    height: 650px;
  }
  .aboutRightPart{
    left: 0;
  }
  .avatar3 .window{
    margin-left: auto;
    margin-right: auto;
  }

  /* font setting */
  .aboutContent{
    font-size: 0.9rem;
  }
  .title{
    font-size: 1.5rem;
    padding: 30px 0px 10px 0px;
  } 
}
@media screen and (max-width: 425px){
  .aboutContent{
    padding:20px;
    box-sizing: border-box;
  }
  .avatar3 {
    display: none;
  }
  .avatar4{
    display: block;
  }
  .avatar4 .window{
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 375px){
  
}
</style>