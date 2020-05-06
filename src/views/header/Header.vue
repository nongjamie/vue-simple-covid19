<template>
  <div class="bg-style">
    <div class='flex flex-col items-center justify-center' style='height: 100%;'>
      <p class='text-4xl sm:text-5xl md:text-6xl text-white text-center'>
        COVID19 CRISIS SUMMARY
      </p>
      <p class='text-3xl sm:text-4xl md:text-5xl text-white text-center uppercase'>
        {{ setDateFormat(summaryDateProps, "DD MMMM YYYY") }}
      </p>
    </div>
  </div>
</template>

<script>
import dateMixin from '@/mixins/date.js';

export default {
  mixins: [ dateMixin ],
  props: {
    summaryDateProps: String
  }
}
</script>

<style scoped>
.bg-style {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), 
  url("https://cdn3.eyeem.com/thumb/4d63967484f539e700208e60ad71ca5ebafabd7f-1527513585138/w/850");
}
</style>