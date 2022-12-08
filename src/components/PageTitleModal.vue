<template>
    <div id="modal" v-if="visible">

        <span id="prefix">logout?</span>
        <button id="btn-confirm" @click="confirm()">confirm</button>
        <button id="btn-cancel" @click="cancel()">cancel</button>

    </div>
</template>

<script setup lang="ts">

import { useOverlayMeta } from 'unoverlay-vue'

const props = defineProps({
    // If you want to use it as a component in template,
    // you need to define visible in props
    visible: Boolean
})

// Define the events used in the component(optional)
// This allows you to use hints in components
defineEmits(['cancel', 'confirm', 'update:visible'])

// Get Overlay information from useOverlayMeta
const { visible, confirm, cancel } = useOverlayMeta({
    // Animation duration to avoid premature destruction of components
    // Only use component in template and no need to define
    animation: 1000
})

///////////////////////////////////////////////////////

// for invoker confirm using

</script>

<style scoped>
#modal {
    background-color: rgb(212, 214, 214);
    position: absolute;
    top: 50%;
    left: 50%;
    /* width/2 */
    margin-left: -100px;
    /* height/2 */
    margin-top: -35px;
    width: 200px;
    height: 70px;
}

/* 1st line */

#prefix {
    position: absolute;
    left: 10px;
    top: 5px;
    font-size: x-large;
}

/* button */

#btn-cancel {
    float: right;
    background-color: rgb(225, 226, 224);
    position: absolute;
    right: 70px;
    bottom: 6px;
}

#btn-confirm {
    float: right;
    background-color: rgb(225, 226, 224);
    position: absolute;
    right: 5px;
    bottom: 6px;
}
</style>