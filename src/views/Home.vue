<template>
  <main class="main home">
    <app-header :data="document.data" :variant="'big'" />
      
    <div class="content">
      <SliceZone :slices="document.data.body" :resolver="({ sliceName }) => slices[sliceName]"/>
    </div>
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import Text from '../components/slices/Text'
import AppHeader from '../components/parts/AppHeader'

export default {
  name: 'Home',
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
        Text
      }
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
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