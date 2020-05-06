import numeral from 'numeral';

export default {
  methods: {
    thousandSeperate(num) {
      return numeral(num).format('0,0');
    }
  }
}