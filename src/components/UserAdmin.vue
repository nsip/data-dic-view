<template>
    <div class="tbl">
        <TextLine text="registered users:" textAlign="left" textColor="gray" lineColor="gray" lineHeight="0px" />
        <EasyDataTable :headers="headers" :items="items" class="table" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getUserList } from "@/share/share";
import TextLine from "./shared/TextLine.vue";

export default defineComponent({
    name: "UserAdmin",
    components: {
        EasyDataTable: window["vue3-easy-data-table"],
        TextLine,
    },
    setup() {

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
        ]

        onMounted(async () => {

            const users = await getUserList()
            // console.log(users)

            users.forEach((user: { [x: string]: any; }) => {

                const uname = user['uname']
                const email = user['email']

                console.log(uname)
                console.log(email)

                items.value.push({ user: uname, email: email, admin: true, online: true, active: true })
            });

        });

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

        return {
            headers,
            items
        };
    },
});
</script>
  
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
  