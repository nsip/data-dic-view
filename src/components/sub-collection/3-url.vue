<template>
    <div v-if="isNotEmpty(selCollection.URL)">
        <div class="area">
            <span class="category">URL:</span>
            <span class="content">
                <span v-for="(item, idx) in selCollection.URL" :key="idx" v-html="linkify(item, true)">
                </span>
            </span>
        </div>
        <hr />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { selCollection } from "../../share/share";
import { isNotEmpty, linkify } from "../../share/util";

export default defineComponent({
    name: "URL",
    setup() {
        return {
            selCollection,
            isNotEmpty,
            linkify,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.area {
    padding: 15px 0px 15px 10px;
    font-size: 17px;
    font-family: Arial, Helvetica, sans-serif, monospace;
    background-color: rgb(200, 200, 200);
    display: flex;
    flex-direction: row;
}

.category {
    text-align: left;
    width: 25%;
    font-size: 18px;
    font-weight: bold;
    margin-left: 2%;
}

.content {
    color: black;
    margin: 0px 0px 0px 0px;
    width: 100%;
    font-weight: normal;
    text-align: left;
}
</style>
