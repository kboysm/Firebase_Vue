<template>
  <v-app>
    <v-app-bar app dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title :title="site.title"></site-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" dark>
      <site-menu :items="site.menu" />

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <site-footer :footer="site.footer" />
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
    site: {
      title: "",
      footer: "",
      menu: [
        {
          title: "home",
          icon: "mdi-home",
          to: "/",
          subItems: [
            {
              title: "dashboard",
              to: "/",
            },
            {
              title: "about",
              to: "/About",
            },
          ],
        },
        {
          title: "about",
          active: true,
          icon: "mdi-information",
          subItems: [
            {
              title: "xxx",
              to: "/xxx",
            },
          ],
        },
      ],
    },
    drawer: false,
  }),
  created() {
    this.subscribe()
    throw Error("dddd")
  },
  methods: {
    subscribe() {
      this.$firebase
        .database()
        .ref()
        .child("site")
        .on(
          "value",
          (sn) => {
            const v = sn.val()
            if (!v) {
              this.$firebase.database().ref().child("site").set(this.site)
              return
            }
            this.site = v
          },
          (e) => {
            console.log(e.message)
          }
        )
    },
    // save() {
    //   this.$firebase.database().ref().child("abcd").set({
    //     //ref는 root , 차일드로 abcd 주입 set안에는 object가 들어감
    //     title: "abcd",
    //     text: "iLikeVuejs",
    //   })
    // },
    // read() {
    //   //realtime의 read는 2가지가 존재
    //   // 1번만 읽는다! , 파이프를 연결해 놓고 계속 읽느냐! 2가지
    //   this.$firebase
    //     .database()
    //     .ref()
    //     .child("abcd")
    //     .on("value", (sn) => {
    //       console.log(sn)
    //       console.log(sn.val())
    //     }) //이건 파이프를 연결해서 값이 변경하면 자동으로 바뀐값이 DB에서 넘어옴 완전 신세계
    //   //잘 활용하면 다이나믹한 자동으로 마구마구 바뀌는 기능을 구현할 수 있다
    // },
    // async readOne() {
    //   //이건 파이프 x ,1번만 읽는거
    //   const sn = await this.$firebase
    //     .database()
    //     .ref()
    //     .child("abcd")
    //     .once("value")
    //   console.log(sn.val())
    // },
  },
}
</script>
