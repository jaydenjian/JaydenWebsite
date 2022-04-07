<template>
    <div class="travel_wrap">
        <div class="title"># 哩趣兜位乘
            <div class="subTitle">結合擴增實境(AR)遊戲的旅遊App。</div>
        </div>
        <div class="projectIntro">
            <div class="projectImgContainer">
                <img src="../assets/projectTravel/Travel_Scene.png" class="projectImg" alt="">
            </div>
            <div class="projectDescribe">
                <div class="yWord">作者：</div>簡均丞、楊捷絮、李永裕、林耕禾、李思、溫佳瑜<br>
                <div class="yWord">負責項目：</div>AR遊戲開發、裝置設計<br>
                <br><br>
                這是一款結合擴增實境(AR)遊戲的旅遊APP，設計用於強化銀髮族的記憶認知。透過擴增實境(AR)重現旅遊景點的建築、文物等場景，再藉由特別設計的指壓裝置，將擴增實境裡散落的建築物如拼湊積木般，拼湊回印象中的建築物的正確位置，以達到記憶認知上的回憶效果。<br>
                <br><br>
                <a href="https://youtu.be/RVMy5jxJEn8" class="ytBtn" target="_blank">
                    <img src="../assets/projectThermal/youtube_icon.png" class="ytIcon" alt="">Demo 影片<br>
                </a>                
                <br><br>
                <img src="../assets/projectTravel/16th_logo.png" class="awardIcon" alt="">第十六屆 育秀盃創意獎佳作<br>
            </div>
        </div>

        <div class="title">>> AR Design</div>
        <div class="arDesignWrap">
            <div class="arDescribe">
                使用Vuforia技術製作。分別從手部抓取物件控制、偵測物件抓取、以及建物透明處裡等，做程式設計。<br>最後再結合UI設計，來達成遊戲目的。<br><br>
                <div class="ModelImgContainer">
                    <img src="../assets/projectTravel/3DModel.jpg" class="ModelImg" alt="">
                </div>            
            </div>
            <div class="arScriptImgContainer">
                    <img src="../assets/projectTravel/ARCamera.png" class="arScriptImg" alt="">
            </div>
        </div>
        
        <div class="title">>> UI Design</div>
        <div class="uiDesignWrap">
            <div class="uiImgContainer">
                <img src="../assets/projectTravel/ScrollView-12.png" class="uiImg" alt="">
            </div>
            <div class="uiDescribe">
                與組員探討設計後，先將所需圖檔做出，再依序於Unity中執行出來。從裝置按鍵控制、Button選擇動畫與執行，到各場景畫面連接等，做程式上的設計。
            </div>
        </div>

        <div class="title">>> User Flow</div>
        <div class="userFlowWrap">
            <img src="../assets/projectTravel/UserFlow.png" class="userFlowImg" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* *{
    border: solid 1px yellow;
} */
.travel_wrap{
    max-width: 1440px;
    width: 1200px;
    margin-top: 100px;
}
.title{
    width: 100%;
    color: #E1D6DA;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
}
.subTitle{
    font-size: 0.5rem;
    font-weight: normal;
    margin-left: 25px;
}
.projectIntro{
    display: flex;
    margin-bottom: 100px;
}
.projectImgContainer{
    width: 80vw;
    height: 400px;
    max-width: 700px;
    position: relative;
}
.projectImg{
    width: 35vw;
    height: auto;
    max-width: 700px;
    border-radius: 5px;
    margin: 10px;
    /* box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.5); */
}
.projectDescribe{
    color: #E1D6DA;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    letter-spacing: 1px;
}
.yWord{
    color: #E9C694;
    font-weight: bold;
    display: inline-block; 
}
.ytBtn{
    text-decoration: none;
    color: #E1D6DA;
    /* font-size: 0.8rem; */
}
.ytBtn:hover{
    cursor: pointer;
    color: #D3816E;
}
.ytIcon{
    width: 30px;
    vertical-align: middle;
    padding: 0 10px 0 0;
}
.awardIcon{
    width: 100px;
    vertical-align: middle;
    padding: 0px 20px 0px 0px;
}

/* **********AR Design********* */
.arDesignWrap{
    display: flex;
    margin-bottom: 100px;
}
.arDescribe{
    color: #E1D6DA;
    font-size: 1rem;
    letter-spacing: 1px;
    width: 30vw;
    max-width: 600px;

}
.ModelImgContainer{
    margin-top: 100px;
}
.ModelImg{
    width: 25vw;
    max-width: 450px;
    border-radius: 15px;
    box-shadow: 5px 5px 20px 3px rgba(0,0,0,0.3); 
}
.arScriptImgContainer{
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
}
.arScriptImg{
    width: 50vw;
    max-width: 700px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px 3px rgba(0,0,0,0.3); 
}

/* ********UI Design********* */
.uiDesignWrap{
    display: flex;
    align-items: center;
    margin-bottom: 100px;
}
.uiImgContainer{
    padding: 10px;
}
.uiImg{
    width: 40vw;
    max-width: 700px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px 3px rgba(0,0,0,0.3);
}
.uiDescribe{
    color: #E1D6DA;
    font-size: 1rem;
    margin-left: 30px;
}

/* ********User Flow********* */
.userFlowWrap{
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}
.userFlowImg{
    width: 60vw;
    max-width: 900px;
}
</style>