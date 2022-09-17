<template>
    <ItemName />
    <hr>
    <OtherNames />
    <hr>
    <ItemDef />
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemName from './sub-entity/1-name.vue';
import OtherNames from './sub-entity/2-other-names.vue';
import ItemDef from './sub-entity/3-definition.vue';


export default defineComponent({
    name: 'EntityContent',
    // props: {
    //     msg: String,
    // },
    components: {
    ItemName,
    OtherNames,  
    ItemDef,  
},
    setup() {
        let title = "Content"
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
