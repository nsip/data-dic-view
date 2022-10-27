<template>
    <!-- <a :href="IP_CMS + '?auth=' + loginToken" target="_blank" class="float"> -->
    <a class="float" @click="addCMS()">
        <font-awesome-icon icon="plus" class="floating" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { loginToken } from "../share/share";
import { IP_CMS } from "../share/ip";

export default defineComponent({
    name: "BtnAdd",
    setup() {
        const addCMS = async () => {
            location.replace(`${IP_CMS}?auth=${loginToken.value}`)
        };
        return {
            IP_CMS,
            loginToken,
            addCMS
        };
    },
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
    background-color: #bbb;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
}

.float:hover {
    background-color: #0c9;
    cursor: pointer;
}

.floating {
    margin-top: 22px;
    color: white;
}
</style>
