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
    {{ isLogin ? '登录' : '注册' }}
  </h1>
  <v-container fluid class="container1">
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
          label="账号"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="密码"
          single-line
          type="password"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
  <v-btn v-if="isLogin" color="theme-blue" class="btn2" :to="'/register'">注册</v-btn>
  <v-btn v-if="isLogin" color="theme-blue" class="btn2" :to="'/order'">登录</v-btn>
  <v-btn v-if="!isLogin" color="theme-blue" class="btn2" :to="'/selectPostion'">下一步</v-btn>
</div>
</template>
<script>
export default {
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  }
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

