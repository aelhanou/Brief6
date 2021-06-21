<template>
  <div class="btn1">
      <router-link to="/CreateRendezVous"><button class="createBtn">{{title}}</button></router-link>
  </div>
  <router-view />
</template>

<script>
export default {
    name : "Button",
    props : {
        title : String
    }
}
</script>

<style scoped>
    .btn1 {
        width: 80%;
    }
    .createBtn {
        width: 80px;
        height: 30px;
        float: right;
        background: black;
        color: white;
    }
</style>