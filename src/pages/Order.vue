<template>
<div>
  <v-list subheader>
    <toolbar></toolbar>
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
              <v-btn class="act-btn" small color="theme-blue" @click="accept(supported)">接受</v-btn>
              <!-- <v-btn small color="red">换一个</v-btn> -->
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider v-if="supported && !accepted && !supported.accepted"></v-divider>
    <v-layout row v-if="!accepted">
      <v-flex sm12>
        <v-btn class="act-btn" small flat @click="sort('weight')">重量</v-btn>
        <v-btn class="act-btn" small flat @click="sort('size')">体积</v-btn>
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
              <v-btn class="act-btn" color="theme-blue" @click="accept(order)">接受</v-btn>
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
              <v-btn class="act-btn" v-if="order.gain" color="theme-blue" @click="openComplete(index)">完成</v-btn>
              <v-btn class="act-btn" v-else color="theme-blue" @click="scan(index)">取货</v-btn>
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
        <v-btn class="act-btn" color="theme-blue" flat @click.stop="completeModal = false">关闭</v-btn>
        <v-btn class="act-btn" color="theme-blue" @click.stop="completeOrder(completingIndex)">完成</v-btn>
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
  <v-dialog v-model="scanner" max-width="500px" max-height="500px">
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
import Toolbar from '@/components/Toolbar'

export default {
  data() {
    return {
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
    Toolbar,
  },
  watch: {
    scanner(dst) {
      if (!dst) this.decoded()
    }
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
<style lang="scss">
.btn {
  .btn__content {
    padding: 0;
  }
}
.card {
  transition: 2s;
  box-shadow: 1px 1px 5px #8c8c8c;
}
.order-card {
  background: #0055A7 !important;
  margin: 0 20px 25px;
  .card-content {
    background: #fff;
    margin-left: 20%;
    padding: 20px 0 70px 17px;
  }
}
.act-btn {
  float: right;
  margin: 20px 40px 12px 0;
}
</style>
