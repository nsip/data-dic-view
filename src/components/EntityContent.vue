<template>
    <ItemName />
    <OtherNames />
    <ItemDef />
    <ItemSIF />
    <OtherStds />
    <LegalDefs />
    <ItemCols />
    <MetaData />
</template>

<script setup lang="ts">
import ItemName from "./sub-entity/1-name.vue";
import OtherNames from "./sub-entity/2-other-names.vue";
import ItemDef from "./sub-entity/3-def.vue";
import ItemSIF from "./sub-entity/4-sif.vue";
import OtherStds from "./sub-entity/5-other-stds.vue";
import LegalDefs from "./sub-entity/6-legal-def.vue";
import ItemCols from "./sub-entity/7-collections.vue";
import MetaData from "./sub-entity/8-meta.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}
</style>
