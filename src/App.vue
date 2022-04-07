<template>

  <!-- NAV PART -->
  <div class="nav" :class="{onScrollNav: !topOfPage}">
    <div class="navContentWrap">
      <router-link to="/" class="homeBtn">
        <div class="homeImg"></div>
        <p :class="!topOfPage?'onScrollHomeBtnWord':'homeBtnWord'">Home</p>      
      </router-link> 

      <div class="optionList">
        <router-link to="/" class="optionHome" :class="!topOfPage?'onScrollOptionItem':'optionItem'" >Home</router-link>
        <router-link to="/about" class="optionAbout" :class="!topOfPage?'onScrollOptionItem':'optionItem'"  >About</router-link>
        <router-link to="/work" class="optionWork"  :class="!topOfPage?'onScrollOptionItem':'optionItem'" >Work</router-link>
        <div class="optionContact" :class="!topOfPage?'onScrollOptionItem':'optionItem'" @click="toggleContactInfo">Contact</div>        
      </div>
      
      <!-- <div class="ham">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div> -->
    </div>
    
  </div>

  <div class="contactBG" v-if="contactToggle"></div>
  <transition name="contactWindowAnim" mode="out-in">
    <Contact v-if="contactToggle" @close="toggleContactInfo"/>
  </transition>

  <!--  -->
  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script>
import { ref } from '@vue/reactivity'
import Contact from './components/Contact.vue'
import { onMounted } from '@vue/runtime-core';

export default {
  name:"app",
  components:{ Contact },
  setup(){    
    const contactToggle = ref(false); 
    const topOfPage = ref(true); //nav bar scroll const

    const toggleContactInfo = ()=>{  
      contactToggle.value = ! contactToggle.value;
    }

    
    const handleScroll = () =>{
      if(window.scrollY>0){
        if(topOfPage.value) topOfPage.value = false;      
      }else{
        if(!topOfPage.value) topOfPage.value = true;      
      }     
    }

    onMounted(()=>{
      window.addEventListener("scroll", handleScroll)
    })
    
    return {toggleContactInfo, contactToggle, handleScroll, topOfPage}
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
/* *{
  border : solid 1px red;
} */

html, body{
  width: 100%;
  height: 100%;
  border: none;  
  margin: 0px;
  padding: 0px;
  /* background-color: white; */
  background-color: #3C4E6F;
  font-size: 15px;
}

#app {
  
  font-family: 'Noto Sans',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: column; */
  
}


/* NAV */
.nav{
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 100;
  /* border-bottom: solid 5px #3C4E6F; */
}
/* when scroll, nav bg change */
.onScrollNav{ 
  background-color: rgba(225,214,218,0.9);  

}

.navContentWrap{
  display: flex;
  width: 100%;
  max-width: 1440px;
  font-size: 1rem;
  padding: 20px;
  padding-bottom: 0;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
}
/*  */
.optionList{
  display: flex;
  margin-right: 0;
  margin-left: auto;
  margin-top: 5px; 
}
.onScrollOptionItem{
  color:#3C4E6F;
  letter-spacing: 2px;
  text-align: center;
  margin-right: 40px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
.optionList .optionItem{
  color: #E1D6DA;
  letter-spacing: 2px;
  text-align: center;
  margin-right: 40px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

/* .ham{
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}
.ham .bar{
  width: 30px;
  height: 3px;
  margin-bottom: 3px;
  background-color: #fff;
} */
.homeBtn{
  height: 60px;
  width: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: -5px;
  padding-bottom: 10px;
}
.onScrollHomeBtnWord{
  color: #3C4E6F;
  margin: 0px;
  text-align: center;
  font-weight: bold;
  font-size: 0.3rem;
  
}
.homeBtn .homeBtnWord{
  /* width:5vw; */
  color: #E1D6DA;
  margin: 0px;
  text-align: center;
  font-weight: bold;
  font-size: 0.3rem;
  /* padding-top: 5px; */
}
.homeBtn .homeImg{
  width: 50px;
  height: 50px;
  background-image: url("./assets/home-icon-06.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* route transition anim */
.route-enter-from{
  opacity: 0;
  /* transform: translateY(-100px) ; */
  transform: translateX(100px);
}
.route-leave-to{
  opacity: 0;
  /* transform: translateY(300px) ; */
  transform: translateX(-300px);
}
.route-enter-active, .route-leave-active{
  transition: all 0.5s ease-out ;
}

/* contact Background */
.contactBG{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 150;
  background-color: rgba(0,0,0,0.3);
}
/* contact window anim */
.contactWindowAnim-enter-from{
    transform: translateY(-100px);
    opacity: 0;
}
.contactWindowAnim-leave-to{
    transform: translateY(-100px);
    opacity: 0;
}
.contactWindowAnim-enter-active, .contactWindowAnim-leave-active{
    transition: all 0.5s ease-out;
}

/* hide all scrollbar */
::-webkit-scrollbar{
  display: none;
  /* width: 0px; */
}

@media screen and (max-width: 1440px){
  
  
}
@media screen and (max-width: 1200px){

}
@media screen and (max-width: 1024px){
  
}

@media screen and (max-width: 768px){
  .nav .optionList {
    display: none;
  }
}
@media screen and (max-width: 375px){
  
}
</style>
