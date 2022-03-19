<template>
  <div class="dashboard">
    <el-card>
      <!-- 顶部数据面板 -->
      <el-row :gutter="6">
        <el-col :span="6" v-for="panelItem in panelList" :key="panelItem.title">
          <StaticPanel :panelData="panelItem" />
        </el-col>
      </el-row>

      <!-- 表格部分 -->
      <el-row :gutter="40" justify="space-between" align="middle">
        <el-col :span="8">
          <PieChart :pieData="pieData!" />
        </el-col>
        <el-col :span="8">
          <LineChart :lineData="lineData" />
        </el-col>
        <el-col :span="8">
          <RoseChart :roseData="roseData" />
        </el-col>
        <el-col :span="10">
          <BarChart :barData="barData" />
        </el-col>
        <el-col :span="14">
          <MapChart :mapData="mapData" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useStore, mapState } from "vuex"
import StaticPanel from "@/components/static-panel.vue"
import PieChart from "@/components/echarts/pie-chart.vue"
import LineChart from "@/components/echarts/line-chart.vue"
import RoseChart from "@/components/echarts/rose-chart.vue"
import BarChart from "@/components/echarts/bar-chart.vue"
import MapChart from "@/components/echarts/map-chart.vue"
const store = useStore()

store.dispatch("analysisModule/getCategoryGoodsDataAction")

// 获取顶部面板数据
const panelList = computed(() => store.state.analysisModule.goodsAmountList)

// 饼图数据
const pieData = computed<any[]>(() => {
  const newData: any[] = []
  store.state.analysisModule.categoryGoodsCount!.map((item: any) => {
    if (!(item.goodsCount === 0)) {
      newData.push({ name: item.name, value: item.goodsCount })
    }
  })
  return newData
})
// 折线图数据
const lineData = computed(() => {
  const value: any = []
  const name: any = []
  store.state.analysisModule.categoryGoodsSale!.map((item: any) => {
    if (item.goodsCount) {
      value.push(item.goodsCount)
      name.push(item.name)
    }
  })
  return [value, name]
})
// 玫瑰图数据
const roseData = computed(() => {
  return store.state.analysisModule.categoryGoodsFavor!.map((item: any) => {
    if (item.goodsFavor) {
      return { name: item.name, value: item.goodsFavor }
    }
  })
})
// 柱状图数据
const barData = computed(() => {
  const nameData: any = []
  const valueData: any = []
  store.state.analysisModule.goodsCountTop!.map((item: any) => {
    nameData.push(item.name)
    valueData.push(item.saleCount)
  })
  return {
    name: nameData,
    value: valueData,
  }
})
// 地图数据
const mapData = computed(() => {
  return store.state.analysisModule.citySaleCount!.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
console.log(mapData.value)
</script>

<style scoped lang="less">
.el-col {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
