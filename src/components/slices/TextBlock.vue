<template>
    <prismic-rich-text :field="slice.primary.text_area" />
</template>

<script>
export default {
    name: 'TextBlock',
    props: {
        slice: Object
    }
}
</script>