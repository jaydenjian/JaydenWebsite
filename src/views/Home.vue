<template>
  
  <div class="home-wrap">
    <!-- CONTENT PART -->
    <div class="content">
      <!-- LEFT PART -->
      <div class="leftPart">
        <div class="console">
          <WindowModel class="consoleWindow" w="35vw" h="50vh" bgc="#39313D" maxW="535px" minW="502px" maxH="450px" minH="390px"/>
          <WindowModel class="consoleWindow2" w="65vw" h="50vh" bgc="#39313D" maxW="" minW="425px" maxH="450px" minH="390px"/>
          <WindowModel class="consoleWindow3" w="65vw" h="50vh" bgc="#39313D" maxW="" minW="270px" maxH="450px" minH="250px"/>
          <div class="consoleContent">
            (base) jaydenPortfolioWebsite:~ jaydenjian$
            <div class="cursor consoleCursor">&nbsp;&nbsp;</div>      
            <br>
            <div class="consoleLoding">
              ((&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)) Interaction Design: <span class="GText">timing</span> Completed in...<br>            
              ((&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)) Web Dev: <span class="GText">timing</span>  <span class="RText">#root</span> Completed in...
            </div> 
            <div class="consoleLoding2">
              <span class="GText">[ #Front-end ]</span> Dev<br>
              <span class="GText">[ #Game ]</span> Dev, Design<br>
              <span class="GText">[ #Interaction ]</span> Design<br>
            </div>
          </div>
        </div>
        <div class="title">
            <div class="title1">JAYDEN's</div>
            <div class="title2">PORTFOLIO</div>
            <div class="title3">WEBSITE</div>
        </div>
        <div class="searchArea">
          <div class="searchBar">
            <fa icon="search" class="searchIcon"/>
            <!-- FrontEnd Develop , VR Game Develop, Interaction Design, Web Design-->
            <div class="searchText">
              <p class="searchWord"></p>
              <span class="cursor searchBarCursor">_</span>
            </div>          
            
          </div>
          <div class="searchKeyword">
            <div class="searchItem">
              <p class="disableSearchItem">x</p>
              <p>Frontend</p>            
            </div>
            <div class="searchItem">
              <p class="disableSearchItem">x</p>
              <p>VR Develop</p>                
            </div>
          </div>
        </div>
      </div>
      <!-- RIGHT PART -->
      <div class="rightPart">       
        <div class="rightWindows">
          <div class="BGWindow1">
            <WindowModel w="22vw" h="270px" maxW="316px" bgc="#78636A"/>
          </div>
          <div class="BGWindow2">
            <WindowModel w="19vw" h="220px" maxW="273px" bgc="#E2DEDB"/>
          </div>
          <div class="BGWindow3">
            <WindowModel w="18vw" h="220px" maxW="259px" bgc="#BAAFB3"/>
          </div>
          <div class="windowMain">
            <WindowModel class="rightWindowMain1" w="20vw" h="320px" bgc="#39313D" maxW="360px" minW="320px"/>            
            <div class="contentBlocks">
              <div class="contentBlock contentBlock1" style=""></div>
              <div class="contentBlock contentBlock2" style=" "></div>
              <br>
              <div class="contentBlock contentBlock3" style=""></div>
              <div class="contentBlock contentBlock4" style=""></div>
              <div class="contentBlock contentBlock5" style=""></div>
              <br>
              <div class="intro">
                &lt;intro&gt;
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;Hi ! I’m Jayden !<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="GText">[ #Front-end ]</span> Dev<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="GText">[ #Game ]</span> Dev, Design<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="GText">[ #Interaction ]</span> Design<br>
                &lt;/intro&gt; <br>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;<div class="contentBlock contentBlock6" style=""></div>
              <div class="contentBlock contentBlock7" style=""></div>
              <div class="contentBlock contentBlock8" style=""></div>
              <br>
              <div class="contentBlock contentBlock9" style=""></div>
              <div class="contentBlock contentBlock10" style=""></div>
              <div class="contentBlock contentBlock11" style=""></div>            
              <div class="contentBlock contentBlock12" style=""></div>            
            </div>
          </div>          
        </div>
      </div>
      
      <br>      
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import WindowModel from '../components/WindowModel.vue'
import { onMounted } from '@vue/runtime-core'
import {gsap}from "gsap"
import {TextPlugin} from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin);


export default {
  name: 'Home',
  components:{ WindowModel },
  setup(){
    
    onMounted(()=>{                  
      const searchTextArray = ["FrontEnd Develop" , "VR Game Develop", "Interaction Design", "Web Design"]

      // cursor anim
      gsap.to(".cursor",{duration:1,opacity:0 ,ease: "steps(1)",repeat:-1});

      //start anim
      var anim = gsap.timeline({defaults:{opacity:0, ease:"back"/*, repeat: -1, yoyo: true*/}});

      function init(){
        anim.from(".console",{y: 400,scale:0, duration: 1})
            .from(".windowMain",{y: 400,scale:0, duration: 1},"<0.5")      
      }

      // BG window anim
      var bgWindow_Tl = gsap.timeline({defaults:{opacity:0, ease:"back" ,yoyo: true, repeat: -1, repeatDelay: 1}});

      function bgInfiniteAnim(){
        bgWindow_Tl.from(".BGWindow1",{y: 200,scale:0, duration:1},"<0.2")
                  .from(".BGWindow2",{y: 500,scale:0, duration:1},"<0.4")
                  .from(".BGWindow3",{y: 300,scale:0, duration:1},"<0.6")        
      }

      //search Bar text anim
      var searchText_Tl = gsap.timeline({repeat:-1})

      searchTextArray.forEach( word => {
        var word_Tl = gsap.timeline({repeat:1,yoyo:true, repeatDelay: 1})// dont know why need to set repeat 1 and yoyo
        word_Tl.to(".searchWord",{duration:2,text: word})
        searchText_Tl.add(word_Tl)
      })
      window.addEventListener("load", ()=>
        init(),
        bgInfiniteAnim(),
      );     
    })
  },

}
</script>

<style scoped> 
/* *{
  border: solid 1px yellowgreen;
} */

/* .home-wrap{
  padding: 10vh 5vw 5vh 5vw;
  margin-top: 60px;
} */
.content{
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  /* margin-left: auto;
  margin-right: auto; */
  
}

.GText{
  color: #63F333;
}
.RText{
  color: #D3816E;
}

/* LEFT PART */
.leftPart{
  position: relative;
  flex-basis: 50%;
  /* height: 700px; */
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-content: center; */
  left: 1vw;
  margin-top: 60px;
}
.leftPart .console{
  height: 300px;
  position: relative;
  top: 100px;
}
.leftPart .console .consoleWindow{  
  position: relative;
  top: 0px;
  /* z-index: -1; */
}
.leftPart .console .consoleWindow2{  
  display: none;
}
.leftPart .console .consoleWindow3{  
  display: none;
}
.leftPart .console .consoleContent{ 
  position: absolute;
  top: 30px;
  left: 15px;
  width: 30vw;
  margin : 0px;
  color: #E1D6DA;
  font-size: 1rem;
  min-width: 410px;
}
.leftPart .console .consoleContent .consoleCursor{
  display: inline-block;
  background-color: #E1D6DA;
}
.leftPart .consoleLoding2{
  display: none;
}
.leftPart  .title{
  position: relative;
  height: 0;
  top: -25vh;
  z-index: 1;
  text-shadow: 8px 8px 10px rgba(0,0,0,0.5);
}
.leftPart  .title .title1{
  font-size: 3.5rem;
  line-height: 100%;
  color: #E2DEDB;
  letter-spacing: 2px;
}
.leftPart  .title .title2{
  font-size: 5.5rem;
  font-weight: bold;
  line-height: 100%;
  color: #D3816E;
}
.leftPart  .title .title3{
  font-size: 5.4rem;
  font-weight: bold;
  line-height: 100%;
  color: #E2DEDB;
  margin-left: 350px;
}
.leftPart .searchArea{
  position: relative;
  top: -5vh;
  height: 60px;
}
.leftPart .searchArea .searchBar{
  border-radius: 30px;
  border: none;
  background-color: #E0DCD9;
  width: 50vw;
  height: 60px;
  max-width: 500px;
  min-width: 310px;

}

.leftPart .searchArea .searchBar .searchIcon{
  color: #878787;
  font-size: 2rem;
  position: absolute;
  left: 30px;
  top: 15px;
  
}
.leftPart .searchArea .searchBar .searchText{  
  position: absolute;
  left: 80px;
  top: -3px;
  
}
.leftPart .searchArea .searchBar .searchText .searchWord{
  color: #878787;
  font-size: 1.3rem;
  font-weight: bolder;
  display: inline-block;
}

.leftPart .searchArea .searchBar .searchBarCursor{
  display: inline-block;
  color: #878787;
  font-size: 1.3rem;

}
.leftPart .searchArea .searchKeyword .searchItem{
  height: auto;
  width: auto;
  display: inline-block;
  background-color: #E0DCD9;
  border-radius: 30px;
  margin-top: 10px;
  margin-left: 10px;
}
.leftPart .searchArea .searchKeyword .searchItem p{
  display: inline-block;
  margin: 0px;
  padding: 5px 8px;
  margin: 0px 3px;
  color: #878787;
  font-weight: bold;
  font-size: 1rem;
}
.leftPart .searchArea .searchKeyword .searchItem .disableSearchItem{
  cursor: pointer;
}

/* RIGHT PART */
.rightPart{
  flex-basis: 50%;
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -3vw;
  top: -20px;
}
.rightPart .rightWindows{
  position: relative;
}
.rightPart .windowMain{
  position: relative; 
}

.rightPart .windowMain .contentBlocks{
  position: absolute;
  top:0px;
  left: 0px;
  padding: 25px 0.5vw 0px 0.5vw;
}
.rightPart .windowMain .contentBlocks .contentBlock{  
  border-radius: 30px;  
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  height: 12px;
}
.rightPart .windowMain .contentBlocks .contentBlock1{
  background-color:  #E2DEDB; 
  /* width: 8vw;
  max-width: 110px; */
  width: 110px;
}
.rightPart .windowMain .contentBlocks .contentBlock2{
  background-color: #324B6F; 
  /* width: 5vw;
  max-width: 70px; */
  width: 70px;
}
.rightPart .windowMain .contentBlocks .contentBlock3{
  background-color:  #E9C694; 
  /* width: 6vw;
  max-width: 85px; */
  width: 85px;
}
.rightPart .windowMain .contentBlocks .contentBlock4{
  background-color:  #D3816E; 
  /* width: 7vw;
  max-width: 100px; */
  width: 100px;
}
.rightPart .windowMain .contentBlocks .contentBlock5{
  background-color:  #E2DEDB; 
  /* width: 5vw;
  max-width: 70px; */
  width: 70px;
}
.rightPart .windowMain .contentBlocks .contentBlock6{
  background-color:  #D3816E; 
  /* width: 3vw;
  max-width: 42px; */
  width: 42px;
}
.rightPart .windowMain .contentBlocks .contentBlock7{
  background-color:  #E2DEDB; 
  /* width: 6vw;
  max-width: 85px; */
  width: 85px;
}
.rightPart .windowMain .contentBlocks .contentBlock8{
  background-color:  #E9C694; 
  /* width: 6vw;
  max-width: 85px; */
  width: 85px;
}
.rightPart .windowMain .contentBlocks .contentBlock9{
  background-color:  #D3816E; 
  /* width: 5vw;
  max-width: 70px; */
  width: 70px;
}
.rightPart .windowMain .contentBlocks .contentBlock10{
  background-color:  #324B6F; 
  /* width: 2vw;
  max-width: 30px; */
  width: 30px;
}
.rightPart .windowMain .contentBlocks .contentBlock11{
  background-color:  #E2DEDB; 
  /* width: 8vw;
  max-width: 113px; */
  width: 113px;
}
.rightPart .windowMain .contentBlocks .contentBlock12{
  background-color:  #E9C694; 
  /* width: 2vw;
  max-width: 30px; */
  width: 30px;
}
.rightPart .windowMain .contentBlocks .intro{
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #E1D6DA;
  letter-spacing: 1px;
  line-height: 25px;
}
.rightPart .BGWindow1{
  position: absolute;
  top: 200px;
  left: -130px;
  z-index: -1;
}
.rightPart .BGWindow2{
  position: absolute;
  left: 200px;
  top: -80px;
}
.rightPart .BGWindow3{
  position: absolute;
  left: 220px;
  top: 200px;
}
/* ************* */

@media screen and (max-width: 1300px){
  .rightPart .BGWindow1, .BGWindow2, .BGWindow3{  
    display: none;
  } 
  .leftPart{
    left: 3vw;
  }
  .leftPart .searchArea{    
    left: 10vw;
  }
}

@media screen and (max-width: 1024px){
  .rightPart{
    display: none;
  }
  .leftPart .console .consoleWindow{
    display: none;
  }
  .leftPart .console .consoleWindow2{
    display: block;
  }  
  .leftPart .console{
    left: 0;
  }
  .leftPart .searchArea{
    left:0;
  }
  .leftPart{
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 768px){
  .leftPart .title .title1, .title2{
    text-align: center;
    margin-bottom: 10px;
  }
  .leftPart .title .title3{
    text-align: center;
    margin-left: 0;
  }
  
}
@media screen and (max-width: 425px){
  .leftPart .title .title1{
    text-align: left;
    font-size: 3rem;
  }
  .leftPart .title .title2{
    font-size: 4rem;
    text-align: left;
  }
  .leftPart .title .title3{
    font-size: 4rem;
    text-align: left;
  }
  .leftPart .consoleLoding{
    display: none;
  }
  .leftPart .console .consoleWindow2{
    display: none;
  }
  .leftPart .console .consoleWindow3{
    display: block;
  }
  .leftPart .console .consoleContent{ 
    font-size: 0.5rem;
    left: 5px;
    min-width: 260px;
  }
  .leftPart .console .consoleContent .consoleCursor{
    display: inline-block;
    background-color: #E1D6DA;
  }
  .leftPart .consoleLoding2{
    display: block;
    line-height: 25px;
  }
}
@media screen and (max-width: 375px){
  /* .leftPart .title{
    top: -150px;
  } */
  .leftPart .title .title1{
    text-align: left;
    font-size: 2rem;
  }
  .leftPart .title .title2{
    font-size: 3rem;
    text-align: left;
  }
  .leftPart .title .title3{
    font-size: 3rem;
    text-align: left;
  }
  .leftPart .console .consoleContent{   
    min-width: 220px;
    
  }
  
}
</style>
