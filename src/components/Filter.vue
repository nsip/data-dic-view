<template>
    <input class="search-box" type="text" id="search" name="search" placeholder="searching ..." v-model="aim">
    <button class="search-btn" @click="search()"> filter </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { aim, entities, collections } from './share/share'
import { fetchNoBody } from './share/fetch'

export default defineComponent({
    name: 'ListFilter',
    setup() {
        const search = async () => {

            aim.value = aim.value.trim()
            const mParam = new Map<string, any>([["aim", aim.value], ["ignorecase", true]])
            const rt = (await fetchNoBody(`api/dictionary/search`, "GET", mParam)) as any[]
            if (rt[1] != 200) {
                alert(rt[0])
                return
            }
            
            entities.value = (rt[0]).Entities
            collections.value = (rt[0]).Collections
        }
        return {
            aim,
            entities,
            collections,
            search
        }
    }
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
