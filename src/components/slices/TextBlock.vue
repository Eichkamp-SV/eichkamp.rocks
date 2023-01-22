<template>
    <prismic-rich-text 
      :class="slice.slice_label == 'infobox' ? 'infobox': ''" 
      :field="slice.primary.text_area" />
</template>

<script>
export default {
    name: 'TextBlock',
    props: {
        slice: Object
    }
}
</script>