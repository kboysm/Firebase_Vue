<template>
  <v-list>
    <v-list-group
      v-for="(item,i) in items"
      :key="i"
      v-model="item.active"
      :prepend-icon="item.icon"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="subItem in item.subItems" :key="subItem.title" :to="subItem.to">
        <v-list-item-content>
          <v-list-item-title v-text="subItem.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
,<script>
export default {
  data() {
    return {
      items: [
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
    }
  },
}
</script>