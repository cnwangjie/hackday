<template>
  <div id="community0">
    <toolbar></toolbar>
    <div class="tips">
      <v-chip label color="success" dark text-color="white">今天买了什么</v-chip>
      <v-chip label color="warning" dark text-color="white">心情如何</v-chip>
      <v-chip label color="info" dark text-color="white">是否遇到喜欢的人</v-chip>
      <v-chip label class="purple" dark text-color="white" >分享一个有趣的事情</v-chip>
      <v-chip label class="orange" dark text-color="white">又撸了谁家的猫</v-chip>
      <v-chip label class="red" dark text-color="white">儿童节有礼物吗</v-chip>
    </div>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="white--text">
              <v-card-title primary-title>
                <div class="Id1">
                <div class="touxiang"><img src="/static/image/Unknown.png"/></div>
                <div class="account">
                  <div>张小柚</div>
                <div>认证仙女  1分钟前</div>
                </div>
                </div>
                <div class="comments">
                  <p>没看过101 没看过王菊表演，但是欣赏过菊粉神级文案 听过菊歌 说过菊语 偷过表情包
                    也曾经因为菊式段子哈哈大笑 做人不能没有良心 这票 必须投。</p>
                </div>
                <div class="fav">
                  <img src="/static/image/favorite.png"/>
                  <img src="/static/image/comment.png" class="comment"/>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card class="white--text">
              <v-card-title primary-title>
                <div class="Id1">
                  <div class="touxiang"><img src="/static/image/cat.png"/></div>
                  <div class="account">
                    <div>王德发</div>
                    <div>认证特约快递员  15分钟前</div>
                  </div>
                </div>
                <div class="comments">
                  <p>今天上完了课拿到了前天买的画具 还去超市买了下周要用的东西和零食 晚上吃了千味涮
                   （为什么夏天我要吃这个 好热好热 但是好好吃</p>
                </div>
                <div class="fav">
                  <img src="/static/image/Fill 136.png"/>
                  <img src="/static/image/comment.png" class="comment"/>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card class="white--text">
              <v-card-title primary-title>
                <div class="Id1">
                  <div class="touxiang"><img src="/static/image/timg-1.png"/></div>
                  <div class="account">
                    <div>张发发</div>
                    <div>认证摸鱼  30分钟前</div>
                  </div>
                </div>
                <div class="comments">
                  <p>买了个一千多块那种非常时尚的镜框，今天去配镜片，还是全世界最薄的那种，有什么用！！
                  1000度的镜片再好看的镜框戴起来还是像个蠢货。</p>
                </div>
                <div class="fav">
                  <img src="/static/image/favorite.png"/>
                  <img src="/static/image/comment.png" class="comment"/>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <div class="comment2">
    <input type="text" value="  说点什么吧">
    <button class="btn1" color="#0055a7"><img src="/static/image/Fill 162.png" height="12px" /> 发布动态</button>
  </div>
  </div>
</template>
<script>
import Toolbar from '@/components/Toolbar'

export default{
  data() {
    return {
      drawer: false,
    }
  },
  components: {
    Toolbar,
  },
}
</script>
<style lang="scss" scoped>
#community0{
  width:100%;
}
.layer-1{
  background-color: white;
  border-style:outset;
  padding-top:4px;
  padding-left: 5px;
  padding-right:5px;
}
li {
  display:inline;
}
.logo-2 {
  width:30px;
  height:30px;
}
.fill-45 {
  height:25px;
  width: 25px;
  margin-left:230px;
}
.link1 {
  border:1px solid #0055A7;
  color:#0055A7;
  background-color: white;
  width:50px;
  height:40px;
  font-size: 18px;
}
.blue-circle{
  display:block;
  float:right;
  width:30px;
  height:30px;
  border-radius:30px;
  background-color: #0055A7;
}

.tips{
  margin: 4px;
}
.white--text{
  margin-left:auto;
  margin-right:auto;
}
.touxiang {
  width:25px;
  height:25px;
  display:inline-block;
}
.account {
  display:inline-block;
  margin-left:30px;
  color:#666;
}
p {
  color:black;
  font-size:20px;
}
.fav {
  position: absolute;
  right: 12px;
  bottom: 12px;
}
.comment {
  margin-left:20px;
}
input[type="text"] {
  margin-left:30px;
  height:40px;
  width:250px;
  border-radius:20px;
  background-color: #eee;
}
.btn1 {
  line-height: 40px;
  width:110px;
  margin-top:10px;
  margin-left:-35px;
  height:40px;
  border-radius:20px;
  background-color:#0055A7;
  color:white;
}
.comment2 {
  position:fixed;
  margin-left:auto;
  margin-right:auto;
  bottom:30px;
}
.comments {
  text-align: left;
  padding-bottom: 35px;
}
</style>
