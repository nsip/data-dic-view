<template>
    <div class="page_mode">
        <label>type:</label>
        <input class="selection" type="radio" name="normal" value="" :checked="pageMode=='normal'" @click="select('normal')"> <label>normal</label>
        <input class="selection" type="radio" name="approval" value="" :checked="pageMode=='approval'" @click="select('approval')"> <label>approval</label>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { pageMode } from './share/share';

export default defineComponent({
    name: 'ModeSel',
    setup() {
        const select = (MODE: string) => {
            pageMode.value = MODE
        }
        return {
            select,
            pageMode,
        }
    }
});
</script>

<style scoped>
    .page_mode {
        float: right;
        margin-bottom: 1%;
    }
</style>