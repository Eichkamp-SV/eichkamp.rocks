<template>
    <prismic-rich-text :field="slice.primary.text" />
</template>

<script>
export default {
    name: 'Text',
    props: {
        slice: Object
    }
}
</script>