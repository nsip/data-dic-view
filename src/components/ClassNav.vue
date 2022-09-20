<template>
    <div class="class">
        <span v-for="(item, idx) in selClsPath" :key="idx"> 
            <span class="ea" @click="RefreshPage(item)"> {{ item }}</span>
            <span v-if="idx < selClsPath.length-1"> / </span>            
        </span>
        <span v-if="selChildren.length > 0"> / </span>
        <select v-if="selChildren.length > 0" name="children" id="">
            <option value="-1">--subclass--</option>
            <option v-for="(item, idx) in selChildren" :key="idx" @click="RefreshPage(item)" >{{ item }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selClsPath, selChildren, RefreshPage } from './share/share'

export default defineComponent({
    name: 'ClassNav',
    setup() {
        return {            
            selClsPath,
            selChildren,
            RefreshPage            
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
    margin-top: -1%;
    margin-bottom: 1%;
}

.class {
    margin-left: 1%;
    margin-bottom: 1%;
    float: left;
    font-style: italic;
    color: blue;
}

.ea:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>
