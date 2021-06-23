<template>
  <div>
    <p class="ref">REFERENCE : {{this.ref ? this.ref : null}}</p>
    <Logout title="Log out"/>
  </div>
    <Button title="Create" /> 
    <Table />
    
</template>

<script>
import Table from "./Table.vue";
import Button from "./Create.vue";
import Logout from "./Logout.vue";
export default {
  name: "rendezVous",
  data() {
    return {
      ref: "",
    };
  },
  components : {
      Table,
      Button,
      Logout
  }
  ,
  created(){
      this.ref = localStorage.getItem("Ref");
  }
};
</script>

<style>
</style>