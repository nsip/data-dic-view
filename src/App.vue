<template>
    <div v-if="disp">
        <MainTitle />
        <ClassNav v-if="Mode == 'normal'" />
        <ModeSel />
        <div v-if="Mode != 'admin'" id="container">

            <div id="left">
                <ListFilter v-if="Mode == 'normal'" />
                <ListItem v-if="Mode == 'normal'" />
                <ListAppr v-if="Mode == 'approval'" />
            </div>

            <div id="right" v-if="!isEmpty(selEntity) || !isEmpty(selCollection)">
                <EntityContent v-if="selKind == 'entity'" />
                <CollectionContent v-if="selKind == 'collection'" />
                <BtnApprove v-if="Mode == 'approval'" />
                <BtnSubscribe v-if="Mode == 'normal'" />
                <BtnEdit v-if="Mode == 'normal'" />
                <BtnAdd v-if="Mode == 'normal'" />
            </div>

        </div>

        <div v-if="Mode == 'admin'">
            <UserAdmin />
        </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import { loginUser, loginAuth, loginToken, getUname, Mode, selKind, selEntity, selCollection } from "@/share/share";
import { isEmpty } from "@/share/util";
import MainTitle from "@/components/PageTitle.vue";
import ClassNav from "@/components/ClassNav.vue";
import ModeSel from "@/components/ModeSel.vue";
import ListFilter from "@/components/SearchFilter.vue";
import ListItem from "@/components/ListItem.vue";
import ListAppr from "@/components/ListAppr.vue";
import EntityContent from "@/components/EntityContent.vue";
import CollectionContent from "@/components/CollectionContent.vue";
import BtnAdd from "@/components/BtnAdd.vue";
import BtnEdit from "@/components/BtnEdit.vue";
import BtnApprove from "@/components/BtnApprove.vue";
import BtnSubscribe from "@/components/BtnSubscribe.vue";
import UserAdmin from "@/components/UserAdmin.vue";

let HeightOfList = ref((window.innerHeight * 0.9).toString() + "px");
let HeightOfContent = ref((window.innerHeight * 0.9).toString() + "px");

let disp = ref(false);

const pAuth = window.location.href.indexOf("auth=");
const auth = decodeURI(window.location.href.substring(pAuth + 5));
loginToken.value = auth;
loginAuth.value = "Bearer " + auth;

onMounted(async () => {
    if (loginAuth.value.length < 32) {
        alert("invalid auth info");
        disp.value = false;
    } else {
        // fill loginUser, already 'ping' back-end api
        getUname(); // in this, read 'loginAuth.value'

        await new Promise((f) => setTimeout(f, 500));

        if (loginUser.value.length > 0) {
            disp.value = true;
            // alert(loginUser.value)
        }
    }
});

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}

/* layout */

#container {
    width: 100%;
    height: 100%;
    /* height: v-bind("Height"); */
    display: flex;
    /* margin-top: -10px; */
}

#left {
    width: 25%;
    height: 92%;
    margin-right: 1%;
    background-color: rgb(200, 200, 200);
    /* List has its own scroll */
    height: v-bind(HeightOfList);    
}

#right {
    width: 75%;
    height: 92%;
    margin-left: 0%;
    background-color: rgb(200, 200, 200);
    overflow-y: scroll;
    height: v-bind(HeightOfContent);
}
</style>
