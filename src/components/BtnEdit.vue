<template>
    <!-- <a :href="IP_CMS + '?name=' + selItem + '&kind=' + selKind + '&auth=' + loginToken" target="_blank" class="float"> -->
    <a class="float" @click="editCMS()">
        <font-awesome-icon icon="pen" class="floating" />
    </a>
</template>

<script setup lang="ts">
import { loginToken, selItem, selKind } from "@/share/share";
import { IP_CMS } from "@/share/ip";

const editCMS = async () => {
    location.replace(
        `${IP_CMS}?name=${selItem.value}&kind=${selKind.value}&auth=${loginToken.value}`
    );
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 110px;
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
