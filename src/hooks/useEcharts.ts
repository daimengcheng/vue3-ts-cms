import * as echarts from "echarts"


function useEcharts(dom:HTMLElement){

  // 创建echarts实例
  const myChart = echarts.init(dom,"light",{renderer:"svg"})
  return myChart
}

export {useEcharts}