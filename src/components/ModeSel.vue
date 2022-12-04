<template>
    <div class="page_mode">
        <!-- same 'name', auto single selection -->
        <input class="selection" type="radio" name="mode" value="" checked @click="select('normal')" />
        <label>normal</label>
        <input v-if="!isApprovalListEmpty" class="selection" type="radio" name="mode" value="" @click="select('approval')" />
        <label v-if="!isApprovalListEmpty">approval</label>
        <input class="selection" type="radio" name="mode" value="" @click="select('admin')" />
        <label>admin</label>
    </div>
</template>

<script setup lang="ts">
import { Mode, selKind, selEntity, selCollection, aim, selClsPath, selChildren, isApprovalListEmpty, UpdateApprovalListStatus } from "@/share/share";

UpdateApprovalListStatus();

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
