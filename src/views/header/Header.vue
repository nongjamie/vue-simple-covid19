<template>
  <div class="bg-style h-screen">
    <div class='flex flex-col items-center justify-center h-full'>
      <p class='text-4xl sm:text-5xl md:text-6xl text-white text-center'>
        COVID19 CRISIS SUMMARY
      </p>
      <p class='text-3xl sm:text-4xl md:text-5xl text-white text-center uppercase'>
        {{ summaryDateProps ? setDateFormat(summaryDateProps, "DD MMMM YYYY") : '' }}
      </p>
      <p class='text-xs sm:text-sm md:text-base text-white text-center uppercase mt-4 cursor-pointer' @click='creditClicked()'>
        Created by Sathira K.
      </p>
    </div>
  </div>
</template>

<script>
import dateMixin from '@/mixins/date.js';

export default {
  mixins: [ dateMixin ],
  props: {
    summaryDateProps: String,
    githubLink: 'https://github.com/nongjamie'
  },
  methods: {
    creditClicked() {
      window.location.href = this.githubLink;
    }
  }
}
</script>

<style scoped>
.bg-style {
  width: 100%;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), 
  url("https://cdn3.eyeem.com/thumb/4d63967484f539e700208e60ad71ca5ebafabd7f-1527513585138/w/850");
  background-attachment: fixed;
}
</style>