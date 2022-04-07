<template>
    <div class="backdrop" @click.self="$emit('close');">        
        <div class="window">
            <div class="toplight">
                <div class="windowCtrl">
                    <div class="circle circle1"></div>
                    <div class="circle circle2"></div>
                    <div class="circle circle3"></div>
                </div>
            </div>
            <div class="content">
                <div class="title"># Contact</div>
                <div class="contactAvatar"></div>
                <div class="content_text">
                    <div class="block">
                        <img src="../assets/Email_icon.png" alt="" class="icon">
                        <p>weev333@gmail.com</p>
                    </div>
                    <div class="block">
                        <img src="../assets/Github_icon.png" alt="" class="icon">
                        <p>https://github.com/jaydenjian</p>
                    </div>
                    <div class="block">
                        <img src="../assets/Linkedin_icon.png" alt="" class="icon">
                        <p>https://www.linkedin.com/in/jyun-cheng-jian-114392187/</p>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    setup(){        
    },
}
</script>

<style scoped>
/* div{
    border: solid 1px black;
} */
.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 200;
    /* background-color: rgba(0,0,0,0.3); */
}
.window{
    width: 35vw;
    /* height: 35vh; */
    border-radius: 7px;
    box-shadow: 20px 30px 50px 20px rgba(0,0,0,0.3);
    background-color: #E1D6DA;
    overflow: hidden;
    margin: 100px auto;

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
    padding-left: 5px;
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
    position: relative;
    box-sizing: border-box;
    padding: 30px;
}
.title{
    font-size: 3rem;
    font-weight: bold;
    color: #D3816E;
    padding-bottom: 30px;
}
.contactAvatar{
    background-image: url(../assets/contactAvatar.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    box-shadow: 0px 5px 20px 3px rgba(0,0,0,0.3);;
    position: absolute;
    right: 50px;
    top: 30px;
}
.block{
    display: flex;
    /* justify-content: center; */
    align-content: center;
    padding: 10px;

}
.icon{
    width: auto;
    height: 3vh;
    margin-right: 10px;
}
p{
    padding: 0;
    margin: 0;
    font-size: 1rem;
}



</style>