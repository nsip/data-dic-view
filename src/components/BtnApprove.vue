<template>
    <a class="float" @click="approve()">
        <font-awesome-icon icon="check" class="floating" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { selKind, selEntity, selCollection, lsEntity, lsCollection, pageMode, putApprove, getAdminListUser, getAdminListSubscription } from './share/share';
// import { SendMail } from './share/mail'

export default defineComponent({
    name: 'BtnApprove',
    setup() {
        const approve = async () => {
            if (pageMode.value == 'approval') {

                //
                // selCollection will be done soon !!!
                //


                // check New item OR Updated item to be approved
                let create = true
                lsEntity.value.forEach((val) => {
                    if (val == selEntity.Entity) {
                        create = false
                    }
                })

                // do approve
                const ok = await putApprove(selEntity.Entity, 'entity')
                alert(ok)

                // inform subscriber items have been changed
                if (ok) {

                    if (create) {

                        //
                        // 
                        //

                        // const emails = await getAdminListUser('email') as string[]
                        // emails.forEach(async (email) => {
                        //     const ok = await SendMail(email, 'data dictionary notice', `${selEntity.Entity} has been added`)
                        //     if (ok) {
                        //         alert('email sent')
                        //     } else {
                        //         alert('email error')
                        //     }
                        // })

                        alert('created')
                    }

                    if (!create) {
                        alert('updated')
                    }                     
                }
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
    bottom: 40px;
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
