import { createApp } from "vue";

import AppExportedData from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(AppExportedData);

app.component("friend-contact", FriendContact);
app.component("add-new-friend-form", NewFriend);

app.mount("#app");
