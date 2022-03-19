<template>
  <div
    class="line-chart"
    ref="lineRef"
    style="width: 450px; height: 450px"
  ></div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  ref,
  defineProps,
  withDefaults,
  watch,
  watchEffect,
  computed,
} from "vue"
import { useEcharts } from "@/hooks/useEcharts"

const props = withDefaults(
  defineProps<{
    lineData: any[]
  }>(),
  {
    lineData: () => [],
  }
)

const lineRef = ref<HTMLElement>()
const option = computed(() => {
  return {
    title: {
      text: "商品销售总量",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "30",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [...props.lineData[1]],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "saleCount",
        type: "line",
        stack: "Total",
        data: [...props.lineData[0]],
        areaStyle: {},
      },
    ],
  }
})
onMounted(() => {
  const myChart = useEcharts(lineRef.value!)
  watchEffect(() => {
    myChart.setOption(option.value)
    window.addEventListener("resize", () => {
      myChart.resize()
    })
  })
})
</script>

<style scoped lang="less"></style>
