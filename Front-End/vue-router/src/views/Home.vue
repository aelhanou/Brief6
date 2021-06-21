<template>
  <div>
    <p>home</p>
    <router-link to="/register"
      ><button class="user">New User</button></router-link
    >

    <router-link v-if="data != ''" to="/rendezVous"
      ><button class="rendez">Rendez Vous</button></router-link
    >

    <router-link to="/ref" v-else
      ><button class="rendez">Rendez Vous</button></router-link
    >
  </div>
  <router-view />
</template>



<script>
export default {
  name: "Home",
  data() {
    return {
      data: localStorage.getItem("Ref") ? localStorage.getItem("Ref") : "",
    };
  },
};
</script>

<style>
.user {
  width: 90px;
  height: 35px;
  background: black;
  color: white;
}
.rendez {
  width: 120px;
  height: 35px;
  background: black;
  color: white;
  margin: 5px;
}
</style>