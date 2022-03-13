import { ref } from 'vue'
import PageModal from '@/components/page-modal.vue'
function usePageModal(newCallback:any,editCallback:any){

  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  // 处理新增按钮的函数
  const handleCreate = ()=>{
    pageModalRef.value.formData = {} 
    pageModalRef.value.DialogVisible = true
    newCallback && newCallback()
  }

  // 处理编辑按钮的函数
  const handleEdit = (item:any)=>{

    defaultInfo.value = {...item} 
    pageModalRef.value.DialogVisible = true
    editCallback && editCallback()
  }

  return {pageModalRef,handleCreate,handleEdit,defaultInfo}
}

export {usePageModal}