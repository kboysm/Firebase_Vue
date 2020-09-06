<template>
  <div class="xxx">
    <div v-for="test in testObj" :key="test[0]">{{test}}</div>
    <v-text-field v-model="test.aa"></v-text-field>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testObj: {
        a: {
          aa: "aa",
        },
        b: {
          aa: "bb",
        },
        cc: {
          aa: "cc",
        },
      },
    }
  },
  watch: {
    testObj: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler(newData) {
        console.log(`The list of colours has changed! ${newData}`)
      },
    },
  },
}
</script>
<style scoped>
</style>