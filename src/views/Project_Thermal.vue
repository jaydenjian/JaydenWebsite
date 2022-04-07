<template>
    <div class="thermal_wrap">
        <div class="title">
            # VR熱觸覺遊戲 <br>
            <div class="subTitle">藉由聲音來強化在VR遊戲中，雙手對溫度的感知。</div>
        </div>
        <div class="projectIntro">
            <div class="projectImgContainer">
                <img src="../assets/projectThermal/GameScene.png" class="projectPic" alt="">
            </div>                        
            <div class="projectDescribe">
                <div class="yWord">作者：</div>簡均丞<br><br>
                <div class="yWord">負責項目：</div>VR遊戲開發、觸覺裝置設計、裝置設計<br>
                <br>
                這是一個透過聲音來強化人在虛擬實境中，對熱觸覺感知的遊戲。透過「聲音的漸增」與「溫度的提升」相呼應的特性，影響玩家在遊戲中對溫度的判斷。玩家必須在遊戲中正確調控雙手的溫度，才能達成平衡向上飛行。<br>
                <br>
                <a href="https://youtu.be/bDB4SQxeE-E" class="ytBtn" target="_blank">
                    <img src="../assets/projectThermal/youtube_icon.png" class="ytIcon" alt="">實驗影片
                </a>
                <br>  
                <br>
                <div class="ieeeBtn">
                    <img src="../assets/projectThermal/IEEE_icon.png" class="ieeeIcon" alt="">
                    <br> 2020 International Conference on Consumer Electronics-TW
                    <a href="https://ieeexplore.ieee.org/document/9258288" class="paperLinkBtn" target="_blank">Paper Link</a>
                </div> 
                <img src="../assets/projectThermal/UserScene.png"  class="userImg" alt="">               
            </div>            
            
        </div>
        <div class="systemArc">
            <div class="title">>> System Architecture<br>
                <div class="subTitle">分析系統的功能需求，繪製系統架構圖。</div>
            </div>
            <div class="systemArcPicContainer">
                <img src="../assets/projectThermal/sysArc.png" class="systemArcPic" alt="">
            </div>
            
        </div>
        <div class="deviceDesign">
            <div class="title">>> Device Design</div>
            <div class="deviceDesignPicContainer">
                <img src="../assets/projectThermal/DeviceDesign.png" class="deviceDesignPic" alt="">
            </div>            
        </div>
        <div class="circuitDesign">
            <div class="title">>> Circuit Design</div>
            <div class="circuitDesignPicContain">
                <img src="../assets/projectThermal/circuitDesign.png" class="circuitDesignPic" alt="">
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
.thermal_wrap{
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
    margin-bottom: 20px;
}
.subTitle{
    font-size: 0.5rem;
    font-weight: normal;
    margin-left: 25px;
}
.projectIntro{
    display: flex;
    /* flex-wrap: wrap; */
    
}
/* .projectImgContainer{
    display: flex;
    align-items: center;
} */
.projectPic{
    width: 40vw;
    height: auto;
    max-width: 700px;
    border-radius: 15px;
    margin: 10px;
    box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.5);
}
.projectDescribe{
    color: #E1D6DA;
    font-weight: bold;
    padding: 0px 10px 10px 20px;
    box-sizing: border-box;
    letter-spacing: 1px;
    /* line-height: 30px; */
    position: relative;
}
.yWord{
    color: #E9C694;
    font-weight: bold;
    display: inline-block;
}
.ytBtn{
    text-decoration: none;
    color: #E1D6DA;
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
.ieeeBtn{
    /* font-size: 0.5rem; */
    letter-spacing: 0;
    line-height: 35px;
}
.ieeeIcon{
    width: 120px;
    box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.3);
    vertical-align: middle;
    margin: 0 10px 0 0 ;
}
.paperLinkBtn{
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
    /* margin-left: 5px; */
}
.userImg{
    width: 200px;
    position: absolute;
    right: 0;
    margin-top: 20px;
    
}

.systemArc{
    margin-top: 150px;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.systemArcPic{
    width: 70vw;
    border-radius: 15px;
    box-shadow: 5px 5px 20px 3px rgba(0,0,0,0.3);   
}
.deviceDesign{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.deviceDesignPic{
    width: 70vw;
}
.circuitDesign{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
}
.circuitDesignPic{
    width: 70vw;
}
</style>