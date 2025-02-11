<template>
  <a-card>
    <a-space direction="vertical" style="width: 100%">
      <a-alert message="感谢使用Crychic工具箱" type="success" show-icon closable>
        <template #action>
          <a-button size="small" type="text" @click="Bilibili">前往反馈</a-button>
        </template>
      </a-alert>
    </a-space>
    <Tomorin />
  </a-card>
</template>

<script setup lang="ts">
import Tomorin from './components/Tomorin.vue'
import { notification } from 'ant-design-vue';
import { onMounted } from 'vue';
const openNotification = () => {
  notification.open({
    message: 'Soyorin',
    description:
      'なんで春日影やったの?!!',
    duration: 3,
  });
};

onMounted(() => {
  openNotification();
});
const Bilibili = () => {
  window.open('https://space.bilibili.com/435502585', '_blank');
}
</script>