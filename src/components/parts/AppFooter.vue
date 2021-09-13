<template>
    <div class="footer">
      <div class="inner">
        <ul>
          <li v-for="item in document.data.links" :key="item.link.url">
            <prismic-link :field="item.link">
              <font-awesome-icon v-if="item.icon !== 'envelope' && item.icon !== 'globe'" :icon="['fab', item.icon]"/>
              <font-awesome-icon v-else :icon="['far', item.icon]"/>{{ item.label }}
            </prismic-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      document: {
        data: {
          links: []
        }
      }
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('footer_links')
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

<style>
@import "../../assets/css/footer.css";
</style>