<template>
    <input class="search-box" type="text" id="search" name="search" placeholder="searching ..." v-model="aim" />
    <button class="search-btn" @click="Search()">
        <font-awesome-icon icon="search" />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { aim, Search } from "../share/share";

export default defineComponent({
    name: "ListFilter",
    setup() {
        return {
            aim,
            Search,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box {
    float: left;
    width: 80%;
    padding: 5px 0px 5px 10px;
    margin-left: 2%;
    margin-top: 2%;
    background-color: rgb(220, 220, 220);
}

.search-btn {
    float: left;
    width: 10%;
    margin-left: 2%;
    margin-top: 2%;
    padding: 5px 5px 5px 5px;
    font-size: 14px;
}

hr {
    margin-top: 2%;
    margin-bottom: -1%;
}
</style>
