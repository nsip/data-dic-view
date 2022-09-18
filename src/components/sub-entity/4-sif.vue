<template>
    <div v-if="isNotEmpty(selEntity.SIF)">
        <div class="area">
            <span class="category">SIF:</span>
            <span class="content-flex">
                <div v-for="(item, idx) in selEntity.SIF" :key="idx">

                    <div class="cat-val-flex" v-if="isNotEmpty(item.XPath)">
                        <span class="sub-cat">XPath:</span>
                        <div class="sub-val">
                            <div v-for="(subitem, i) in item.XPath" :key="i">
                                <span>{{subitem}}</span>
                                <br>
                            </div>
                        </div>
                    </div>

                    <div class="cat-val-flex" v-if="isNotEmpty(item.Definition)">
                        <span class="sub-cat">Definition:</span>
                        <span class="sub-val">{{item.Definition}}</span>
                    </div>

                    <div class="cat-val-flex" v-if="isNotEmpty(item.Commentary)">
                        <span class="sub-cat">Commentary:</span>
                        <span class="sub-val">{{item.Commentary}}</span>
                    </div>

                    <div class="cat-val-flex" v-if="isNotEmpty(item.Datestamp)">
                        <span class="sub-cat">Datestamp:</span>
                        <span class="sub-val">{{item.Datestamp}}</span>
                    </div>

                </div>
            </span>
        </div>
        <hr>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selEntity } from '../share/Entity'
import { isNotEmpty } from '../share/util'

export default defineComponent({
    name: 'ItemSIF',
    setup() {
        return {
            selEntity,
            isNotEmpty
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.area {
    padding: 15px 0px 15px 10px;
    font-size: 17px;
    font-family: Arial, Helvetica, sans-serif, monospace;
    background-color: rgb(200, 200, 200);
    display: flex;
    flex-direction: row;
}

.category {
    text-align: left;
    width: 20%;
    font-size: 18;
    font-weight: bold;
    margin-left: 2%;
}

.content-flex {
    /* background-color: rgb(255, 255, 255); */
    margin-top: 2.5%;
    margin-left: -15%;
    width: 100%;
    font-weight: normal;
    display: flex;
    flex-direction: column;
}

.cat-val-flex {
    display: flex;
    flex-direction: row;
    margin-bottom: 1%;
}

.sub-cat {
    text-align: left;
    font-weight: bold;
    width: 25%;
    /* background-color: rgb(172, 180, 178); */
    cursor: default;
}

.sub-val {
    /* background-color: rgb(0, 230, 220); */
    text-align: left;
    color: black;
    width: 100%;
    margin-left: -4%;
}
</style>
