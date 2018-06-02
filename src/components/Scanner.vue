<template>
<div>
  <v-dialog v-model="value" max-width="500px">
    <v-card>
      <QrcodeReader class="scanner" @decode="onDecode"></QrcodeReader>
    </v-card>
  </v-dialog>
</div>
</template>
<script>
import { QrcodeReader } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeReader,
  },
  props: ['value'],
  methods: {
    onDecode(content) {
      this.$emit('decoded', content)
    },
  },
}
</script>
<style lang="scss" scoped>
.scanner {
}
</style>

