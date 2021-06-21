<template>
  <button @click="logout">{{ title }}</button>
</template>

<script>
export default {
  name: "Logout",
  props :{
      title : String
  }
  ,
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/Ref")
    },
  },
};
</script>

<style>
</style>