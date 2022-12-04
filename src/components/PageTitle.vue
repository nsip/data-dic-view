<template>
    <div>
        <span class="title"> {{ title }} </span>
        <span class="user"> {{ loginUser }} </span>
        <hr class="sep" />
    </div>
</template>

<script setup lang="ts">
import { loginUser } from "@/share/share";

let title = "National Education Data Dictionary";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    float: center;
    text-align: center;
    font-size: 160%;
    font-weight: bold;
}

.user {
    float: right;
    margin-top: 0.4%;
    margin-right: 1%;
}

.sep {
    margin-top: 0%;
}
</style>
