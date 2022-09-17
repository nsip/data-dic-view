<template>
    <ul class="list-entity">
        <li class="link ellip" v-for="(item, idx) in entities" :key="idx" :title="item" @click="loadItem(item, 'entity')">{{item}} </li>
    </ul>
    <ul class="list-collection">
        <li class="link ellip" v-for="(item, idx) in collections" :key="idx" :title="item" @click="loadItem(item, 'collection')">{{item}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { fetchNoBody, mEmpty } from './share/fetch'
import { selEntity } from './share/Entity'

export default defineComponent({
    name: 'ItemList',
    // props: {
    //     msg: String,
    // },
    setup() {

        let entities = ref([])
        let collections = ref([])

        const listItem = async (itemType: string) => {
            const rt = (await fetchNoBody(`api/dictionary/list/${itemType}`, "GET", mEmpty)) as any[]
            if (rt[1] != 200) {
                alert(rt[0])
                return
            }
            if (itemType == "entity") {
                entities.value = rt[0]
            } else if (itemType == "collection") {
                collections.value = rt[0]
            }
        }

        listItem('entity')
        listItem('collection')

        /////////////////////        

        const loadItem = async (name: any, type: string) => {
            const mParam: Map<string, any> = new Map<string, any>([["name", name]])
            const rt = await fetchNoBody(`api/dictionary/one`, "GET", mParam) as any[]

            if (rt[1] != 200) {
                alert(rt[0])
                return
            }

            if (type == 'entity') {

                selEntity.SetContent(rt[0])
                // console.log(rt[0])

                // alert(selEntity.Entity)
                // alert(selEntity.Definition)

            } else if (type == 'collection') {

                alert('TODO: collection')
            }
        }

        /////////////////////

        return {
            entities,
            collections,
            loadItem
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul.list-entity {
    background-color: rgb(240, 240, 100);
    width: 88%;
    height: 600px;
    max-height: 600px;
    /* display: inline-block; */
    overflow: scroll;
    font-size: 15px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    float: left;
    border-style: groove;
    border-color: rgb(230, 230, 230);
}

ul.list-entity li.ellip {
    background-color: rgb(210, 210, 210);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -20px;
}

ul.list-entity li.link {
    color: blue;
    text-decoration: none;
}

ul.list-entity li.link:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

/* ******************************************* */

ul.list-collection {
    background-color: rgb(240, 100, 240);
    width: 88%;
    height: 300;
    max-height: 300px;
    /* display: inline-block; */
    overflow: scroll;
    font-size: 15px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    float: left;
    border-style: groove;
    border-color: rgb(230, 230, 230);
}

ul.list-collection li.ellip {
    background-color: rgb(210, 210, 210);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -20px;
}

ul.list-collection li.link {
    color: blue;
    text-decoration: none;
}

ul.list-collection li.link:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>
