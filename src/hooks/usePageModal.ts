import { ref } from 'vue'
import PageModal from '@/components/page-modal.vue'
function usePageModal(newCallback:any,editCallback:any){

  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  // 处理新增按钮的函数
  const handleCreate = ()=>{

    //  清空上一次的数据
    pageModalRef.value.formData = {} 

    pageModalRef.value.DialogVisible = true
    newCallback && newCallback()
  }

  // 处理编辑按钮的函数
  const handleEdit = (item:any)=>{

    defaultInfo.value = {...item} 
    console.log(defaultInfo.value);
    pageModalRef.value.DialogVisible = true
    editCallback && editCallback()
  }

  return {pageModalRef,handleCreate,handleEdit,defaultInfo}
}

export {usePageModal}