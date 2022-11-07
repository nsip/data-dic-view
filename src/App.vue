<template>
    <div v-if="disp">
        <MainTitle />
        <ClassNav v-if="Mode == 'normal'" />
        <ModeSel />
        <div id="container">

            <div id="left">
                <ListFilter v-if="Mode == 'normal'" />
                <ItemList v-if="Mode == 'normal'" />
                <ItemList4Approve v-if="Mode == 'approval'" />
            </div>

            <div id="right" v-if="!isEmpty(selEntity) || !isEmpty(selCollection)">
                <EntityContent v-if="Mode != 'admin' && selKind == 'entity'" />
                <CollectionContent v-if="Mode != 'admin' && selKind == 'collection'" />
                <BtnApprove v-if="Mode == 'approval'" />
                <BtnSubscribe v-if="Mode == 'normal'" />
                <BtnEdit v-if="Mode == 'normal'" />
                <BtnAdd v-if="Mode == 'normal'" />
            </div>

            <div v-if="Mode == 'admin'">

            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { loginUser, loginAuth, loginToken, getUname, Mode, selKind, selEntity, selCollection } from "./share/share";
import MainTitle from "./components/Title.vue";
import ClassNav from "./components/ClassNav.vue";
import ModeSel from "./components/ModeSel.vue";
import ListFilter from "./components/Filter.vue";
import ItemList from "./components/List.vue";
import ItemList4Approve from "./components/List4Approve.vue";
import EntityContent from "./components/EntityContent.vue";
import CollectionContent from "./components/CollectionContent.vue";
import BtnAdd from "./components/BtnAdd.vue";
import BtnEdit from "./components/BtnEdit.vue";
import BtnApprove from "./components/BtnApprove.vue";
import BtnSubscribe from "./components/BtnSubscribe.vue";
import { isEmpty } from "./share/util";

export default defineComponent({
    name: "App",
    components: {
        MainTitle,
        ClassNav,
        ModeSel,
        ListFilter,
        ItemList,
        ItemList4Approve,
        EntityContent,
        CollectionContent,
        BtnAdd,
        BtnEdit,
        BtnApprove,
        BtnSubscribe,
    },
    setup() {

        const DEBUG = false // *** //

        let disp = ref(false)

        const pAuth = window.location.href.indexOf("auth=");
        const auth = decodeURI(window.location.href.substring(pAuth + 5));
        loginToken.value = auth;
        loginAuth.value = "Bearer " + auth;

        //////////////////////////////////////

        onMounted(async () => {

            if (DEBUG) {
                disp.value = true;
                return
            }

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

        return {
            disp,
            selKind,
            selEntity,
            selCollection,
            Mode,
            isEmpty,
        };
    },
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
    /* overflow: scroll;
  display: flex;
   flex-direction: column; */
}

#right {
    width: 75%;
    height: 92%;
    margin-left: 0%;
    background-color: rgb(200, 200, 200);
    overflow: scroll;
    /* display: flex;
  flex-direction: column; */
}
</style>
