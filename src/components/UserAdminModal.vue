<template>
    <div id="modal" v-if="visible">

        <span id="prefix-user">user:</span>
        <span id="value-user">{{ uname }}</span>

        <span id="prefix-set-admin">admin:</span>
        <select id="value-set-admin" @change="switchSelectAdmin($event)">
            <option value="false" :selected="!admin">false</option>
            <option value="true" :selected="admin">true</option>
        </select>
        <span id="note-set-admin">(can approve submitted item, etc.)</span>

        <span id="prefix-set-active">active:</span>
        <select id="value-set-active" @change="switchSelectActive($event)">
            <option value="false" :selected="!active">false</option>
            <option value="true" :selected="active">true</option>
        </select>
        <span id="note-set-active">(can approve submitted item, i.e)</span>

        <button id="btn-confirm" @click="confirm({ admin: fAdmin, active: fActive })">confirm</button>
        <button id="btn-cancel" @click="cancel()">cancel</button>

    </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'
import { useOverlayMeta } from 'unoverlay-vue'

const props = defineProps({
    uname: String,
    admin: Boolean,
    active: Boolean,
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

let fAdmin = ref(props.admin)
const switchSelectAdmin = (event: any) => {
    fAdmin.value = JSON.parse(event.target.value)
};

let fActive = ref(props.active)
const switchSelectActive = (event: any) => {
    fActive.value = JSON.parse(event.target.value)
};

// modal show event
watch(
    () => props.visible,
    (newValue, oldValue) => {
        if (newValue == true && oldValue == false) {
            fAdmin.value = props.admin
            fActive.value = props.active
            console.log('show modal')
        }
    }
)

</script>

<style scoped>
#modal {
    background-color: rgb(212, 214, 214);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -180px;
    /* width/2 */
    margin-top: -60px;
    /* height/2 */
    width: 360px;
    height: 120px;
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
    font-weight: bold;
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

#prefix-set-active {
    position: absolute;
    left: 10px;
    top: 59px;
}

#value-set-active {
    position: absolute;
    left: 70px;
    top: 60px;
}

#note-set-active {
    position: absolute;
    left: 140px;
    top: 62px;
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