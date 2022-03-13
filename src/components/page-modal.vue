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
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="DialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import CzForm from "@/base-ui/form/Cz-form.vue"
import { ref, defineComponent, watch } from "vue"
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
  },

  setup(props) {
    const DialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      newValue => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    return {
      DialogVisible,
      formData,
    }
  },
})
</script>

<style scoped lang="less"></style>
