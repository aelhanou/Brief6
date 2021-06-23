<template>
  <tr class="trHead">
    <th>Date</th>
    <th>Horaire</th>
    <th>Type De Consultation</th>
    <th>Action</th>
  </tr>
  <tr v-for="dt in data" :key="dt.id">
    <td>{{ dt.Date }}</td>
    <td>{{ dt.time }}</td>
    <td>{{ dt.typeDeConsultaion }}</td>
    <td>
      <button @click="Edit(dt.id)">Edit</button>
      <button @click="Delete(dt.id)">Delete</button>
    </td>
  </tr>

  
</template>

<script>
export default {
  name: "TableElements",
  props : {
    data : Array
  }
  ,
  methods: {

    async Delete(id) {
        
      await fetch("http://localhost/brief6/rendezVous/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      this.$emit("DeleteEvent")
     
    },
    async Edit(id) {
        this.$emit("editRendezVous",id)
    },
  },
    $emits: ["editRendezVous","DeleteEvent"],
};
</script>

<style>
th {
  border: 3px solid black;
}
</style>