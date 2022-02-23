<template>
  <div>
    <router-link :to="{ name: 'home' }">HOME</router-link>
    <router-link :to="{ name: 'protected' }">PROTECTED</router-link>
    <router-link :to="{ name: 'login' }">LOGIN</router-link>
    <router-link :to="{ name: 'register' }">REGISTER</router-link>
  </div>
  <router-view/>
</template>

<script setup>

</script>