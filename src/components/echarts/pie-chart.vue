<template>
  <div
    class="pie-chart"
    ref="pieCharts"
    style="width: 400px; height: 450px"
  ></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps, watch, computed, watchEffect } from "vue"
import { useEcharts } from "@/hooks/useEcharts"
const props = defineProps<{
  pieData: any[]
}>()

const pieCharts = ref<HTMLElement>()

const option = computed(() => {
  return {
    title: {
      text: "分类商品的数量",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
      top: "bottom",
    },
    series: [
      {
        name: "分类商品的个数",
        type: "pie",
        radius: "70%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }
})
onMounted(() => {
  const myChart = useEcharts(pieCharts.value!)
  watchEffect(() => {
    myChart.setOption(option.value)
    window.addEventListener("resize", () => {
      myChart.resize()
    })
  })
})
</script>

<style scoped lang="less"></style>
