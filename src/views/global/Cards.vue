<template>
  <div>
    <div class="columns">
      <div class="column is-6 is-4-widescreen">
        <div class="columns is-multiline">
          <div class="column is-12">
            <content-card :gradientBgTypeProps='1'>
              <p slot='header'>Total Confirmed</p> : 
              <p slot='footer'>{{summaryGlobalProps ? thousandSeperate(summaryGlobalProps.TotalConfirmed) : ''}}</p>
            </content-card>
          </div>
          <div class="column is-12">
            <content-card :gradientBgTypeProps='1'>
                <p slot='header'>New Confirmed</p> : 
                <p slot='footer'>{{summaryGlobalProps ? thousandSeperate(summaryGlobalProps.NewConfirmed) : ''}}</p>
            </content-card>
          </div>
        </div>
      </div>
      <div class="column is-6 is-8-widescreen">
        <div class="columns">
          <div class="column is-6">
            <content-card :gradientBgTypeProps='2'>
                <p slot='header'>Total Deaths</p> : 
                <p slot='footer'>{{summaryGlobalProps ? thousandSeperate(summaryGlobalProps.TotalDeaths) : ''}}</p>
            </content-card>
          </div>
          <div class="column is-6">
            <content-card :gradientBgTypeProps='2'>
                <p slot='header'>New Deaths</p> : 
                <p slot='footer'>{{summaryGlobalProps ? thousandSeperate(summaryGlobalProps.NewDeaths) : ''}}</p>
            </content-card>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <content-card :gradientBgTypeProps='3'>
                <p slot='header'>Total Recovered</p> : 
                <p slot='footer'>{{summaryGlobalProps ? thousandSeperate(summaryGlobalProps.TotalRecovered) : ''}}</p>
            </content-card>
          </div>
          <div class="column is-6">
            <content-card :gradientBgTypeProps='3'>
                <p slot='header'>New Recovered</p> : 
                <p slot='footer'>{{summaryGlobalProps ? thousandSeperate(summaryGlobalProps.NewRecovered) : ''}}</p>
            </content-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberMixin from '@/mixins/number.js';

export default {
  mixins: [ numberMixin ],
  props: {
    summaryGlobalProps: Object
  }
}
</script>

<style scoped>
</style>