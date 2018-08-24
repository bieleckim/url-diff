<template>
  <div id="app">
    <header class="text-center mt-2">
      <h1 class="text-gray">Url Diff</h1>
    </header>
    <div class="divider"></div>
    <div class="container">
      <div class="columns">
        <div class="column col-12">
          <CompareForm/>
        </div>
      </div>
    </div>
    <footer class="text-gray">
      <p>Designed and built with <span class="text-error">♥</span> by <a href="https://github.com/bieleckim" target="_blank">Marek Bielecki</a>. Licensed under the MIT License.</p>
    </footer>
  </div>
</template>

<script>
import CompareForm from './components/CompareForm.vue'

export default {
  name: 'app',
  components: {
      CompareForm
  }
}
</script>

<style>
  #app {
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
  }

  footer {
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
  }
</style>
