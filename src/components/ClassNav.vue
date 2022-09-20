<template>
    <div class="class">
        <span v-for="(item, idx) in selclspath" :key="idx" @click="onPathClick(item)">
            <span class="ea"> {{ item }}</span>
            <span v-if="idx < selclspath.length-1"> / </span>            
        </span>
        <span v-if="selchildren.length > 0"> / </span>
        <select v-if="selchildren.length > 0" name="children" id="">
            <option value="-1">--subclass--</option>
            <option v-for="(item, idx) in selchildren" :key="idx">{{ item }}</option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { aim, selclspath, selchildren } from './share/share'

export default defineComponent({
    name: 'ClassNav',
    setup() {

        const onPathClick = (item: string) => {
            aim.value = item
        }

        return {
            aim,
            selclspath,
            selchildren,
            onPathClick
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
