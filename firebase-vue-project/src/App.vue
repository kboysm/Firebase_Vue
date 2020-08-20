<template>
  <v-app>
    <v-app-bar app dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title :title="title"></site-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" dark>
      <site-menu />

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
    <site-footer :footer="footer" />
  </v-app>
</template>

<script>
import SiteTitle from "@/views/site/SiteTitle"
import SiteFooter from "@/views/site/SiteFooter"
import SiteMenu from "@/views/site/SiteMenu"
export default {
  name: "App",
  components: {
    SiteTitle,
    SiteFooter,
    SiteMenu,
  },
  data: () => ({
    title: "testTiitle",
    footer: "testFooter",
    drawer: false,
  }),
}
</script>
