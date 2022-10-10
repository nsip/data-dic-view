<template>
    <h4 v-if="listEntity.length > 0" class="title-entity">Entity:</h4>
    <ul v-if="listEntity.length > 0" class="list-entity">
        <li v-for="(item, idx) in listEntity" :key="idx" :title="item" class="ellip" :class="selItem == item ? sel_style : unsel_style" @click="RefreshPage(item, 'existing')">{{item}} </li>
    </ul>
    <h4 v-if="listCollection.length > 0" class="title-collection">Collection:</h4>
    <ul v-if="listCollection.length > 0" class="list-collection">
        <li v-for="(item, idx) in listCollection" :key="idx" :title="item" class="ellip" :class="selItem == item ? sel_style : unsel_style" @click="RefreshPage(item, 'existing')">{{item}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { selKind, selItem, aim, listEntity, listCollection, selClsPath, selChildren, LoadList, RefreshPage } from './share/share'

export default defineComponent({
    name: 'ItemList',
    setup() {

        LoadList('entity', 'existing')
        LoadList('collection', 'existing')
        
        const sel_style = ref('selected-style')
        const unsel_style = ref('unselected-style')

        return {
            listEntity,
            listCollection,
            selKind,
            selItem,
            aim,
            selClsPath,
            selChildren,
            sel_style,
            unsel_style,
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

/* ******************************************* */

.selected-style {
    color: green;
    font-weight: bold;
}

.selected-style:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.unselected-style {
    color: black;
}

.unselected-style:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

</style>
