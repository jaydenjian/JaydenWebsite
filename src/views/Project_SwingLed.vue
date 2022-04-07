<template>
    <div class="swingLed_wrap">
        <div class="title"># 裝置藝術-搖擺星火
            <div class="subTitle">與燈光公司合作之裝置藝術作品。</div>
        </div>
        <div class="projectIntro">
            <div class="projectImgContainer">
                <img src="../assets/projectSwingLed/LightScene.jpg" class="projectImg" alt="">
                <img src="../assets/projectSwingLed/swingDevice.png" class="deviceImg" alt="">
            </div>
            <div class="projectDescribe">
                <div class="yWord">作者：</div>簡均丞、胡縉祥<br>
                <div class="yWord">負責項目：</div>馬達控制程式、硬體設計、電路設計與Layout<br>
                <br><br>
                這是與燈光公司合作之裝置藝術作品。透過調整步進馬達搖擺的幅度、緩進緩停，來製造燈光在黑夜中閃爍的效果。其中自己設計了PCB電路板，使裝置體積更小，更容易設置，且具有防水之功用。此作品於2020年屏東燈節展出。<br>
                <br><br>
                <div class="post">
                    花現鼠光，2020勝利星村燈節 --
                    <div class="postImgContainer">
                        <img src="../assets/projectSwingLed/Post.png" class="postImg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="title">>> Device Design</div>
        <div class="deviceDesign">
            <img src="../assets/projectSwingLed/DeviceDesign.png" class="deviceDesignImg" alt="">
        </div>

        <div class="title">>> Programming & PCB Layout</div>
        <div class="pcbDesign">
            <div class="pcbDesignImg">
                <img src="../assets/projectSwingLed/Layout.png"  class="pcbLayout" alt="">
                <img src="../assets/projectSwingLed/specification.png" class="pcbSpec" alt="">
            </div>
            <div class="pcbDescribe">
                先使用麵包板接線測試馬達控制電路的可行性，再透過Arduino IDE 進行程式設計，最後再使用Kicad將電路簡化至晶片板上。
                <div class="pcbImg">
                    <img src="../assets/projectSwingLed/circuit.png" class="circuitBoard" alt="">
                </div>
            </div>
        </div>
        
        <div class="title">>> Demo</div>
        <div class="demo">
            <div class="demoImgContainer1">
                <img src="../assets/projectSwingLed/LightScene2.jpg" class="demoImg1" alt="">
            </div>
            <div class="demoImgContainer2">
                <img src="../assets/projectSwingLed/LightScene3.jpg" class="demoImg2" alt="">
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
    border: solid 1px greenyellow;
} */
.swingLed_wrap{
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
    width: 120vw;
    height: 400px;    
    padding: 10px;
    position: relative;

}
.projectImg{
    width: 35vw;
    max-width: 500px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px 3px rgba(0,0,0,0.3); 

}
.deviceImg{
    width: 15vw;
    max-width: 200px;
    position: absolute;
    right: 0vw;
    top: 190px;
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
.post{
    display: flex;
    font-weight: normal;
}
.postImg{
    width: 10vw;
    border-radius: 2px;
    box-shadow: 5px 5px 20px 3px rgba(0,0,0,0.3); 
    margin-left: 30px;
}

/* ---------Device Design------------ */
.deviceDesign{
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}
.deviceDesignImg{
    width: 80vw;
    max-width: 1200px;
}

/* ---------Programming & PCB Layout------------ */
.pcbDesign{
    display: flex;
    margin-bottom: 100px;
    
}
.pcbDesignImg{
    position: relative;
    width: 120vw;
    max-width: 750px;
}
.pcbLayout{
    width: 40vw;
    max-width: 600px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px 3px rgba(0,0,0,0.3); 
}
.pcbSpec{
    width: 30vw;
    max-width: 450px;
    opacity: 0.7;
    z-index: -1;
    position: absolute;
    right: 0px;
    top: 180px;
}
.pcbDescribe{
    color: #E1D6DA;
    font-weight: bold;
    font-size: 1rem;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    letter-spacing: 1px;
    position: relative;
}
.pcbImg{
    display:flex;
    justify-content: center;
    padding-top: 150px;
}
.circuitBoard{
    width: 20vw;
    max-width: 300px;
}

/* -------------DEMO----------------- */
.demo{
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
}

.demoImg1{
    width: 40vw;
    max-width: 600px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.3);
}

.demoImg2{
    width: 30vw;
    max-width: 450px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.3);
    margin-top: 100px;
}
</style>