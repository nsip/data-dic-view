<template>
    <ItemName />
    <ItemDef />
    <URL />
    <MetaData />
    <ColEntities />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemName from './sub-collection/1-name.vue'
import ItemDef from './sub-collection/2-def.vue'
import URL from './sub-collection/3-url.vue'
import MetaData from './sub-collection/4-meta.vue'
import ColEntities from './sub-collection/5-entities.vue'

export default defineComponent({
    name: 'CollectionContent',
    components: {
        ItemName,
        ItemDef,
        URL,
        MetaData,
        ColEntities
    },
    setup() {
        let title = "CollectionContent"
        return {
            title
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}
</style>
