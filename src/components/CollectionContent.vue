<template>
    <ItemName />
    <ItemDef />
    <URL />
    <MetaData />
    <ColEntities />
</template>

<script setup lang="ts">
import ItemName from "./sub-collection/1-name.vue";
import ItemDef from "./sub-collection/2-def.vue";
import URL from "./sub-collection/3-url.vue";
import MetaData from "./sub-collection/4-meta.vue";
import ColEntities from "./sub-collection/5-entities.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}
</style>
