<template>
    <a :href="IP_CMS" target="_blank" class="float">
        <font-awesome-icon icon="plus" class="floating" />
    </a>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IP_CMS } from './share/fetch';

export default defineComponent({
    name: 'FloatBtn',
    setup() {
        return {
            IP_CMS
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #BBB;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
}

.float:hover {
    background-color: #0C9;
    cursor: pointer;
}

.floating {
    margin-top: 22px;
    color: white;
}
</style>
