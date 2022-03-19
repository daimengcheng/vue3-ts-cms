<template>
  <div
    class="map-chart"
    ref="mapChartRef"
    style="width: 450px; height: 450px"
  ></div>
</template>

<script lang="ts" setup>
import { useEcharts } from "@/hooks/useEcharts"
import { convertData } from "@/utils/convert-data"
import {
  onMounted,
  ref,
  withDefaults,
  defineProps,
  computed,
  watchEffect,
} from "vue"
import { chinaJSON } from "./data/china"
import * as echarts from "echarts"

const props = withDefaults(
  defineProps<{
    mapData: []
  }>(),
  {
    mapData: () => [],
  }
)
const mapChartRef = ref<HTMLElement>()
const chinaData: any = chinaJSON
echarts.registerMap("china", chinaData)
const option = computed(() => {
  return {
    title: {
      text: "全国地图",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return params.name + " : " + params.value[2]
      },
    },
    series: [
      {
        name: "销量",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
          },
        },
      },
    ],
    label: {
      normal: {
        show: true,
        color: "#EEE",
        position: "inside",
        fontSize: 14,
      },
    },
    itemStyle: {
      normal: {
        borderColor: "rgba(138, 140, 238, 0.2)",
      },
      emphasis: {
        areaColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        borderWidth: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
    visualMap: {
      min: 0,
      max: 10,
      text: ["High", "Low"],
      seriesIndex: [1], //必须设置此项,否则会覆盖标注点颜色
      realtime: true,
      calculable: true,
      inRange: {
        color: ["lightskyblue", "yellow", "orangered"],
      },
      textStyle: {
        color: "lime",
      },
    },
    geo: {
      type: "map",
      map: "china",
      roam: "scale",
      itemStyle: {
        color: "rgba(138, 140, 238,.2)",
      },
      emphasis: {
        focus: "self",
      },
    },
  }
})

onMounted(() => {
  const myChart = useEcharts(mapChartRef.value!)
  watchEffect(() => {
    myChart.setOption(option.value!)
  })
})
</script>

<style scoped lang="less"></style>
