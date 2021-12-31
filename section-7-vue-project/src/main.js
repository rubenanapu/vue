import { createApp } from "vue";

import AppExportedData from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

const app = createApp(AppExportedData);

app.component("friend-contact", FriendContact);

app.mount("#app");
