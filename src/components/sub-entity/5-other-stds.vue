<template>
    <div class="area">
        <span class="category">Other Standards:</span>
        <span class="content-flex">
            <div v-for="(item, idx) in selEntity.OtherStandards" :key="idx">

                <div class="cat-val-flex">
                    <span class="sub-cat">Standard:</span>
                    <span class="sub-val">{{item.Standard}}</span>
                </div>

                <br>

                <div class="cat-val-flex">
                    <span class="sub-cat">Link:</span>
                    <div class="sub-val">
                        <div v-for="(subitem, i) in item.Link" :key="i">
                            <span>{{subitem}}</span>
                            <br>
                        </div>
                    </div>
                </div>

                <br>

                <div class="cat-val-flex">
                    <span class="sub-cat">Path:</span>
                    <div class="sub-val">
                        <div v-for="(subitem, i) in item.Path" :key="i">
                            <span>{{subitem}}</span>
                            <br>
                        </div>
                    </div>
                </div>

                <br>

                <div class="cat-val-flex">
                    <span class="sub-cat">Definition:</span>
                    <span class="sub-val">{{item.Definition}}</span>
                </div>

                <br>

                <div class="cat-val-flex">
                    <span class="sub-cat">Commentary:</span>
                    <span class="sub-val">{{item.Commentary}}</span>
                </div>

                <hr v-if="idx != selEntity.OtherStandards.length - 1">

            </div>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selEntity } from '../share/Entity'

export default defineComponent({
    name: 'OtherStds',
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
    margin-top: 0px;
    margin-bottom: 0px;
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
