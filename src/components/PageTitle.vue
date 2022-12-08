<template>
    <div>
        <span class="title"> {{ title }} </span>
        <button class="link" @click="(visModal = true)">{{ loginUser }}</button>
        <hr class="sep" />
    </div>
    <PageTitleModal v-bind:visible="visModal" @confirm="confirm" @cancel="cancel" />
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { loginUser, putLogout } from "@/share/share";
import { IP_SIGN } from "@/share/ip"
import PageTitleModal from '@/components/PageTitleModal.vue'

let title = "National Education Data Dictionary";

const visModal = ref(false)

// result is a struct object
const confirm = async (result: any) => {

    // close modal
    visModal.value = false

    // logout
    const rt = await putLogout()

    // redirect to sign page
    if (rt) {
        location.replace(`${IP_SIGN}`);
    }
}

const cancel = async () => {
    visModal.value = false
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    float: center;
    text-align: center;
    font-size: 160%;
    font-weight: bold;
}

.link {
    float: right;
    margin-top: 0.4%;
    margin-right: 1%;
    background: none;
    border: none;
}

.sep {
    margin-top: 0%;
}
</style>
