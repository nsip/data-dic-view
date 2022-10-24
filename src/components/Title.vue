<template>
  <div>
    <span class="title"> {{ title }} </span>
    <span class="user"> {{ loginUser }} </span>
    <hr class="sep" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { loginUser } from "../share/share";

export default defineComponent({
  name: "MainTitle",
  // props: {
  //     msg: String,
  // },
  setup() {
    let title = "National Education Data Dictionary";
    return {
      title,
      loginUser,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  float: center;
  text-align: center;
  font-size: 160%;
  font-weight: bold;
}

.user {
  float: right;
  margin-top: 0.4%;
  margin-right: 1%;
}

.sep {
  margin-top: 0%;
}
</style>
