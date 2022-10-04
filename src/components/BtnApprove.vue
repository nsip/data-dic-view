<template>
    <a class="float" @click="approve()">
        <font-awesome-icon icon="check" class="floating" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selKind, selEntity, selCollection, pageMode, putApprove } from './share/share';

export default defineComponent({
    name: 'BtnApprove',
    setup() {
        const approve = async () => {
            if (pageMode.value == 'approval') {
                const r = await putApprove(selEntity.Entity, 'entity')
                alert(r)
            }
        }
        return {
            selKind,
            selEntity,
            selCollection,
            approve
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
    background-color: rgb(15, 169, 246);
    cursor: pointer;
}

.floating {
    margin-top: 22px;
    color: white;
}
</style>
