<template>
    <div class="event-list">
    <div class="event-list__no-events" v-if="eventCount == 0">There are no upcoming events.</div>
    <div class="event-list__list" v-else>
      <ul>
        <li v-for="event in events" v-bind:key="event.start_date">
          <div class="event-list__event">
            <p class="event-list__title">{{ $prismic.asText(event.data.title) }}</p>
            <p class="event-list__date">
              <font-awesome-icon :icon="['far', 'calendar-alt']"/>
              {{ formatDate(event.data.start_date, event.data.end_date) }}
            </p>
            <prismic-rich-text :field="event.data.description" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  props: { slice: Object },
  data () {
    return {
      events: {},
      eventCount: -1 // indicates that eventlist was not yet loaded
    }
  },
  methods: {
    getContent () {
    this.$prismic.client.query(
        [
          this.$prismic.Predicates.at('document.type','event'),
          this.$prismic.Predicates.dateAfter('my.event.end_date', this.nowAsGmt()),
        ],
        {
          orderings: '[my.event.start_date]'
        }
      ).then(res => {
        this.eventCount = res.total_results_size

        if (res.total_results_size > 0) {
          this.events = res.results
        }
      })
    },
    formatDate (dateTimeStart, dateTimeEnd) {
      let dateStart = new Date(dateTimeStart);
      let dateEnd = new Date(dateTimeEnd);

      let dateOptions = {weekday: 'short', year: 'numeric', month: 'short', day:'numeric'}
      let timeOptions = {hour: '2-digit', minute: '2-digit'}
      
      let strDateStart = dateStart.toLocaleDateString('en', dateOptions)
      let strTimeStart = dateStart.toLocaleTimeString('de-de', timeOptions)
      let strDateEnd = dateEnd.toLocaleDateString('en', dateOptions)
      let strTimeEnd = dateEnd.toLocaleTimeString('de-de', timeOptions)

      if (strDateStart == strDateEnd) {
        return strDateStart + ' | ' + strTimeStart + ' - ' + strTimeEnd;
      }
      
      return strDateStart + ' - ' + strDateEnd
    },
    nowAsGmt() {
      return new Date().toISOString().split(".")[0]+'+0000'
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style>
@import '../../assets/css/eventlist.css'
</style>