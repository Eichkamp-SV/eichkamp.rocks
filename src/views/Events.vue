<template>
  <main class="main home">
    <app-header :data="document.data" :variant="'small'" />
    <div ref="test" class="content">
      <slice-zone :slices="document.data.body" :resolver="({ sliceName }) => slices[sliceName]"/>
    </div>
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import TextBlock from '../components/slices/TextBlock'
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
      events: [],
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
        TextBlock,
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
            let overlay = this.$parent.$refs.loadingOverlay.$refs.overlay
            overlay.classList.add('hidden');
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