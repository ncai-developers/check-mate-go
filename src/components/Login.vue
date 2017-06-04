<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="width1">
        <label for="username">Usuario</label>
        <input v-focused @keyup.enter="$refs.password.focus" ref="username" name="username" />
      </div>
    </div>
    <div class="row justify-center">
      <div class="width1">
        <label for="password">Contraseña</label>
        <input @keyup.enter="commitUser" ref="password" type="password" name="password" />
      </div>
    </div>
    <button @click="commitUser">
      Entrar
    </button>
  </div>
</template>

<script>
export default {
  props: ['login'],
  methods: {
    commitUser(){
      this.$store.commit({
        type: 'ADMIN',
        user: {
          username: this.$refs.username.value,
          password: this.$refs.password.value
        }
      });
      this.$emit('login');
    }
  },
  // data(){
  //   return {};
  // }
};
</script>

<style>
</style>
