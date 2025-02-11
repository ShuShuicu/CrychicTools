<template>
    <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1">
            <template #tab>
                <span>
                    <like-outlined />
                    推荐
                </span>
            </template>
            <Recommend />
        </a-tab-pane>
        <a-tab-pane key="2">
            <template #tab>
                <span>
                    <windows-outlined />
                    系统
                </span>
            </template>
            <System />
        </a-tab-pane>
    </a-tabs>
</template>
<script lang="ts" setup>
import { LikeOutlined, WindowsOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const activeKey = ref('1');
import Recommend from '../components/Tools/Recommend.vue';
import System from '../components/Tools/System.vue';
</script>