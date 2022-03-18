<template>
  <div class="page-nodal">
    <el-dialog
      v-model="DialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <CzForm v-bind="modalConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import CzForm from "@/base-ui/form/Cz-form.vue"
import { ref, defineComponent, watch } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  components: {
    CzForm,
  },
  props: {
    modalConfig: {
      type: null,
      default: () => ({}),
    },
    defaultInfo: {
      type: null,
      default: () => ({}),
    },
    pageName: {
      type: String,
    },
    otherInfo: {
      type: null,
    },
  },

  setup(props) {
    const DialogVisible = ref(false)
    const formData = ref<any>({})
    const store = useStore()

    watch(
      () => props.defaultInfo,
      newValue => {
        for (const item of props.modalConfig.formItems) {
          if (!item.isHidden) {
            formData.value[`${item.field}`] = newValue[`${item.field}`]
          }
        }
      }
    )

    // 确定按钮的回调
    const handleConfirm = () => {
      DialogVisible.value = false

      // 根据defaultInfo中是否有数据来判断,当前是新建还是编辑
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        // store.dispatch("systemModule/editAction", {
        //   pageName: props.pageName,
        //   queryInfo: formData,
        //   id: props.defaultInfo.id,
        // })
      } else {
        // 新建
        store.dispatch("systemModule/createNewAction", {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo },
        })
      }
    }
    return {
      DialogVisible,
      formData,
      handleConfirm,
    }
  },
})
</script>

<style scoped lang="less"></style>
