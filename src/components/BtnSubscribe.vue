<template>
    <a class="float" :class="style()" @click="subscribe()">
        <font-awesome-icon icon="bookmark" class="floating" />
    </a>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { selKind, selItem, selEntity, selCollection, lsSubscribed, putSubscribe, LoadCurrentList, getListSubscription } from "@/share/share";

const sub_style = ref("subscribed-style");
const unsub_style = ref("unsubscribed-style");

const style = () => {
    let subscribed = false;
    lsSubscribed.value.forEach((val) => {
        if (val == selItem.value) {
            subscribed = true;
        }
    });
    return subscribed ? sub_style.value : unsub_style.value;
};

const subscribe = async () => {
    // alert(selKind.value)

    let name = "";
    switch (selKind.value) {
        case "entity":
            name = selEntity.Entity;
            break;
        case "collection":
            name = selCollection.Entity;
            break;
        default:
            alert(`select one item before subscribing`);
            return;
    }
    const r = await putSubscribe(name, selKind.value);
    if (r) {
        alert(`[${name}] is subscribed`);
    } else {
        alert(`[${name}] is unsubscribed`);
    }

    // reload list for changing item color
    LoadCurrentList("entity", "existing");
    LoadCurrentList("collection", "existing");

    // DEBUG ...
    const subs = (await getListSubscription()) as string[];
    console.log("getListSubscription:", subs)
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 180px;
    right: 40px;
    background-color: #bbb;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
}

.float:hover {
    background-color: #0c9;
    cursor: pointer;
}

.floating {
    margin-top: 22px;
    color: white;
}

/* ******************************************* */

.subscribed-style {
    background-color: #0c9;
}

.subscribed-style:hover {
    background-color: #bbb;
}

.unsubscribed-style {
    background-color: #bbb;
}

.unsubscribed-style:hover {
    background-color: #0c9;
}
</style>
