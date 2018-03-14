<template>
    <show-app-layout>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </show-app-layout>
</template>
<script type="text/babel">
export default {
    computed: {

    },
    mounted() {

    }
};
</script>
