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
    <!-- <v-btn icon @click="scanner = true">
      <v-icon>aspect_ratio</v-icon>
    </v-btn> -->
    <v-btn icon @click="drawer = true">
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
  <v-list subheader>
    <v-list-tile @click="switchAccepted">
      <v-list-tile-content>
        {{ !accepted ? '已接受： ' + acceptedSum : '返回' }}
      </v-list-tile-content>
    </v-list-tile>
    <v-subheader v-if="supported && !accepted && !supported.accepted">推荐</v-subheader>
    <v-layout row v-if="supported && !accepted && !supported.accepted">
      <v-flex sm12>
        <v-card class="order-card">
          <div class="card-content">
            <div>
              地址： {{ supported.address }}
            </div>
            <div>
              质量： {{ supported.weight }}kg  体积： {{ supported.size }}立方米
            </div>
            <div>
              <v-btn small color="blue" @click="accept(supported)">接受</v-btn>
              <!-- <v-btn small color="red">换一个</v-btn> -->
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider v-if="supported && !accepted && !supported.accepted"></v-divider>
    <v-layout row v-if="!accepted">
      <v-flex sm6 offset-sm6 offset-xs4>
        <v-btn small flat @click="sort('weight')">重量</v-btn>
        <v-btn small flat @click="sort('size')">体积</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-if="!accepted && index !== 0" row v-for="(order, index) in unacceptedOrders" :key="index">
      <v-flex sm12>
        <v-card class="order-card">
          <div class="card-content">
            <div>
              地址： {{ order.address }}
            </div>
            <div>
              质量： {{ order.weight }}kg  体积： {{ order.size }}立方米
            </div>
            <div>
              <v-btn color="blue" @click="accept(order)">接受</v-btn>
              <!-- <v-btn color="red">换一个</v-btn> -->
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-if="accepted" row v-for="(order, index) in acceptedOrders" :key="index">
      <v-flex sm12>
        <v-card class="order-card">
          <div class="card-content">
            <div>
              地址： {{ order.address }}
            </div>
            <div>
              联系方式： {{ order.tel }}
            </div>
            <div>
              质量： {{ order.weight }}kg  体积： {{ order.size }}立方米
            </div>
            <div>
              <v-btn v-if="order.gain" color="green" @click="openComplete(index)">完成</v-btn>
              <v-btn v-else color="blue" @click="scan(index)">取货</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-list>

  <v-dialog v-model="completeModal" max-width="500px">
    <v-card>
      <v-card-title>
        完成
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="验证码"
          type="number"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="completeModal = false">关闭</v-btn>
        <v-btn color="green" @click.stop="completeOrder(completingIndex)">完成</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-snackbar
    :timeout="2000"
    bottom
    v-model="snackbar"
  >
    {{ snackbarMsg }}
  </v-snackbar>
  <v-dialog v-model="scanner" max-width="500px">
    <v-card>
      <QrcodeReader @decode="decoded"></QrcodeReader>
    </v-card>
  </v-dialog>

</div>
</template>
<script>
import { getOrders, acceptOrder } from '@/service/getData'
import { mapState, mapMutations } from 'vuex'
import { QrcodeReader } from 'vue-qrcode-reader'

export default {
  data() {
    return {
      drawer: false,
      supported: null,
      sortWay: {
        weight: false,
        size: false,
      },
      completingIndex: NaN,
      completeModal: false,
      snackbar: false,
      snackbarMsg: '成功',
      scanner: false,
      scanningIndex: NaN,
    }
  },
  components: {
    QrcodeReader,
  },
  computed: {
    ...mapState(['orders']),
    acceptedOrders() {
      return this.orders.filter(i => i.accepted)
    },
    unacceptedOrders() {
      return this.orders.filter(i => !i.accepted)
    },
    acceptedSum() {
      return this.acceptedOrders.length
    },
    accepted() {
      return this.$route.name === 'accpetedOrder'
    },
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['addOrder']),
    init() {
      if (this.orders.length !== 0) return

      getOrders().then(data => {
        data.map(order => {
          this.addOrder(order)
        })
        this.orders.map(order => {
          if (!this.supported && !order.accepted)
            this.supported = order
        })
      })
    },
    sort(dim) {
      this.sortWay[dim] = !this.sortWay[dim]
      this.orders.sort((a, b) => this.sortWay[dim] ? a[dim] < b[dim] : a[dim] > b[dim])
    },
    switchAccepted() {
      if (this.accepted) this.$router.replace('/order')
      else this.$router.replace('/order/accepted')
    },
    accept(order) {
      order.accepted = true

      acceptOrder(order)
    },
    openComplete(index) {
      this.completeModal = true
      this.completingIndex = index
    },
    completeOrder(index) {
      this.snackbar = true
      this.completeModal = false
      this.orders.splice(index, 1)
    },
    scan(index) {
      this.scanningIndex = index
      this.scanner = true
    },
    decoded(content) {
      this.snackbar = true
      this.acceptedOrders[this.scanningIndex].gain = true
      this.scanner = false
    },
  }
}
</script>
<style lang="scss" scoped>
.logo {
  height: 40px;
  width: 40px;
}
.order-card {
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
.card {
  transition: 2s;
  box-shadow: 1px 1px 5px #8c8c8c;
}
</style>
