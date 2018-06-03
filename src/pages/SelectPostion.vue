<template>
<div>
  <v-layout row>
    <v-flex sm12>
      <v-card>
        <v-subheader>选择通勤信息</v-subheader>
        <v-divider></v-divider>
        <baidu-map class="bm-view" :center="center" :zoom="17" :ak="bdak">
          <bm-marker :key="index" v-for="(location, index) in locations" :position="{lng: location.pos[0], lat: location.pos[1]}" :dragging="true" :animation="location.name === startLocName || location.name === endLocName ? 'BMAP_ANIMATION_BOUNCE' : ''" @click="select">
          </bm-marker>
        </baidu-map>
        <v-card-title primary-title>
          <v-layout row>
            <v-flex sm12>
              <v-select
                :items="handledLocs"
                v-model="startLocName"
                label="公司地点"
                autocomplete
                @change="changed"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex sm12>
              <v-select
                :items="handledLocs"
                v-model="endLocName"
                label="小区地点"
                autocomplete
                @change="changed"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <v-layout row>
            <v-flex sm12>
              <v-btn :to="'/question'" color="theme-blue">下一步</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
import { BaiduMap, BmMarker } from 'vue-baidu-map'
import { bdak } from '@/service/config'
import { getLocations } from '@/service/getData'

export default {
  data() {
    return {
      center: {lng: 114.437307, lat: 30.51417},
      locations: [],
      handledLocs: [],
      searchText: '',
      startLocName: '',
      startLoc: NaN,
      endLocName: '',
      endLoc: NaN,
      bdak,
    }
  },
  components: {
    BaiduMap,
    BmMarker,
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      getLocations().then(data => {
        this.locations = data
        this.handledLocs = data.map(i => i.name)
      })
    },
    select(type, target) {
    },
    changed(locName) {
      const loc = this.locations.find(i => i.name === locName)
      this.center = {lng: loc.pos[0], lat: loc.pos[1]}
    },
  }
}
</script>
<style lang="scss">
.bm-view {
  width: 100%;
  height: 400px;
}
</style>
