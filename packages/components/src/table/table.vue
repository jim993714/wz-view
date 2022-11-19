<template>
  <div class="container">
    <a-table v-on="propsEvent" >
      <template #columns>
        <a-table-column title="创建时间" data-index="createTime" />
        <!--其他变量自己绑定....-->
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import useTableProps from "./props";

export default defineComponent({
  setup() {
    const { propsRes, propsEvent } = useTableProps();

    onMounted(() => {
      fetchData();
    });
    const fetchData = async () => {};

    return {
      propsRes,
      propsEvent,
    };
  }, //setup
});
</script>
