<template>
    <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-list-item-meta
                    :description="item.description">
                    <template #title>
                        <a :onclick="item.onclick + '()'">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                        <a-avatar :src="item.icon" />
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>
<script lang="ts" setup>
interface DataItem {
    title: string;
    description: string;
    icon: string;
    onclick: string;
}
const data: DataItem[] = [
    {
        title: 'AAct',
        description: 'Windows激活工具AAct 4.2.4 64bit Single',
        icon: 'assets/icon/AAct.png',
        onclick: 'OpenAAct',
    },
    {
        title: 'IDM',
        description: 'Internet Download Manager 6.9开心版',
        icon: 'assets/icon/IDM.png',
        onclick: 'OpenIDM',
    },
];
</script>