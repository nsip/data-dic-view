import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faPlus,
  faThumbsUp,
  faCheck,
  faSearch,
  faBookmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faPlus, faThumbsUp, faCheck, faSearch, faBookmark, faPen);

// createApp(App).mount('#app')
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
