<template>
  <div class='py-8 bg-gray-200'>
    <div class="columns is-multiline">
      <div class="column is-12">
        <p class='text-center text-3xl sm:text-4xl mb-4'>
          <span class='uppercase'>Countries Summary</span>
        </p>
      </div>
      <div class="column is-12">
        <div class='card-style shadow-lg mx-8 lg:mx-16 p-4'>
          <table-section
            :summaryCountriesProps='summaryCountriesProps'
          ></table-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableSection from '@/views/countries/Table.vue';

export default {
  components: { TableSection },
  props: {
    summaryCountriesProps: Array
  }
}
</script>

<style scoped>
.card-style {
  background-color: white;
  border-radius: 20px;
}
</style>