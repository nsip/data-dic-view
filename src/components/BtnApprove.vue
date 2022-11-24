<template>
    <a class="float" @click="approve()">
        <font-awesome-icon icon="check" class="floating" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    selKind,
    selEntity,
    selCollection,
    Mode,
    putApprove,
    getAdminListUser,
    getAdminListSubscription,
    postAdminSendEmail,
    getList,
    LoadCurrentList,
    UpdateApprovalListStatus
} from "../share/share";

export default defineComponent({
    name: "BtnApprove",
    setup() {
        const approve = async () => {

            if (Mode.value == "approval") {
                const name = selKind.value == "entity" ? selEntity.Entity : selCollection.Entity;

                // check New item OR Updated item to be approved
                // DO NOT USE 'lsEntity', 'lsCollection', get list from coldb 'existing'

                let create = true;
                const lsExisting = (await getList(selKind.value, "existing")) as string[];
                lsExisting.forEach((val) => {
                    if (val == name) {
                        create = false;
                    }
                });
                // alert(`create flag: ${create}`)

                // do approve
                const ok = await putApprove(name, selKind.value);
                // alert(`approve ok flag: ${ok}`)

                if (ok) {
                    const content = create
                        ? `new item [${name}] has been added into data dictionary`
                        : `data dictionary item [${name}] has been updated`;

                    const unames = (await getAdminListUser("uname")) as string[];
                    unames.forEach(async (uname) => {
                        if (create) {
                            // inform subscriber new item have been added
                            const ok = await postAdminSendEmail(
                                "National Education Data Dictionary Info",
                                content,
                                uname
                            );
                            if (!ok) {
                                alert(`email sent error, new`);
                            }
                        } else {
                            // inform subscriber his subscribed item has been updated
                            const subs = (await getAdminListSubscription(uname)) as string[];
                            if (subs.includes(name)) {
                                const ok = await postAdminSendEmail("notice:", content, uname);
                                if (!ok) {
                                    alert(`email sent error, updated`);
                                }
                            }
                        }
                    });

                    LoadCurrentList("entity", "text");
                    LoadCurrentList("collection", "text");

                    selEntity.Reset()
                    selCollection.Reset()

                    UpdateApprovalListStatus()

                } else {
                    alert(`approve failed`);
                }
            }
        };
        return {
            selKind,
            selEntity,
            selCollection,
            approve,
        };
    },
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
    background-color: #bbb;
    color: #fff;
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
