<template>
<div>
    <v-navigation-drawer right app fixed v-model="drawer">
    <v-layout row>
      <v-flex xs6>
        <div class="avatar">
          <img src="/static/image/avatar.png"></img>
        </div>
      </v-flex>
      <v-flex xs6>
        <div class="text-xs-left tags">
          <v-chip label class="green">准时</v-chip>
          <v-chip label class="blue">阳光</v-chip>
          <v-chip label class="yellow">诚恳</v-chip>
          <v-chip label class="red">文明</v-chip>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs8 offset-xs1>
        <img class="star" src="/static/image/star.png"></img>
        <img class="star" src="/static/image/star.png"></img>
        <img class="star" src="/static/image/star.png"></img>
        <img class="star" src="/static/image/star.png"></img>
        <img class="star" src="/static/image/starb.png"></img>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs8 offset-xs1>
        <v-layout row class="side-list">
          <v-flex xs2 offset-xs2>
            <img class="icon" src="/static/image/msg.png"></img>
          </v-flex>
          <v-flex xs8>
            <div class="text">新消息</div>
          </v-flex>
        </v-layout>
        <v-layout row class="side-list">
          <v-flex xs2 offset-xs2>
            <img class="icon" src="/static/image/point.png"></img>
          </v-flex>
          <v-flex xs8>
            <div class="text"><router-link :to="'/community'">社区</router-link></div>
          </v-flex>
        </v-layout>
        <v-layout row class="side-list">
          <v-flex xs2 offset-xs2>
            <img class="icon" src="/static/image/credit.png"></img>
          </v-flex>
          <v-flex xs8>
            <div class="text">积分</div>
          </v-flex>
        </v-layout>
        <v-layout row class="side-list">
          <v-flex xs2 offset-xs2>
            <img class="icon" src="/static/image/list.png"></img>
          </v-flex>
          <v-flex xs8>
            <div class="text"><router-link :to="'/orderCenter'">我的订单</router-link></div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <img class="bottom-image" src="/static/image/logo2.png"></img>
  </v-navigation-drawer>
  <v-toolbar>
    <img class="logo" src="/static/image/logo.png"></img>

    <v-spacer></v-spacer>
    <!-- <v-btn icon @click="scanner = true">
      <v-icon>aspect_ratio</v-icon>
    </v-btn> -->
    <v-btn icon @click="drawer = true">
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>

</div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    }
  }
}
</script>
<style lang="scss" scoped>
.logo {
  height: 40px;
  width: 40px;
}
.tags {
  margin: 80px 0 0;
}
.avatar {
  margin: 54px 0 32px 20px;
  width: 100px;
  height: 100px;
  background: gray;
  border-radius: 50px;
}
.bottom-image {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100px;
  width: 100px;
}
.star {
  width: 15px;
  height: 15px;
  margin: 8px;
}
.side-list {
  margin: 50px 0;
  .icon {
    width: 15px;
    height: 15px;
  }
  .text {
    border-bottom: solid 1px black;
    padding: 0 0 0 40px;
    a {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
