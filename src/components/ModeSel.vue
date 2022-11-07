<template>
    <div class="page_mode">
        <label class="mode_text">mode:</label>
        <!-- same 'name', auto single selection -->
        <input class="selection" type="radio" name="mode" value="" checked @click="select('normal')" />
        <label>normal</label>
        <input class="selection" type="radio" name="mode" value="" @click="select('approval')" />
        <label>approval</label>
        <input class="selection" type="radio" name="mode" value="" @click="select('admin')" />
        <label>user admin</label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    Mode,
    selKind,
    selEntity,
    selCollection,
    aim,
    selClsPath,
    selChildren,
} from "../share/share";

export default defineComponent({
    name: "ModeSel",
    setup() {
        const select = (selMode: string) => {
            Mode.value = selMode
            switch (selMode) {
                case 'normal':
                    selKind.value = "entity";
                    selEntity.Reset();
                    selCollection.Reset();
                    aim.value = "";
                    selClsPath.value = [];
                    selChildren.value = [];
                    break

                case 'approval':
                    selKind.value = "entity";
                    selEntity.Reset();
                    selCollection.Reset();
                    aim.value = "";
                    selClsPath.value = [];
                    selChildren.value = [];
                    break

                case 'admin':
                    selKind.value = "";
                    selEntity.Reset();
                    selCollection.Reset();
                    aim.value = "";
                    selClsPath.value = [];
                    selChildren.value = [];
                    break                    
            }
        };
        return {
            select,
        };
    },
});
</script>

<style scoped>
.page_mode {
    float: right;
    margin-bottom: 1%;
    margin-right: 1%;
}

.mode_text {
    font-weight: bold;
}
</style>
