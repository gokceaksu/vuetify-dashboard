<template>
  <v-container class="fill-height">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="8"
      >
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar
              dark
              color="blue"
            >
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-alert
              color="error"
              :value="error"
              icon="close"
            >
              The username or the password are incorrect.
            </v-alert>
            <v-card-text>
              <v-text-field
                v-model="username"
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
              />

              <v-text-field
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              />
            </v-card-text>
            <v-divider light />
            <v-card-actions>
              <v-btn
                to="/signup"
                round
                color="indigo"
                dark
              >
                Sign up
              </v-btn>
              <v-spacer />
              <v-btn
                round
                color="primary"
                dark
                @click.prevent="login()"
              >
                Login
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      username: '',
      password: '',
      error: false,
    }),
    methods: {

      login () {
        this.$store.dispatch('LOGIN', {
          username: this.username,
          password: this.password,
        })
          .then(success => {
            this.$router.push('/')
          })
          // eslint-disable-next-line handle-callback-err
          .catch(error => {
            this.error = true
          })
      },
    },
  }
</script>

<style>

</style>
