<template>
  <main class="main home">
    <app-header :data="document.data" :variant="'big'" />
      
    <div class="content">
      <slice-zone :slices="document.data.body" :resolver="({ sliceName }) => slices[sliceName]"/>
    </div>
  </main>
</template>

<script>
import SliceZone from 'vue-slicezone'
import TextBlock from '../components/slices/TextBlock'
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
        TextBlock
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