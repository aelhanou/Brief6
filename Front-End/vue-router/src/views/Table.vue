<template>
  <table>
    <TableElements :data="data" @editRendezVous="editRendezV" />
  </table>
  <div v-show="showFormEdit">
    <form @submit="saveEdit">
      <label>Date:</label>
      <input type="Date" v-model="date" id="fname" name="fname" />
      <label>Horaire:</label>
      <select v-model="Horaire">
        <option v-for="tm in time" :key="tm">{{ tm }}</option>
      </select>
      <label>Type De Consultation:</label>
      <textarea v-model="Consultation" cols="30" rows="10"></textarea>
      <div class="allbtn">
        <input @readUpdate="readd" type="submit" class="btn2" value="Submit" />
        <Cancel @click="cancel" title="Cancel" />
      </div>
    </form>
  </div>
</template>

<script>
import TableElements from "./TableElements.vue";
import Cancel from "./cancel.vue";
export default {
  name: "Table",
  data() {
    return {
      time: [
        "08:00:00",
        "09:00:00",
        "10:00:00",
        "11:00:00",
        "14:00:00",
        "15:00:00",
        "16:00:00",
        "17:00:00",
      ],
      showFormEdit: false,
      date: "",
      Horaire: "",
      Consultation: "",
      origin_id: -1,
      data: [],
    };
  },
  methods: {
    async readAll() {
      let Ref = localStorage.getItem("Ref");

      let resp = await fetch("http://localhost/brief6/rendezVous/readAll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          Ref: Ref,
        }),
      });

      this.data = await resp.json();
    },
    async editRendezV(id) {
      this.origin_id = parseInt(id);
      this.showFormEdit = true;
      let resp = await fetch("http://localhost/brief6/rendezVous/read_single", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.origin_id,
        }),
      });
      let data = await resp.json();

      this.date = data.Date;
      this.Horaire = data.time;
      this.Consultation = data.typeDeConsultaion;
    },
    async saveEdit(e) {
      e.preventDefault();

      await fetch("http://localhost/brief6/rendezVous/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.origin_id,
          Date: this.date,
          time: this.Horaire,
          typeDeConsultaion: this.Consultation,
        }),
      });

      this.readAll();
      this.showFormEdit = false;
    },

    cancel(e) {
      e.preventDefault();
      this.showFormEdit = false;
      this.origin_id = -1;
      this.date = "";
      this.Horaire = "";
      this.Consultation = "";
    },
  },
  components: {
    TableElements,
    Cancel,
  },
  created() {
    this.readAll();
  },
};
</script>

<style>
table {
  width: 80%;
  margin: auto;
  margin-top: 60px;
}
.allbtn {
  display: flex;
  flex-direction: row;
}
.btn2 {
  width: 80px;
  height: 30px;
  background: black;
  color: white;
  margin: 8px 0px 0px 0px;
}
</style>