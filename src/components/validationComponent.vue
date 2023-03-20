<template>
  <div class="container mt-5">
    <Form class="needs-validation">
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationCustom01">Prenom</label>
          <Field
            name="firstName"
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="Prenom"
            :rules="checkFisrtName"
          />
          <ErrorMessage style="color: red" name="firstName" />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom02">Nom</label>
          <Field
            name="lastName"
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Nom"
            :rules="checkLastName"
          />
          <ErrorMessage style="color: red" name="lastName" />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom03">Email</label>
          <Field
            name="Email"
            type="Email"
            class="form-control"
            id="validationCustom03"
            placeholder="Email"
            :rules="checkEmail"
          />
          <ErrorMessage style="color: red" name="Email" />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom04">Password</label>
          <Field
            ref="Password"
            name="Password"
            type="password"
            class="form-control"
            id="validationCustom04"
            placeholder="Password"
            :rules="checkPassword"
          />
          <ErrorMessage style="color: red" name="Password" />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom05">Configuration Password</label>
          <Field
            name="CPassword"
            type="password"
            class="form-control"
            id="validationCustom05"
            placeholder="Configuration Password"
            :rules="checkCPassword"
          />
          <ErrorMessage style="color: red" name="CPassword" />
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <Field
            name="checkAccept"
            class="form-check-input"
            type="checkbox"
            id="invalidCheck"
            v-model="isChecked"
            :rules="checkAcceptConditions"
          />
          <label class="form-check-label" for="invalidCheck">
            Acceptez les Terms et Conditions
          </label>
          <br>
        </div>
        <ErrorMessage style="color: red" name="checkAccept" />
      </div>
      <button class="btn btn-primary mt-3" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script lang="ts">
import type { HtmlAttributes } from "csstype";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "ValidationComponent",
  data(){
    return{
        isChecked : false,
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    // methode pour la validation de nom
    checkFisrtName(value: any) {
      if (value) {
        return true;
      }
      return "Prenom est Obligatoire";
    },
    // methode pour la validation de prenom
    checkLastName(value: any) {
      if (!value) {
        return "Nom est Obligatoire";
      }
      return true;
    },
    // methode pour la validation de l'email
    checkEmail(value: any) {
      if (!value) {
        return "Email est Obligatoire";
      }
      const rgex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!rgex.test(value)) {
        return "Email is not Valide";
      }
      return true;
    },
    checkPassword(value: any) {
      if (!value) {
        return "Password est Obligatoire";
      }
      if (value.length < 8) {
        return "Password doit Avoir au Moins 8 Caractères";
      }
      return true;
    },
    // methode pour la validation de password
    checkCPassword(value: any) {
      let password = document.getElementById("validationCustom04") as HTMLInputElement;

      if (!value) {
        return "Password est Obligatoire";
      }
      if (value.length < 8) {
        return "Password doit Avoir au Moins 8 Caractères";
      }
      if (value != password.value) {
        return "Password et Configuration Password sont Différents";
      }
      //   if (value != (this.$refs.Password as HTMLInputElement).value) {
      //     return "Password et Configuration Password sont Différents";
      //   }
      return true;
    },
    // methode pour la validation de configuration de password
    checkAcceptConditions(value: any) {
      if (value  == false) {
        return "Acceptz vous les Conditions";
      }
      return true;
    },
  },
};
</script>
