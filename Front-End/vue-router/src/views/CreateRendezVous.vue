<template>
  <div>
    <form @submit="InsertRendezVous">
      <label>Date:</label>
      <input
        type="Date"
        @change="CurrentData"
        v-model="date"
        id="fname"
        name="fname"
      />
      <label>Horaire:</label>
      <select v-model="Horaire">
        <option v-for="tm in time" :key="tm">
          {{ tm }}
        </option>
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
        "08:00:00",
        "09:00:00",
        "10:00:00",
        "11:00:00",
        "12:00:00",
        "14:00:00",
        "15:00:00",
        "16:00:00",
        "17:00:00",
        "18:00:00",
      ],
      date: "",
      Horaire: "",
      Consultation: "",
      showExistTime: false,
      data: "",
    };
  },
  methods: {
    async InsertRendezVous(e) {
      e.preventDefault();
      let Ref = localStorage.getItem("Ref");
      await fetch("http://localhost/brief6/rendezVous/insert", {
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

      this.date = "";
      this.Horaire = "";
      this.Consultation = "";
    },

    async CurrentData(e) {
      e.preventDefault();
      let resp = await fetch("http://localhost/brief6/rendezVous/checkTime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Date: this.date,
        }),
      });

      this.data = await resp.json();
  
      for (let i = 0; i < this.time.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
            if(this.data[j].time == this.time[i])
            {
                this.time.splice(i, 1);
            }
            
        }
      }

      // this.time.map((e,i)=>{
      //   this.data.map(f=>{
      //     e == f.time ?  this.time.splice(i, 1) : null
      //   })
      // }) 

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