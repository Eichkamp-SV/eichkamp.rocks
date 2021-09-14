<template>
  <div id="app">
    <app-menu/>
    <loading-overlay ref="loadingOverlay" />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import AppMenu from './components/parts/AppMenu.vue'
import AppFooter from './components/parts/AppFooter.vue'
import LoadingOverlay from './components/parts/LoadingOverlay.vue'

export default {
  name: 'App',
  components: {
    AppMenu,
    AppFooter,
    LoadingOverlay
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

@import "./assets/css/fonts.css";
@import "./assets/css/resetr.css";
@import "./assets/css/common.css";

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

</style>