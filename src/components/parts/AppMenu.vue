<template>
    <nav>
        <ul>
            <li><router-link to="./">Home</router-link></li>
            <li><router-link to="./events">Events</router-link></li>
            <li><a href="https://faq.eichkamp.rocks" target="_blank">Eichkamp FAQ</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppMenu'
}
</script>

<style>
@import '../../assets/css/menu.css'
</style>