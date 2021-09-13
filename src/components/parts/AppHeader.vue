<template>
    <div 
        class="header" 
        :class="variant == 'big' ? 'big': 'small'" 
        :style="{ backgroundImage: 'url(' + data.background_image.url + ')' }"
    >
      <div class="overlay"></div>
      <div class="inner">
        <h1>{{ $prismic.asText(data.headline) }}</h1>
        <h2 v-if="variant === 'big'">{{ $prismic.asText(data.subtitle) }}</h2>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    props: [ 'data', 'variant']
}
</script>

<style>
@import '../../assets/css/header.css'
</style>