<template>
  <div id="app">
    <header class="top-0 text-white font-bold text-2xl p-4">
      Customize Vue Formulate Components Using Tailwind.css
    </header>
    <my-textbox />
    <my-search />
    <my-textarea />
    <my-select />
    <footer class="text-white text-l p-4">
      <a
        class="text-white mr-6"
        href="https://vueformulate.com/"
        target="_blank"
      >Vue Formulate Docs</a>
      <a
        class="text-white"
        href="https://tailwindcss.com/"
        target="_blank"
      >Tailwind.css Docs</a>
    </footer>
  </div>
</template>

<script>
import myTextbox from './components/my-textbox.vue'
import mySearch from './components/my-search.vue'
import myTextarea from './components/my-textarea'
import mySelect from './components/my-select'

export default {
  name: 'App',
  components: {
    myTextbox,
    mySearch,
    myTextarea,
    mySelect,
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  background-color:  #2c3e50;
}
</style>
