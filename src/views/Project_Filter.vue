<template>
    <div class="filter_wrap">
        <div class="title"># SparkAR
            <div class="subTitle">與插畫家、遊戲設計專才合作，設計符合需求之AR濾鏡遊戲。</div>
        </div>
        <div class="projectIntro">
            <div class="projectImgContainer">
                <img src="../assets/projectFilter/programWindow.png" class="projectImg" alt="" >
                <img src="../assets/projectFilter/filter_shakeHead.png" class="projectImg2" alt="">
            </div>
            <div class="projectDescribe">
                <div class="yWord">作者：</div>簡均丞、Mr.FF薯條先生、胡縉祥、張兆慶、扶于期<br><br>
                <div class="yWord">負責項目：</div>濾鏡功能開發、互動設計、聲音設計<br><br>
                這是一個於聖誕節上架的互動濾鏡。濾鏡互動包含眨眼、張嘴、搖頭、點頭、點擊畫面等。效果包含：噴禮物、噴星星、3D濾鏡面具(聖誕老人)、下雪、音效。<br><br>
                <a href="https://www.facebook.com/fbcameraeffects/tryit/614891582383849" class="FBLink" target="_blank">
                    <img src="../assets/projectFilter/FBLogo.png" class="FBLogo" alt="">
                    FB Filter Link
                </a>
                <a href="https://www.instagram.com/a/r/?effect_id=533431830852726" class="IGLink" target="_blank">
                    <img src="../assets/projectFilter/IGLogo.png" class="IGLogo" alt="">
                    IG Filter Link
                </a>
            </div>            
        </div>
        <div class="title">>> Design</div>
        <div class="designPart">
            <div class="wink">                
                <img src="../assets/projectFilter/filter_wink.png" class="phoneImg" alt="">                
                <div class="interactDescribe">
                    互動：眨眼<br>
                    <div class="sWord">眨眼動作，<br>隨機噴出愛心/星星。Checkbox會根據完成的動作打勾。</div>
                </div>
            </div>
            <div class="wink">                
                <img src="../assets/projectFilter/filter_nod.png" class="phoneImg" alt="">                
                <div class="interactDescribe">
                    互動：點頭<br>
                    <div class="sWord">點頭動作，<br>頭頂上的薑餅人、聖誕襪會懸掛在螢幕上飄蕩。</div>
                </div>
            </div>
            <div class="wink">                
                <img src="../assets/projectFilter/filter_mouth.png" class="phoneImg" alt="">                
                <div class="interactDescribe">
                    互動：張嘴<br>
                    <div class="sWord">張嘴動作，<br>會噴出各種禮物，以及合作插畫家的公仔。</div>
                </div>
            </div>
            <div class="wink">                
                <img src="../assets/projectFilter/filter_shakeHead.png" class="phoneImg" alt="">                
                <div class="interactDescribe">
                    互動：晃頭<br>
                    <div class="sWord">晃頭動作，<br>懸掛的薑餅人、聖誕襪/飄舞的雪，會隨著頭的方向擺動/飄。當所有動作皆完成，則跳出christmas字樣與logo。</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* *{
    border: solid 1px pink;
} */
.filter_wrap{
    max-width: 1440px;
    width: 1200px;
    margin-top: 100px;
}
.title{
    width: 100%;
    color: #E1D6DA;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 50px;
}
.subTitle{
    font-size: 0.5rem;
    font-weight: normal;
    margin-left: 25px;
}
.projectIntro{
    display: flex;    
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
    box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.5);
}
.projectImg2{
    width: 9vw;
    max-width: 150px;
    box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.5);
    position: absolute;
    right: 1vw;
    top: 100px;
    
}
.projectDescribe{
    color: #E1D6DA;
    font-weight: bold;
    padding: 0px 10px 10px 20px;
    box-sizing: border-box;
    letter-spacing: 1px;
}
.yWord{
    color: #E9C694;
    font-weight: bold;
    display: inline-block; 
}
.FBLink, .IGLink{
    text-decoration: none;
    color: #3C4E6F;
    background-color: #E1D6DA;
    font-size: 0.3rem;
    letter-spacing: 0;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.5);
    padding: 2px 10px;
    margin-right: 20px;
}

.FBLink:hover{
    cursor: pointer;
    box-shadow: none;
    margin-top: 1px;
    margin-left: 1px;
}
.IGLink:hover{
    cursor: pointer;
    box-shadow: none;
    margin-top: 1px;
    margin-left: 1px;
}
.FBLogo, .IGLogo{
    width: 15px;
    vertical-align: middle;
}
.designPart{
    display: flex;
    justify-content: space-between;
    padding: 0 20px 50px 20px;
}
.phoneImg{
    width: 15vw;
    max-width: 215px;
}
.interactDescribe{
    width: 15vw;
    max-width: 215px;
    color: #E1D6DA;
    font-weight: bold;
    margin-top: 30px;
}
.sWord{
    padding-top: 10px;
    font-size: 0.5rem;
    font-weight: normal;
}

</style>