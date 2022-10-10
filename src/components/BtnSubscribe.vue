<template>
    <a class="float" @click="subscribe()">
        <font-awesome-icon icon="bookmark" class="floating" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selKind, selEntity, selCollection, pageMode, putSubscribe } from './share/share';

export default defineComponent({
    name: 'BtnSubscribe',
    setup() {
        const subscribe = async () => {

            // alert(selKind.value)

            let name = ''
            switch (selKind.value) {
                case 'entity':
                    name = selEntity.Entity
                    break;
                case 'collection':
                    name = selCollection.Entity
                    break;
                default:
                    alert(`select one item before subscribing`)
                    return
            }
            const r = await putSubscribe(name, selKind.value)
            if (r) {
                alert(`[${name}] is subscribed`)
            } else {
                alert(`[${name}] is unsubscribed`)
            }
        }
        return {
            selKind,
            selEntity,
            selCollection,
            subscribe
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 110px;
    right: 40px;
    background-color: #BBB;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
}

.float:hover {
    background-color: #0C9;
    cursor: pointer;
}

.floating {
    margin-top: 22px;
    color: white;
}
</style>
