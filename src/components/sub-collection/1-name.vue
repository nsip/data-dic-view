<template>
    <div v-if="isNotEmpty(selCollection.Entity)">
        <div class="area">
            <span class="category">Name:</span>
            <span class="content">{{ selCollection.Entity }}</span>
        </div>
        <hr>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selCollection } from '../share/Collection'
import { isNotEmpty } from '../share/util';

export default defineComponent({
    name: 'ItemName',
    setup() {
        return {
            selCollection,
            isNotEmpty,
        }
    }
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
    font-size: 18;
    font-weight: bold;
    margin-left: 2%;
}

.content {
    color: black;
    margin: 0px 0px 0px 0px;
    width: 100%;   
    font-weight: bold;
    text-align: left;
}
</style>
