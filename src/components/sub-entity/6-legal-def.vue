<template>
    <div class="area">
        <span class="category">Legal Definitions:</span>
        <span class="content-flex">
            <div v-for="(item, idx) in selEntity.LegalDefinitions" :key="idx">

                <div class="cat-val-flex">
                    <span class="sub-cat">Legislation Name:</span>
                    <span class="sub-val">{{item.LegislationName}}</span>
                </div>

                <div class="cat-val-flex">
                    <span class="sub-cat">Citation:</span>
                    <span class="sub-val">{{item.Citation}}</span>
                </div>

                <div class="cat-val-flex">
                    <span class="sub-cat">Link:</span>
                    <span class="sub-val">{{item.Link}}</span>
                </div>

                <div class="cat-val-flex">
                    <span class="sub-cat">Definition:</span>
                    <span class="sub-val" v-html="item.Definition"></span>
                </div>

                <div class="cat-val-flex">
                    <span class="sub-cat">Commentary:</span>
                    <span class="sub-val">{{item.Commentary}}</span>
                </div>

                <div class="cat-val-flex">
                    <span class="sub-cat">Datestamp:</span>
                    <span class="sub-val">{{item.Datestamp}}</span>
                </div>

                <hr v-if="idx != selEntity.LegalDefinitions.length - 1">

            </div>
        </span>
    </div>
    <hr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selEntity } from '../share/Entity'

export default defineComponent({
    name: 'LegalDefs',
    setup() {
        return {
            selEntity
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
    background-color: rgb(255, 255, 255);
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
    width: 20%;
    background-color: rgb(172, 180, 178);
    cursor: default;
}

.sub-val {
    background-color: rgb(0, 230, 220);
    text-align: left;
    color: black;
    width: 100%;
    margin-left: -4%;
}
</style>
