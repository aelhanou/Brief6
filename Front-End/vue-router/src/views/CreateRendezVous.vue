<template>
  <div>
    <form @submit="InsertRendezVous">
      <label>Date:</label>
      <input type="Date" v-model="date" id="fname" name="fname" />
      <label>Horaire:</label>
      <select v-model="Horaire">
        <option v-for="tm in time" :key="tm">{{ tm }}</option>
      </select>
      <label v-show="showExistTime">This time is alerady exist </label>
      <label>Type De Consultation:</label>
      <textarea v-model="Consultation" cols="30" rows="10"></textarea>
      <input type="submit" class="btn" value="Submit" />
    </form>
    <router-link to="/rendezVous">Go back to Rendez Vous</router-link> 
  </div>
</template>

<script>
export default {
  name: "CreateRendezVous",
  data() {
    return {
      time: [
        "8:00:00",
        "9:00:00",
        "10:00:00",
        "11:00:00",
        "14:00:00",
        "15:00:00",
        "16:00:00",
        "17:00:00",
      ],
      date: "",
      Horaire: "",
      Consultation: "",
      showExistTime : false
    };
  },
  methods: {
    async InsertRendezVous(e) {
      e.preventDefault();
      let Ref = localStorage.getItem("Ref");
      let resp = await fetch("http://localhost/brief6/rendezVous/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Date: this.date,
          time: this.Horaire,
          reference_id: Ref,
          typeDeConsultaion: this.Consultation,
        }),
      });

        let data = await resp.json()
        // data = [...data]

        console.log(data);
        if(data == 'exist')
        {
            this.showExistTime = true
        }
      this.date = "";
      this.Horaire = "";
      this.Consultation = "";
    },
  },
};
</script>

<style>
select {
  height: 25px;
  text-align: center;
  border-radius: 3px;
}
</style>