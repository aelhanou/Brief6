<template>
  <form @submit="InsertUser">
    <label>nom:</label>
    <input type="Text" v-model="nom" id="fname" name="fname" />
    <label>Prenom:</label>
    <input type="Text" v-model="Prenom" id="fname" name="fname" />
    <label>Email:</label>
    <input type="email" v-model="Email" id="fname" name="fname" />
    <label>Age:</label>
    <input type="number" v-model="Age" id="fname" name="fname" />
    <label>Phone:</label>
    <input type="number" v-model="Phone" id="fname" name="fname" />
    <input type="submit" class="btn" value="Submit" />
  </form>
</template>

<script>
export default {
  name: "Form",
  components: {},
  data() {
    return {
      nom: "",
      Prenom: "",
      Email: "",
      Age: "",
      Phone: "",
    };
  },
  methods: {
    async InsertUser(e) {
      e.preventDefault();
      if (
        !this.nom ||
        !this.Prenom ||
        !this.Email ||
        !this.Age ||
        !this.Phone
      ) {
        alert("fields is empty");
        return;
      }

      let resp = await fetch("http://localhost/brief6/Register/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName: this.nom,
          LastName: this.Prenom,
          Age: this.Age,
          Email: this.Email,
          tel: this.Phone,
        }),
      });

      let data = await resp.json();

        
      if (data.Ref !== "empty fields") {
            this.$router.push("/rendezVous")
            localStorage.setItem("Ref",data.Ref)
      }

      this.nom = "";
      this.Prenom = "";
      this.Age = "";
      this.Email = "";
      this.Phone = "";
    },
  },
};
</script>

<style>
form {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

input {
  height: 25px;
  text-align: center;
  border-radius: 3px;
}
label {
  display: flex;
  justify-content: start;
  margin: 7px 0px 7px;
}

.btn {
  width: 80px;
  height: 30px;
  background: black;
  color: white;
  margin: 8px 0px 0px 0px;
}
</style>