<template>
  <main class="main home">
    <app-header :data="document.data" :variant="'small'" />

    <div class="content">
      <SliceZone :slices="document.data.body" :resolver="({ sliceName }) => slices[sliceName]"/>
    </div>
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Text from '../components/slices/Text'
import EventList from '../components/slices/EventList'
import AppHeader from '../components/parts/AppHeader'

export default {
  name: 'Events',
  components: {
    SliceZone,
    AppHeader
  },
  data () {
    return {
      document: {
        data: {
          background_image: {
            url: ""
          },
          headline: "",
          subtitle: ""
        },
      },
      slices: {
        Text, 
        EventList
      },
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('events_page')
        .then((document) => {
          if (document) {
            this.document = document;
          } else {
            this.$router.push({ name: 'not-found' })
          }
        });
    },
  },
  created () {
    this.getContent();
  }
}
</script>