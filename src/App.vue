<template>
  <section>
    <the-header></the-header>
    <post-header></post-header>
    <router-view></router-view>
  </section>
</template>

<script>
import theHeader from './layout/TheHeader.vue';
export default {
  components: {
    theHeader
  }
}
  
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: sans-serif;

}

body {
  margin: 0;
  
  overflow-x: hidden;
 

  background-color: #f0f2fa;
  font-family: "PT Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial",
    sans-serif;
  color: #555f77;
  -webkit-font-smoothing: antialiased;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}


</style>