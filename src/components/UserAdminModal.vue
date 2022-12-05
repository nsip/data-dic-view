<template>
    <div id="modal" v-if="visible">

        <span id="prefix-user">user:</span>
        <span id="value-user">{{ user }}</span>

        <span id="prefix-set-admin">admin:</span>
        <select id="value-set-admin" @change="switchSelect($event)">
            <option value="false">false</option>
            <option value="true">true</option>
        </select>
        <span id="note-set-admin">(can approve submitted item, i.e)</span>

        <button id="btn-cancel" @click="cancel()">cancel</button>
        <button id="btn-confirm" @click="confirm(`${fAdmin}`)">confirm</button>

    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useOverlayMeta } from 'unoverlay-vue'

const props = defineProps({
    user: String,
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

let fAdmin = ref(false)

const switchSelect = (event: any) => {
    fAdmin.value = JSON.parse(event.target.value)
};

</script>

<style scoped>
#modal {
    background-color: rgb(212, 214, 214);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -200px;
    width: 400px;
    height: 100px;
}

#prefix-user {
    position: absolute;
    left: 10px;
    top: 5px;
}

#value-user {
    position: absolute;
    left: 70px;
    top: 5px;
    font-style: italic;
}

#prefix-set-admin {
    position: absolute;
    left: 10px;
    top: 32px;
}

#value-set-admin {
    position: absolute;
    left: 70px;
    top: 35px;
}

#note-set-admin {
    position: absolute;
    left: 140px;
    top: 37px;
    font-size: x-small;
    font-style: italic;
}

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