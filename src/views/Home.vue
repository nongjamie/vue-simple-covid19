<template>
  <div>
    <header-section
      :summaryDateProps="summaryDate"
    ></header-section>
    <global-section
      :summaryGlobalProps="summaryGlobal"
    ></global-section>
    <countries-section
      :summaryCountriesProps="summaryCountries"
    ></countries-section>
  </div>
</template>

<script>
import HeaderSection from '@/views/header/Header.vue';
import GlobalSection from '@/views/global/Global.vue';
import CountriesSection from '@/views/countries/Countries.vue';
import summaryService from '@/service/summaryService.js';
import { mapActions } from 'vuex';

export default {
  components: { HeaderSection, GlobalSection, CountriesSection },
  data() {
    return {
      summaryDate: null,
      summaryGlobal: null,
      summaryCountries: null,
    }
  },
  mounted() {
    this.fetchSummary();
  },
  methods: {
    ...mapActions({
      startLoading: 'loading/start',
      stopLoading: 'loading/stop',
    }),
    async fetchSummary() {
      this.startLoading();
      try {
        const result = await summaryService.getSummary();
        this.summaryDate = result.data.Date;
        this.summaryGlobal = {...result.data.Global};
        this.summaryCountries = [...result.data.Countries];
      } catch(err) {
        console.log(err.response);
      } finally {
        this.stopLoading();
      }
    }
  }
}
</script>

<style scoped>
.horizontalLine {
   width: 100%; 
   text-align: center; 
   border-bottom: 2px solid grey; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
} 
.horizontalLine .wordMiddle { 
    background:#fff; 
    padding:0 10px; 
}
</style>