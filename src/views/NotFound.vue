<template>
  <main class="main events">
    <div class="header micro"><div class="overlay"></div></div>
    <div class="content">
      <h1>Page not found</h1>
      <p>Sorry, we were unable to find the page you are looking for.</p>
      <router-link to="/" style="text-decoration: underline;">Return to home</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>