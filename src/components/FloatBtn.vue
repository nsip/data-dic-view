<template>
    <a :href="IP_CMS + loginToken" target="_blank" class="float">
        <font-awesome-icon icon="plus" class="floating" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IP_CMS, loginToken } from './share/share';

export default defineComponent({
    name: 'FloatBtn',
    setup() {
        return {
            IP_CMS,
            loginToken
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
