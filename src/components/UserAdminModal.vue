<template>
    <div id="modal" v-if="visible">

        <span id="prefix-user">user:</span>
        <span id="value-user">{{ uname }}</span>

        <span id="prefix-set-admin">admin:</span>
        <select id="value-set-admin" @change="switchSelectAdmin($event)">
            <option value="false" :selected="!admin">No</option>
            <option value="true" :selected="admin">Yes</option>
        </select>
        <span id="note-set-admin">(can approve submitted item, etc.)</span>

        <span id="prefix-set-active">active:</span>
        <select id="value-set-active" @change="switchSelectActive($event)">
            <option value="false" :selected="!active">No</option>
            <option value="true" :selected="active">Yes</option>
        </select>
        <span id="note-set-active">(user active status)</span>

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
    /* width/2 */
    margin-left: -200px;
    /* height/2 */
    margin-top: -75px;
    width: 400px;
    height: 150px;
}

/* 1st line */

#prefix-user {
    position: absolute;
    left: 10px;
    top: 5px;
    font-size: x-large;
}

#value-user {
    position: absolute;
    left: 90px;
    top: 10px;
    font-size: large;
    font-style: italic;
    font-weight: bold;
}

/* 2nd line */

#prefix-set-admin {
    position: absolute;
    left: 10px;
    top: 40px;
    font-size: x-large;
}

#value-set-admin {
    position: absolute;
    left: 90px;
    top: 45px;
    font-size: large;
}

#note-set-admin {
    position: absolute;
    left: 170px;
    top: 50px;
    font-size: small;
    font-style: italic;
}

/* 3rd line */

#prefix-set-active {
    position: absolute;
    left: 10px;
    top: 75px;
    font-size: x-large;
}

#value-set-active {
    position: absolute;
    left: 90px;
    top: 80px;
    font-size: large;
}

#note-set-active {
    position: absolute;
    left: 170px;
    top: 85px;
    font-size: small;
    font-style: italic;
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