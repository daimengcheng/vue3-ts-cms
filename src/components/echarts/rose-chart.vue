<template>
  <div
    class="rose-chart"
    ref="roseChartRef"
    style="width: 450px; height: 450px"
  ></div>
</template>

<script lang="ts" setup>
import {
  withDefaults,
  defineProps,
  onMounted,
  ref,
  watchEffect,
  computed,
} from "vue"
import { useEcharts } from "@/hooks/useEcharts"
const props = withDefaults(
  defineProps<{
    roseData: []
  }>(),
  {
    roseData: () => [],
  }
)
const roseChartRef = ref<HTMLElement>()
const option = computed(() => {
  return {
    title: {
      text: "商品收藏数量",
      left: "center",
    },
    legend: {
      top: "bottom",
    },
    tooltip: {
      trigger: "item",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "hahh",
        type: "pie",
        radius: [20, 150],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: [...props.roseData],
      },
    ],
  }
})

onMounted(() => {
  const myChart = useEcharts(roseChartRef.value!)
  watchEffect(() => {
    myChart.setOption(option.value)
  })
})
</script>

<style scoped lang="less"></style>
