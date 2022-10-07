<template>
    <h3 class="title-entity" v-if="listEntity.length > 0">Entity:</h3>
    <ul class="list-entity" v-if="listEntity.length > 0">
        <li class="link ellip" v-for="(item, idx) in listEntity" :key="idx" :title="item" @click="RefreshPage(item, 'existing')">{{item}} </li>
    </ul>
    <h3 class="title-collection" v-if="listCollection.length > 0">Collection:</h3>
    <ul class="list-collection" v-if="listCollection.length > 0">
        <li class="link ellip" v-for="(item, idx) in listCollection" :key="idx" :title="item" @click="RefreshPage(item, 'existing')">{{item}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selKind, aim, listEntity, listCollection, selClsPath, selChildren, LoadList, RefreshPage } from './share/share'

export default defineComponent({
    name: 'ItemList',
    setup() {

        LoadList('entity', 'existing')
        LoadList('collection', 'existing')

        return {
            listEntity,
            listCollection,
            selKind,
            aim,
            selClsPath,
            selChildren,
            LoadList,
            RefreshPage,
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-entity {
    float: left;
    margin-left: 5%;
    margin-top: 4%;
    font-style: italic;
}

.title-collection {
    float: left;
    margin-left: 5%;
    margin-top: 0%;
    font-style: italic;
}

ul.list-entity::-webkit-scrollbar {
    display: none;
}

ul.list-entity {
    /* background-color: rgb(240, 240, 100); */
    width: 82%;
    max-height: 75%;
    margin-left: 2%;
    margin-top: -3%;
    /* display: inline-block; */
    overflow: scroll;
    scrollbar-width: none;
    font-size: 15px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    float: left;
    border-style: groove;
    border-color: rgb(230, 230, 230);
    padding-top: 8px;
    padding-bottom: 8px;
}

ul.list-entity li.ellip {
    background-color: rgb(200, 200, 200);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -5%;
    padding-top: 0.5%;
}

ul.list-entity li.link {
    color: black;
    text-decoration: none;
}

ul.list-entity li.link:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

/* ******************************************* */

ul.list-collection::-webkit-scrollbar {
    display: none;
}

ul.list-collection {
    /* background-color: rgb(240, 100, 240); */
    width: 82%;
    max-height: 20%;
    margin-top: -3%;
    margin-left: 2%;
    /* display: inline-block; */
    overflow: scroll;
    scrollbar-width: none;
    font-size: 15px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    float: left;
    border-style: groove;
    border-color: rgb(230, 230, 230);
    padding-top: 8px;
    padding-bottom: 8px;
}

ul.list-collection li.ellip {
    background-color: rgb(200, 200, 200);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -5%;
    padding-top: 0.5%;
}

ul.list-collection li.link {
    color: black;
    text-decoration: none;
}

ul.list-collection li.link:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>
