<template>
  <div
    style="max-width: 100%; margin: auto; margin-top: 0%;"
    class="grey lighten-3"
  >
    <v-toolbar color="white">
      <v-toolbar-title class="cardtitle">订单中心</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

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
              <div class="headline">订单号：0309221 8372</div>
              <div class="out">出发地</div>
              <div class="picture2">
                <img src="/static/image/Fill 117.png" alt="订单号" />
              </div>
              <div class="end">结束地</div>
              <div class="picture3">
                <img src="/static/image/scr-20120604155622-1995442480.png" alt="订单号" />
              </div>
              <v-card-actions>
                <v-layout align-center>
                  <v-flex xs6 offset-xs6>
                    <div>
                      <v-btn normal color="primary">查看评价</v-btn>
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
    export default {
        name: "order-center"
    }
</script>

<style lang="scss" scoped>
  .cardtitle{
    color:black;
    width: 200%;
    text-align: center;
    font-weight: bolder;
    font-size: x-large;
  }
  .cardword {
    color: black;
    margin: 10px 0;
  }
  .picture1{
    height: 43px;
    width: 33px;
    margin-left: 80%;
    margin-top: -25px;
  }
  .out{
    float: left;
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    margin-left: 3%;
  }
  .picture2{
    float: left;
    margin-left: 15px;
    height: 20px;
    width: 50px;
    margin-top: 5px;
  }
  .end{
    float: left;
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
  }
  .headline{
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    clear:both;
    margin-left: 3%;
    margin-top: -25px;
  }
  .picture3{
    margin-left: 5%;
    height: 45px;
    width: 50px;
    margin-top: 35px;
  }
  .undernum{
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    margin-left: 2%;
  }

</style>
