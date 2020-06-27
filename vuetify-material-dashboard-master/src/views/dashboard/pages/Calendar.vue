<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      value: '',
      ready: false,
    }),
  }
</script>
