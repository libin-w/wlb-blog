<template>
    <div class="admin-page-container">
        <slot name="main"></slot>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    mounted() {
        axios.defaults.headers.post['x-csrf-token'] = document.cookie.split('=')[1];
    }
};
</script>




