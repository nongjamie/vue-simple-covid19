<template>
  <div class='py-8'>
    <div class="columns is-multiline">
      <div class="column is-12">
        <p class='text-center text-3xl sm:text-4xl mb-4'>
          <span class='uppercase'>Global Summary</span>
        </p>
      </div>
      <div class="column is-12">
        <div class='px-10 lg:px-32'>
          <cards-section
            :summaryGlobalProps='summaryGlobalProps'
          ></cards-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardsSection from '@/views/global/Cards.vue';

export default {
  components: { CardsSection },
  props: {
    summaryGlobalProps: Object
  }
}
</script>

<style>
</style>