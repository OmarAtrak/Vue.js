<template>
  <div class="container">
    <div class="mt-5">
      <table class="table">
        <tr>
          <td><label for="txtNom">Nom</label></td>
          <td>
            <input
              ref="nom"
              class="form-control"
              id="txtNom"
              type="text"
              style="width: 30%"
            />
          </td>
        </tr>
        <tr>
          <td><label for="txtAge">Age</label></td>
          <td>
            <input
              ref="age"
              class="form-control"
              id="txtAge"
              type="number"
              min="1"
              max="150"
              style="width: 30%"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="button" @click="welcomeName" value="Submit" />
          </td>
        </tr>
      </table>
      <label ref="lbl"></label>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Refs",
  methods: {
    welcomeName() {
      let lblMsg = this.$refs.lbl as HTMLLabelElement;
      let txtNom = this.$refs.nom as HTMLInputElement;
      let age = this.$refs.age as HTMLInputElement;
      if ((txtNom && txtNom.value.trim()) && (age.value && age.value.trim())) {
        lblMsg.innerText = "Hello " + txtNom.value + "\nYour Age is " + age.value;
        console.log(this.$refs);
      }
    },
  },
  mounted() {
    // console.log(this.$refs);
  },
};
</script>
