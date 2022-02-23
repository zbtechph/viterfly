<template>
  <form-component @formSubmit="formSubmit">
    <input-component label="Email" type="email" v-model="state.email" />
    <input-component label="Password" type="password" v-model="state.password" />
  </form-component>

</template>

<script setup>
import { reactive } from 'vue'
import { Appwrite } from 'appwrite'
import FormComponent from '../../components/FormComponent.vue'
import InputComponent from '../../components/InputComponent.vue'

const appwrite = new Appwrite();
appwrite.setEndpoint(import.meta.env.VITE_APPWRITE_API)
  .setProject(import.meta.env.VITE_APPWRITE_PID)

const state = reactive({
  email: "",
  password: ""
})

const formSubmit = () => {
  appwrite.account.createSession(state.email, state.password)
    .then(response => console.log(response))
    .catch(err=>alert(err.message))
}

</script>