<template>
<div>
  <v-navigation-drawer right app fixed v-model="drawer">
    <v-layout row>
      <v-flex xs6>
        <div class="avatar"></div>
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
            <div class="text">信用分</div>
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
            <div class="text">我的订单</div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <img class="bottom-image" src="/static/image/logo2.png"></img>
  </v-navigation-drawer>
  <v-toolbar>
    <img class="logo" src="/static/image/logo.png"></img>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>在线客服</v-btn>
    </v-toolbar-items>
    <v-btn icon @click="drawer = true">
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
  <v-list subheader>
    <v-list-tile @click="">
      <v-list-tile-content>
        已接受： {{ 1 }}
      </v-list-tile-content>
    </v-list-tile>
    <v-subheader>推荐</v-subheader>
    <v-layout row>
      <v-flex sm12>
        <v-card class="card">
          <div class="card-content">
            <div>
              地址： {{ '武汉xxxxxx' }}
            </div>
            <div>
              质量： {{ 1 }}kg  体积： {{ 2 }}立方米
            </div>
            <div>
              <v-btn small color="blue">接受</v-btn>
              <v-btn small color="red">换一个</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row>
      <v-flex sm6 offset-sm6 offset-xs4>
        <v-btn small color="blue">重量</v-btn>
        <v-btn small color="yellow">体积</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm12>
        <v-card class="card">
          <div class="card-content">
            <div>
              地址： {{ '武汉xxxxxx' }}
            </div>
            <div>
              质量： {{ 1 }}kg  体积： {{ 2 }}立方米
            </div>
            <div>
              <v-btn color="blue">接受</v-btn>
              <v-btn color="red">换一个</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm12>
        <v-card class="card">
          <div class="card-content">
            <div>
              地址： {{ '武汉xxxxxx' }}
            </div>
            <div>
              质量： {{ 1 }}kg  体积： {{ 2 }}立方米
            </div>
            <div>
              <v-btn color="blue">接受</v-btn>
              <v-btn color="red">换一个</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-list>
</div>
</template>
<script>
export default {
  data() {
    return {
      support: {},
      drawer: false,
    }
  },
  created() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.logo {
  height: 40px;
  width: 40px;
}
.card {
  background: #0055A7;
  margin: 0 20px 25px;
  .card-content {
    background: #fff;
    margin-left: 20%;
    padding: 38px 0 20px 17px;
  }
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
  }
}
.btn {
  .btn__content {
    padding: 0;
  }
}
</style>
