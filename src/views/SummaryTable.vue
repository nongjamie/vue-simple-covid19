<template>
  <div>
    <div class="columns">
      <div class="column is-3">
        <b-field>
            <b-select expanded v-model='selectedOption' placeholder="Sort selection">
                <option
                    v-for="option in options"
                    :value="option.id"
                    :key="option.id">
                    {{ option.name }}
                </option>
            </b-select>
        </b-field>
      </div>
      <div class="column is-hidden-mobile"> </div>
      <div class="column is-4">
        <b-field>
            <b-input v-model="query" placeholder='Search the country'></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-table
          class='shadow-lg p-4'
          :data="filteredCountries"
          striped
          mobile-cards
          paginated
          :per-page="10"
          :current-page.sync="currentPage"
          :pagination-simple="false"
          :pagination-position="'bottom'"
        >
          <template slot-scope="props">
              <b-table-column field="country_code" label="Code">
                  {{ props.row.CountryCode }}
              </b-table-column>

              <b-table-column field="country" label="Country">
                  {{ props.row.Country }}
              </b-table-column>

              <b-table-column field="confirmed" label="Confirmed">
                  {{ thousandSeperate(props.row.TotalConfirmed) | unreportedCase }}
              </b-table-column>

              <b-table-column field="deaths" label="Deaths">
                  {{ thousandSeperate(props.row.TotalDeaths) | unreportedCase }}
              </b-table-column>

              <b-table-column field="recovered" label="Recovered">
                  {{ thousandSeperate(props.row.TotalRecovered) | unreportedCase }}
              </b-table-column>

              <b-table-column field="date" label="Date" centered>
                  <span class="tag is-danger">
                      {{ setDateFormat(props.row.Date, "YYYY/MM/DD") }}
                  </span>
              </b-table-column>
          </template>

          <template slot="empty">
              <section class="section">
                  <div class="content has-text-grey has-text-centered">
                      <p>
                          <b-icon
                              icon="emoticon-sad"
                              size="is-large">
                          </b-icon>
                      </p>
                      <p>Nothing here.</p>
                  </div>
              </section>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import dateMixin from '@/mixins/date.js';
import numberMixin from '@/mixins/number.js';

export default {
  filters: {
    unreportedCase(value) {
      return (value === '0') ? 'unreported' : value;
    }
  },
  mixins: [ numberMixin, dateMixin ],
  props: {
    summaryCountriesProps: Array
  },
  data() {
    return {
      options: [
        {id: 0, name: 'Sort by confirmed', value: 'TotalConfirmed'},
        {id: 1, name: 'Sort by deaths', value: 'TotalDeaths'},
        {id: 2, name: 'Sort by recovered', value: 'TotalRecovered'},
      ],
      selectedOption: 0,
      query: '',
      currentPage: 1
    }
  },
  computed: {
    filteredCountries() {
      if(this.summaryCountriesProps) {
        let filteredResult = this.summaryCountriesProps.filter(el => {
          let userQuery = this.query.trim().toLowerCase();
          if(userQuery.length > 0) {
            let searchQuery = `${el.Country}`.toLowerCase();
            return searchQuery.includes(userQuery);
          } return true;
        });
        return this._.orderBy(filteredResult, [this.options[this.selectedOption].value], ['desc']);
      }
      else return [];
    }
  }
}
</script>

<style scoped>
.card-style {
  border-radius: 10px;
}
</style>