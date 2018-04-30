<template>
    <div class="base-layout-style">
        dashboard
    </div>
</template>
<script type="text/babel">
// import axios from 'axios';
import { usedList } from '../../../../http/admin_http/fetch';
export default {
    created() {
        // console.log(usedList());
        usedList().then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        // this.$axios.defaults.headers['x-csrf-token'] = document.cookie.split('=')[1];

        // this.$axios.get('/api/admin/list').then(response => {

        // });
    }
}
</script>


