<template>
    <div v-if="isNotEmpty(selEntity.Definition)">
        <div class="area">
            <span class="category">Definition:</span>
            <span class="content" v-html="selEntity.Definition"></span>
        </div>
        <hr>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selEntity } from '../share/Entity'
import { isNotEmpty } from '../share/util';

export default defineComponent({
    name: 'ItemDef',
    setup() {
        return {
            selEntity,
            isNotEmpty
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
    font-weight: normal;
    text-align: left;
}
</style>
