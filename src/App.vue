<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <MainTitle />
    <div id="container">
        <div id="left">
            <ItemList />
        </div>
        <div id="right">
            <EntityContent v-if="sel == 'entity'" />
            <CollectionContent v-if="sel == 'collection'" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import MainTitle from './components/Title.vue';
import ItemList from './components/List.vue';
import EntityContent from './components/Entity.vue';
import CollectionContent from './components/Collection.vue'
import { sel } from './components/share/share'

export default defineComponent({
    name: 'App',
    components: {
        MainTitle,
        ItemList,
        EntityContent,
        CollectionContent
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
            sel
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
