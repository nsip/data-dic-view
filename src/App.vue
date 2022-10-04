<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <div v-if="disp">
        <!-- in future, SignPage will be an independent service -->
        <SignPage v-if="!loginOK" />
        <div v-if="loginOK">
            <MainTitle />
            <ClassNav v-if="pageMode == 'normal'" />
            <ModeSel />
            <div id="container">
                <div id="left">
                    <ListFilter v-if="pageMode == 'normal'" />
                    <ItemList v-if="pageMode == 'normal'" />
                    <ItemList4Approve v-if="pageMode == 'approval'" />
                </div>
                <div id="right">
                    <EntityContent v-if="selKind == 'entity'" />
                    <CollectionContent v-if="selKind == 'collection'" />
                    <BtnApprove />
                    <BtnAdd />
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { loginOK, pageMode } from './components/share/share'
import SignPage from './components/SignPage.vue';
import MainTitle from './components/Title.vue';
import ClassNav from './components/ClassNav.vue'
import ModeSel from './components/ModeSel.vue'
import ListFilter from './components/Filter.vue';
import ItemList from './components/List.vue';
import ItemList4Approve from './components/List4Approve.vue'
import EntityContent from './components/Entity.vue';
import CollectionContent from './components/Collection.vue'
import BtnAdd from './components/BtnAdd.vue'
import BtnApprove from './components/BtnApprove.vue'
import { selKind } from './components/share/share'
import { ping } from './components/share/ping'

export default defineComponent({
    name: 'App',
    components: {
    SignPage,
    MainTitle,
    ClassNav,
    ModeSel,
    ListFilter,
    ItemList,
    ItemList4Approve,
    EntityContent,
    CollectionContent,
    BtnAdd,
    BtnApprove
},
    setup() {

        let Width = window.innerWidth + 'px';
        let Height = window.innerHeight + 'px';

        const onResize = () => {
            Width = window.innerWidth + 'px'
            Height = window.innerHeight + 'px'
            console.log('Width:', Width)
            console.log('Height:', Height)
        }

        let disp = ref(false)

        onMounted(async () => {
            // test backend api available
            disp.value = await ping()
            if (!disp.value) {
                alert('backed api service is not available')
            }

            // listen browser size change
            window.addEventListener('resize', onResize)
        })

        return {
            Width,
            Height,
            selKind,
            loginOK,
            pageMode,
            disp
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
    height: v-bind('Height');
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
