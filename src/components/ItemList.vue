<template>
    <h4 v-if="lsEntity.length > 0" class="title-entity">Entity:</h4>
    <ul v-if="lsEntity.length > 0" class="list-entity">
        <li v-for="(item, idx) in lsEntity" :key="idx" :title="item" class="ellip" :class="style(item)" @click="Refresh(item, 'existing')">
            {{ item }}
        </li>
    </ul>
    <h4 v-if="lsCollection.length > 0" class="title-collection">Collection:</h4>
    <ul v-if="lsCollection.length > 0" class="list-collection">
        <li v-for="(item, idx) in lsCollection" :key="idx" :title="item" class="ellip" :class="style(item)" @click="Refresh(item, 'existing')">
            {{ item }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    selItem,
    lsEntity,
    lsCollection,
    lsSubscribed,
    LoadCurrentList,
    Refresh,
} from "@/share/share";

const default_style = ref("default-style");
const sel_style = ref("selected-style");
const sub_style = ref("subscribed-style");

const style = (name: string) => {
    const selected = selItem.value == name;
    let subscribed = false;

    // for (let i = 0; i < lsSubscribed.value.length; i++) {
    //     if (lsSubscribed.value[i] == name) {
    //         subscribed = true
    //     }
    // }

    lsSubscribed.value.forEach((val) => {
        if (val == name) {
            subscribed = true;
        }
    });

    if (selected && subscribed) {
        return sel_style.value + " " + sub_style.value;
    } else if (selected) {
        return sel_style.value;
    } else if (subscribed) {
        return sub_style.value;
    } else {
        return default_style.value;
    }
};

LoadCurrentList("entity", "existing");
LoadCurrentList("collection", "existing");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-entity {
    float: left;
    margin-left: 5%;
    margin-top: 4%;
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

.title-collection {
    float: left;
    margin-left: 5%;
    margin-top: 0%;
    font-style: italic;
}

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

/* selected */
.selected-style {
    font-weight: bold;
    font-style: italic;
}

.selected-style:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

/* subscribed */
.subscribed-style {
    color: green;
    font-weight: bold;
}

.subscribed-style:hover {
    text-decoration: underline;
    cursor: pointer;
}

/* default */
.default-style {
    color: black;
}

.default-style:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>
