<template>
  <div id="app">
    <app-menu/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppMenu from './components/parts/AppMenu.vue'
import AppFooter from './components/parts/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppMenu,
    AppFooter
  }
}
</script>

<style>
@import "./assets/css/fonts.css";
@import "./assets/css/resetr.css";
@import "./assets/css/common.css";
</style>