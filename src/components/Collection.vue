<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CollectionContent',
    // props: {
    //     msg: String,
    // },
    components: {
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
