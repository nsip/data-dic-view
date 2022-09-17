<template>
    <h2>{{ title }}</h2>
    <hr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainTitle',
    // props: {
    //     msg: String,
    // },
    setup() {
        let title = "National Education Data Dictionary"
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

hr {
    margin-top: -1%;
    margin-bottom: 1%;
}

</style>
