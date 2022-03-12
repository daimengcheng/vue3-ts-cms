import {ref} from 'vue'

import PageTable from "@/components/page-table.vue"

const usePageSearch = ()=>{

  const pageTableRef = ref<InstanceType<typeof PageTable>>()

  // 处理点击重置按钮的函数
  const handleResetChange = ()=>{
    pageTableRef.value.getDataList()
  }

  // 处理点击搜索按钮的函数
  const handleSearchChange = (value:any)=>{
    pageTableRef.value.getDataList(value)
  }

  return {pageTableRef,handleResetChange,handleSearchChange}
}

export {usePageSearch}