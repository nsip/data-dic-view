<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <MainTitle />
  <div id="container">
    <div id="left">
      <ItemList />
    </div>
    <div id="right">
      <EntityContent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainTitle from './components/Title.vue';
import ItemList from './components/List.vue';
import EntityContent from './components/Entity.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainTitle,
    ItemList,
    EntityContent
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
  height: 100%;
  width: 100%;
  display: flex;
  /* margin-top: -10px; */
}

#left {
  width: 25%;
  margin-right: 1%;
  background-color: rgb(189, 206, 238);
  overflow: scroll;
  /*   display: flex;
     flex-direction: column; */
}

#middle {
  width: 0%;
  background-color: rgb(237, 207, 207);
  /* overflow: scroll;
  display: flex;
  flex-direction: column; */
}

#right {
  width: 75%;
  margin-left: 1%;
  background-color: rgb(211, 240, 203);
  overflow: scroll;
  /* overflow-y: scroll;
  background-color: rgb(220, 220, 220); */
}
</style>
