<template>
    <ul class="list-entity" v-if="listEntity.length > 0">
        <li class="link ellip" v-for="(item, idx) in listEntity" :key="idx" :title="item" @click="RefreshPage(item, 'text')">{{item}} </li>
    </ul>
    <ul class="list-collection" v-if="listCollection.length > 0">
        <li class="link ellip" v-for="(item, idx) in listCollection" :key="idx" :title="item" @click="RefreshPage(item, 'text')">{{item}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selKind, aim, listEntity, listCollection, selClsPath, selChildren, LoadList, RefreshPage } from './share/share'

export default defineComponent({
    name: 'ItemList4Approve',
    setup() {

        LoadList('entity', 'text')
        LoadList('collection', 'text')

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
ul.list-entity::-webkit-scrollbar {
    display: none;
}

ul.list-entity {
    /* background-color: rgb(240, 240, 100); */
    width: 85%;
    max-height: 80%;
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
    color: darkslateblue;
    text-decoration: none;
}

ul.list-entity li.link:hover {
    color: darkslateblue;
    text-decoration: underline;
    cursor: pointer;
}

/* ******************************************* */

ul.list-collection::-webkit-scrollbar {
    display: none;
}

ul.list-collection {
    /* background-color: rgb(240, 100, 240); */
    width: 85%;
    max-height: 20%;
    margin-top: -1%;
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
    color: darkslateblue;
    text-decoration: none;
}

ul.list-collection li.link:hover {
    color: darkslateblue;
    text-decoration: underline;
    cursor: pointer;
}

hr {
    margin-top: -1%;
    margin-bottom: 1%;
}
</style>
