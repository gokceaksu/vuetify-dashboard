<template>
  <section>
    <v-container>
      <v-row align="center">
        <v-card-title>Hizmet sağlayıcılar</v-card-title>
        <v-select
          :items="icapUsers"
          :item-text="icapUsers.text"
          :item-value="icapUsers.value"
        />
      </v-row>

      <v-form ref="form">
        <v-row>
          <v-col>
            <v-text-field
              v-model="ad"
              label="Ad(Ünvan)"
              :rules="notEmptyRule"
            />
            <v-text-field
              v-model="soyad"
              label="Soyad"
              :rules="notEmptyRule"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="kullaniciAdi"
              label="Kullanıcı Adı"
              :rules="notEmptyRule"
            />
            <v-text-field
              v-model="sifre"
              label="Şifre"
              :rules="notEmptyRule"
            />
          </v-col>
        </v-row>
        <v-btn
          :disabled="false"
          color="blue"
          class="mr-4"
          @click="login"
        >
          Kaydet
        </v-btn>
        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Temizle
        </v-btn>
      </v-form>
    </v-container>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      notEmptyRule: [
        v => !!v || 'Boş olamaz',
      ],
      ad: '',
      soyad: '',
      kullaniciAdi: '',
      sifre: '',
    }),
    computed: mapGetters(['icapUsers']),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      saveUser () {
        if (this.validate) {

        }
      },
    },
  }
</script>

<style>

</style>
