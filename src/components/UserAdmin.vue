<template>
    <div class="tbl">
        <TextLine text="registered users:" textAlign="left" textColor="gray" lineColor="gray" lineHeight="0px" />
        <Vue3EasyDataTable :headers="headers" :items="items" class="table" @click-row="rowClick" />
    </div>
    <UserAdminModal v-bind:visible="visModal" v-bind:uname="user" v-bind:admin="admin" v-bind:active="active" @confirm="confirm" @cancel="cancel" />
</template>

<!-- =============================================================================== -->

<script setup lang="ts">

import { ref, onMounted } from "vue";
import { getUserList, getUserOnline, setUser } from "@/share/share";
import TextLine from "@/components/shared/TextLine.vue";
import type { Header, Item } from "vue3-easy-data-table";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import UserAdminModal from '@/components/UserAdminModal.vue'

const headers = ref<any>(null);
const items = ref<any>(null);

headers.value = [
    { text: "USER", value: "user", sortable: true },
    { text: "EMAIL", value: "email" },
    { text: "ADMIN", value: "admin", sortable: true },
    { text: "ONLINE", value: "online", sortable: true },
    { text: "ACTIVE", value: "active", sortable: true },
];
items.value = [
    // { user: "", email: "", admin: "", online: "", active: "" },
];

const reloadTable = async () => {

    items.value = []

    /////////////////////////////////////

    const users = await getUserList('', '');
    // console.log(users)

    const onlines = await getUserOnline();
    // console.log(onlines)

    let onlineUsers: string[] = []
    onlines.forEach((online: { [x: string]: any }) => {
        // console.log(online);
        onlineUsers.push(online['Uname'])
    });

    users.forEach((user: { [x: string]: any }) => {
        // console.log(user);

        const uname = user["uname"];
        const email = user["email"];
        const active = user["active"];
        const admin = user["role"];

        items.value.push({
            user: uname,
            email: email,
            admin: admin == "admin" ? true : false,
            online: onlineUsers.includes(uname),
            active: active,
        });
    });
}

onMounted(reloadTable);

type ClickRowArgument = Item & {
    isSelected?: boolean;
    indexInCurrentPage?: number;
};

// for simulate double click
let t = 0;
let got1st = false;
const interval = 300;

// double click effect only
const rowDbClick = (item: ClickRowArgument) => {
    if (got1st && Date.now() - t > interval) {
        got1st = false;
    }
    if (!got1st) {
        t = Date.now();
        got1st = true;
    } else {
        if (Date.now() - t <= interval) {
            rowClick(item);
        }
        got1st = false;
    }
};

// for modal props
const visModal = ref(false)
const user = ref('USER')
const admin = ref(false)
const active = ref(true)

// click real action
const rowClick = (item: ClickRowArgument) => {
    // console.log(item);

    // pop-up modal to set user field
    visModal.value = true
    user.value = item['user']
    admin.value = item['admin']
    active.value = item['active']
};

////////////////////////////////////////////////////////////

// result is a struct object
const confirm = async (result: any) => {
    // console.log("result", result)

    const rtSet = await setUser(user.value, result)
    console.log(rtSet)

    visModal.value = false
    await reloadTable()
}
const cancel = async () => {
    visModal.value = false
}

// headers.value = [
//     { text: "PLAYER", value: "player" },
//     { text: "TEAM", value: "team" },
//     { text: "NUMBER", value: "number" },
//     { text: "POSITION", value: "position" },
//     { text: "HEIGHT", value: "indicator.height" },
//     { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
//     { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
//     { text: "COUNTRY", value: "country" },
// ];
// items.value = [
//     { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: { "height": '6-2', "weight": 185 }, lastAttended: "Davidson", country: "USA" },
//     { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: { "height": '6-9', "weight": 250 }, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA" },
//     { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: { "height": '6-10', "weight": 240 }, lastAttended: "Texas-Austin", country: "USA" },
//     { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: { "height": '6-11', "weight": 242 }, lastAttended: "Filathlitikos", country: "Greece" },
// ];
</script>

<!-- =============================================================================== -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tbl {
    margin: auto;
    width: 90%;
    /* border: 3px solid green; */
    /* padding: 10px; */
}

.table {
    margin-top: 1%;
}
</style>
