<template>
  <div>
    <div id="guide0">
      <div class="guide1">
      <div class="credit">
        <img src="/static/image/credit2.png"
        height="35px"
        width="35px"
        />
        <br>信用分<br>100
      </div>
      <div class="score">
         <img src="/static/image/score.png"
         height="40px"
         width="40px"/>
        <br>积分<br>32590
      </div>
      <div class="comment0">
         <img src="/static/image/Fill 121.png"
         height="35px"
         width="35px"/>
        <br>好评数<br>550
      </div>
      </div>
    </div>
    <h1>
      可以兑换的服务：
    </h1>
    <div class="card">
    <img src="/static/image/Group 2.png" class="ikea" height="150px" width="320px"/>
    <img src="/static/image/Group.png" class="muji" height="150px" width="320px"/>
    <img src="/static/image/Group 3.png" class="grap" height="150px" width="320px"/>
    <img src="/static/image/Rectangle 5.png" class="kika" height="150px" width="320px"/>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="scss">
     #guide0{
       background-color:#8c8c8c;
       height:110px;
       width:100%;
     }
     .credit{
       text-align:center;
       color:white;
       font-size:12px;
       display:inline-block;
       margin-left:40px;
       margin-top:20px;
     }
     .score{
       text-align:center;
       color:white;
       font-size:12px;
       display: inline-block;
       margin-left:50px;
     }
     .comment0{
       text-align:center;
       color:white;
       font-size:12px;
       display:inline-block;
       margin-left:56px;

     }
     h1{
       margin: 20px;
       color:#0055a7;
       font-size:20px;
     }

     .muji{
       margin-top:-90px;
       margin-left:auto;
       margin-right:auto;
     }
     .grap{
       margin-top:-90px;
       margin-left:auto;
       margin-right:auto;

     }
     .kika{
       margin-left:auto;
       margin-right:auto;
       margin-top:-90px;
     }
     .card{
       width:100%;
     }
</style>
