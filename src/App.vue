<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <MainTitle />
    <ClassNav />
    <div id="container">
        <div id="left">
            <ListFilter />
            <ItemList />
        </div>
        <div id="right">
            <EntityContent v-if="selKind == 'entity'" />
            <CollectionContent v-if="selKind == 'collection'" />
            <FloatBtn />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import MainTitle from './components/Title.vue';
import ItemList from './components/List.vue';
import ListFilter from './components/Filter.vue';
import EntityContent from './components/Entity.vue';
import CollectionContent from './components/Collection.vue'
import ClassNav from './components/ClassNav.vue'
import FloatBtn from './components/FloatBtn.vue'
import { selKind } from './components/share/share'

export default defineComponent({
    name: 'App',
    components: {
        MainTitle,
        ClassNav,
        ListFilter,
        ItemList,        
        EntityContent,
        CollectionContent,
        FloatBtn,
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
        onMounted(() => {
            window.addEventListener('resize', onResize)
        })

        return {
            Width,
            Height,
            selKind,
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
