<template>
    <div>
        <span class="title"> {{ title }} </span>
        <button class="link" @click="(visModal = true)">{{ loginUser }}</button>
        <hr class="sep" />
    </div>
    <PageTitleModal v-bind:visible="visModal" @confirm="confirm" @cancel="cancel" />
</template>

<script setup lang="ts">

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

    // redirect to sign page. If public IP, change Port to '80'
    if (rt) {
        let redirectIP = IP_SIGN
        if (!IP_SIGN.includes('127.0.0.1')) {
            redirectIP = IP_SIGN.replace(":8000", ":80")
        }
        location.replace(redirectIP);
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
