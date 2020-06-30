<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      if (localStorage.getItem('access_token') == null) {
        this.$router.push('/login')
      } else {
        this.$router.push('/index')
      }
    },
  }
</script>
