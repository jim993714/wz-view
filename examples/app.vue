<template>
  <div>
    <div class="btn-box">
      <Button @click="click" type="primary" :loading="false" :disabled="false">primary</Button>
    </div>
    <div class="btn-box">
      <Button :loading="false" :disabled="false">Secondary</Button>
    </div>
    <div class="btn-box">
      <Button type="dashed" :loading="false" :disabled="false">dashed</Button>
    </div>
    <div class="btn-box">
      <Button :loading="false" :disabled="false" type="outline">outline</Button>
    </div>
    <div class="btn-box">
      <Button :loading="false" :disabled="false" type="text">text</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "wz-view-ui";
const click=()=>{
  console.log('点击');
  
}
</script>

<style lang="less" scoped>
.btn-box {
  width: 150px;
  margin-bottom: 20px;
}
</style>
