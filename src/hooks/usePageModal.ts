import {  ref } from 'vue'
import PageModal from '@/components/page-modal.vue'
import store from '@/store'
function usePageModal(newCallback?:any,editCallback?:any){

  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  // 处理新增按钮的函数
  const handleCreate = ()=>{

    //  清空上一次的数据
    pageModalRef.value.formData = {} 
    defaultInfo.value = {}
    pageModalRef.value.DialogVisible = true
    newCallback && newCallback()
  }

  // 处理编辑按钮的函数
  const handleEdit = (item:any)=>{
    // 发起请求
    store.dispatch('getCurrentMenuListByIdAction',{roleId:item.roleId})
    delete item.password
    defaultInfo.value = {...item} 
    pageModalRef.value.DialogVisible = true

    editCallback && editCallback(item)

  }

  return {pageModalRef,handleCreate,handleEdit,defaultInfo}
}

export {usePageModal}