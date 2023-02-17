<template>
  <div id="app">
    <div class="content"> <router-view></router-view></div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      mean: [],
      breadcrumbList: []
    }
  },
  components: {},
  methods: {},
  mounted() {

  },
  created() {

  },
  watch: {}
}
</script>

<style>

ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

html body{
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.content{
  flex-grow: 1;
}



</style>
