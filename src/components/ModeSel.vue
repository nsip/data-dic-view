<template>
    <div class="page_mode">

        <!-- same 'name', auto single selection -->

        <input class="selection" type="radio" name="mode" value="" checked @click="select('normal')" />
        <label>normal</label>

        <input v-if="!isListApprEmpty" class="selection" type="radio" name="mode" value="" @click="select('approval')" />
        <label v-if="!isListApprEmpty">approval</label>

        <input class="selection" type="radio" name="mode" value="" @click="select('admin')" />
        <label>admin</label>

    </div>
</template>

<script setup lang="ts">
import { Mode, selKind, selEntity, selCollection, aim, selClsPath, selChildren, isListApprEmpty, UpdateListApprStatus } from "@/share/share";

UpdateListApprStatus();

const select = (selMode: string) => {
    Mode.value = selMode;

    (() => {
        selEntity.Reset();
        selCollection.Reset();
        selClsPath.value = [];
        selChildren.value = [];
        aim.value = "";
    })();

    switch (selMode) {
        case "normal":
            selKind.value = "entity";
            break;

        case "approval":
            selKind.value = "entity";
            break;

        case "admin":
            selKind.value = "";
            break;
    }
};
</script>

<style scoped>
.page_mode {
    float: right;
    margin-bottom: 1%;
    margin-right: 1%;
}
</style>
