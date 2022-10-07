<template>
    <a class="float" @click="subscribe()">
        <font-awesome-icon icon="bookmark" class="floating" />
    </a>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { selKind, selEntity, selCollection, pageMode } from './share/share';
    
    export default defineComponent({
        name: 'BtnSubscribe',
        setup() {
            const subscribe = async () => {
                if (pageMode.value == 'normal') {
                    // const r = await putApprove(selEntity.Entity, 'entity')
                    // alert(r)
                    alert('TODO: subscribe')
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
