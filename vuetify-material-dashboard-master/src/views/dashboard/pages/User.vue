<template>
  <section>
    <v-container>
      <v-row align="center">
        <v-select
          :items="icapUsers"
          :item-text="icapUsers.text"
          :item-value="icapUsers.value"
          label="Standard"
        />
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters(['icapUsers']),
  }
</script>

<style>

</style>
