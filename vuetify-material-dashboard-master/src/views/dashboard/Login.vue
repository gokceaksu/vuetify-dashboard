<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="userid"
            :counter="10"
            :rules="nameRules"
            label="Kullanıcı Adı"
            prepend-icon="mdi-account-circle"
            required
          />
          <v-text-field
            v-model="password"
            :counter="10"
            :rules="nameRules"
            label="Şifre"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
            required
          />
          <v-btn
            :disabled="!valid"
            color="blue"
            class="mr-4"
            @click="login"
          >
            Login
          </v-btn>
          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      userid: '',
      password: '',
      nameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 10) || 'Username must be less than 10 characters',
      ],
      select: null,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      login () {
        if (this.validate) {
          console.log('login started...')
          this.$store.dispatch('login', {
            userid: this.userid,
            password: this.password,
          }).then(response => {
            this.$router.push('/index')
          })
        }
      },
    },
  }
</script>

<style>

</style>
