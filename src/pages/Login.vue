<template>

<div id="login1">
  <div class="logo1">
    <img src="/static/image/logo.png"
         height="80px"
         width="80px"
         class="logo1"
         />
  </div>
<h1>
          选择您的登陆方式
</h1>
  <v-container fluid class="container1">
    <v-layout row>
      <v-flex xs8>
        <v-text-field class="filed1"
          name="input-1-3"
          label="输入手机号读取验证码"
        ></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-btn small class="btn1">获取</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  <div class="pictures">
  <router-link :to="'/selectPostion'">
    <img src="/static/image/qq.png"
       alt="QQ登陆"
       height="80px"
       width="80px"
  />
  </router-link>
    <router-link :to="'/selectPostion'">
    <img src="/static/image/weixin.png"
         alt="微信登陆"
         height="80px"
         width="80px"
         class="p2"
    />
    </router-link>
  </div>
  <v-btn color="info" class="btn2">下一步</v-btn>
</div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  #login1{
    margin-top:50px;
  }
  .logo1{
    margin-left:20px
  }
h1{
  margin-left:35px;
  margin-top:50px;
  color:#006;
  font-size:40px;
}
  .container1{
    text-align:center;
    margin-left:15px;
  }
.btn1{
  margin-top:16px;
}
.field1{
  margin-left:5px;
}
  .pictures{
    position:relative;
    margin-left:40px;
    top:-5px;
  }
  .p2{
    margin-left:20px;
  }
.btn2{
  margin-left:40px;
}
</style>

