import moment from 'moment';

export default {
  methods: {
    setDateFormat(timestamp, formatString) {
      return moment(timestamp).format(formatString);
    }
  }
}