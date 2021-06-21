<template>
  <div>reference</div>
  <form @submit="checkRef">
    <label>REFERENCE:</label>
    <input type="Text" v-model="Ref" id="fname" name="fname" />
    <input type="submit" class="btn" value="Submit" />
  </form>
</template>

<script>
export default {
  name: "reference",
  date() {
    return {
      Ref: "",
    };
  },
  methods: {
    async checkRef(e) {
      e.preventDefault();

      if (!this.Ref) {
        alert("Fill in the field");
        return;
      }

      let resp = await fetch("http://localhost/brief6/Login/checkRef", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ref: this.Ref,
        }),
      });

      let data = await resp.json();

      if (data.token != "is invalid") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("Ref", this.Ref);
        this.$router.push("/rendezVous");
      }

      this.Ref = ''
    },
  },
};
</script>

<style>
</style>