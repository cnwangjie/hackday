<template>
  <div id="question1">
    <h1>选择您的通勤方式</h1>
    <div class="transport0">
      <div class="transport3">
    <div class="transport1">
      <img src="/static/image/car1.png"/>
      <h3>驾车</h3>

      <p>适合经常驾驶家庭汽车上下班的老司机们，成为特约快递员。</p>
      <v-btn :to="'/order'" color="primary">是</v-btn>
    </div>
    <div class="transport2">
      <img src="/static/image/subway.png"/>
      <h3>地铁/公交</h3>
      <p>适合乘坐地铁公交上下班通勤的职场人，成为特约快递员。</p>
      <v-btn :to="'/order'" color="primary">是</v-btn>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="scss">
h1{
  color:#0055A7;
  text-align: center;
  margin-top:100px;
  font-family:"Microsoft YaHei UI";
  font-size:40px;
}
h3{
  text-align:center;
  font-size:18px;
}
p{
  text-align:center;
  font-size:16px;

}
.transport0{
  margin-top:50px;
  width:100%;
}
.transport3{
  margin-left:auto;
  margin-right:auto;
  width:250px;
}
  .transport1{
    display:inline-block;
    width:100px;

  }
  .transport2{
    display:inline-block;
    width:100px;
    margin-left:40px;
  }
</style>
