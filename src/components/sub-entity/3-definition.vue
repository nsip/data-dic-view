<template>
    <div class="area">
        <span class="category">Name:</span>
        <span class="content" v-html="selEntity.Definition"></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selEntity } from '../share/Entity'

export default defineComponent({
    name: 'ItemDef',
    setup() {
        return {
            selEntity
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
    width: 20%;
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
