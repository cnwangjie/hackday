<template>
  <div>
    <toolbar></toolbar>
    <div id="guide0">
      <v-layout row>
        <v-flex xs4>
          <div class="top-box">
            <img src="/static/image/credit2.png">
            <div>信用分</div>
            <div>100</div>
          </div>
        </v-flex>
        <v-flex xs4>
          <div class="top-box">
            <img src="/static/image/score.png">
            <div>积分</div>
            <div>32590</div>
          </div>
        </v-flex>
        <v-flex xs4>
          <div class="top-box">
            <img src="/static/image/Fill 121.png">
            <div>好评数</div><div>550</div>
          </div>
        </v-flex>
      </v-layout>
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
import Toolbar from '@/components/Toolbar'
export default{
  components: {
    Toolbar,
  },
}
</script>
<style lang="scss">
#guide0{
  background-color:#8c8c8c;
}
.top-box {
  color: #fff;
  margin: 20px 0 30px;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
  }
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
.card {
  width: 100%;
  text-align: center;
}
</style>
