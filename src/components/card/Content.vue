<template>
  <div class='card-style shadow-xl p-2 h-full py-3' :style="getGradientBg()">
    <div 
      class='text-left text-white ml-2 text-base font-bold' 
    >
      <slot name='header'></slot>
    </div>
    <div
      class='text-right text-white mr-4 text-base italic' 
    >
      <slot name='footer'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gradientBgTypeProps: Number
  },
  methods: {
    getGradientBg() {
      switch(this.gradientBgTypeProps) {
        case 1:
          return {
            'background': 'rgb(0,0,0)',
            'background': 'linear-gradient(148deg, rgba(0,0,0,1) 0%, rgba(22,125,240,1) 100%)' 
          }
          break;
        case 2:
          return {
            'background': 'rgb(0,0,0)',
            'background': 'linear-gradient(148deg, rgba(0,0,0,1) 0%, rgba(255,59,59,1) 100%)'
          }
          break;
        case 3:
          return {
            'background': 'rgb(0,0,0)',
            'background': 'linear-gradient(148deg, rgba(0,0,0,1) 0%, rgba(66,255,59,1) 100%)'
          }
          break;
      }
    }
  }
}
</script>

<style scoped>
.card-style {
  border-radius: 10px;
}
</style>