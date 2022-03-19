<template>
  <div
    class="bar-chart"
    ref="barChartRef"
    style="width: 450px; height: 450px"
  ></div>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
  defineProps,
  withDefaults,
  onMounted,
  watchEffect,
} from "vue"
import { useEcharts } from "@/hooks/useEcharts"
import * as echarts from "echarts"
const props = withDefaults(
  defineProps<{
    barData?: { name: any; value: any }
  }>(),
  {
    barData: () => ({ name: {}, value: {} }),
  }
)

const barChartRef = ref<HTMLElement>()

let yMax = Math.max(props.barData.value)
let dataShadow = []
for (let i = 0; i < props.barData.value.length; i++) {
  dataShadow.push(yMax)
}

const option = computed(() => {
  return {
    title: {
      text: "销量前十的商品数量",
      subtext: "特性示例：渐变色 阴影 点击缩放",
      left: "center",
    },
    xAxis: {
      data: [...props.barData.name],
      axisLabel: {
        inside: true,
        color: "#fff",
        verticalAlign: "bottom",
        height: 200,
        rotate: 90,
      },
      // 是否显示横坐标刻度
      axisTick: {
        show: false,
      },
      // 是否显示横坐标
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#999",
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: [...props.barData.value],
      },
    ],
  }
})

onMounted(() => {
  const myChart = useEcharts(barChartRef.value!)

  watchEffect(() => {
    console.log()
    myChart.setOption(option.value!)
    window.addEventListener("resize", () => {
      myChart.resize()
    })
  })
})
</script>

<style scoped lang="less"></style>
