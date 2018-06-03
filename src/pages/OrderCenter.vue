<template>
  <div
    style="max-width: 100%; margin: auto; margin-top: 0%;"
    class="grey lighten-3"
  >
    <toolbar></toolbar>
    <v-card>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 sm10 offset-sm1 v-for="key in (1, 10)" :key="key">
            <v-card color="white" class="cardword" style="height: 230px">
              <v-card-title primary-title>
                <div class="picture1">
                  <img src="/static/image/Fill 198 Copy 2.png" alt="订单号" />
                </div>
              </v-card-title>
              <div class="orderno">订单号：0309221 8372</div>
              <div class="locline">
                <div class="out">出发地</div>
                <div class="picture2">
                  <img src="/static/image/Fill 117.png" alt="订单号" />
                </div>
                <div class="end">结束地</div>
                <div class="picture3">
                  <img src="/static/image/scr-20120604155622-1995442480.png" alt="订单号" />
                </div>
              </div>
              <v-card-actions>
                <v-layout align-center>
                  <v-flex xs4 offset-xs8>
                    <div>
                      <v-btn normal color="theme-blue">查看评价</v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </v-card-actions>
              <div class="undernum">123 123 12345 1234 123</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>

</template>
<script>
import Toolbar from '@/components/Toolbar'

export default {
  name: "order-center",
  components: {
    Toolbar,
  },
}
</script>

<style lang="scss" scoped>
.cardtitle{
  color:black;
  width: 200%;
  text-align: center;
  font-weight: bolder;
}
.cardword {
  color: black;
  margin: 10px 0;
}
.picture1{
  img {
    height: 60px;
    width: 40px;
  }
  position: absolute;
  top: 0;
  right: 20px;
}
.out{
  float: left;
  font-family: "Microsoft YaHei UI";
  margin-left: 3%;
}
.picture2{
  float: left;
  margin-left: 15px;
  height: 10px;
  width: 50px;
  margin-top: 5px;
}
.end{
  float: left;
  font-family: "Microsoft YaHei UI";
}
.orderno {
  font-size: 140%;
  font-family: "Microsoft YaHei UI";
  padding: 0 0 0 20px;
}
.picture3{
  margin-left: 5%;
  height: 45px;
  width: 50px;
}
.undernum{
  font-family: "Microsoft YaHei UI";
  padding: 20px 40px;
}
.locline {
  padding: 0 0 0 40px;
}
</style>
