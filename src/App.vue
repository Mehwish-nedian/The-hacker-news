<template>
  <section>
    <the-header></the-header>
    <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
        <component :is="Component"></component>
    </transition>
  </router-view>
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
  
  margin: 3rem auto 0 auto;
  max-width: 50rem;
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


.route-enter-active {
  transition: opacity 0.3s ease-out;
}
.route-leave-active {
  transition: opacity 0.3s ease-in;
}
.route-enter-from,
.route-button-leave-to {
  opacity: 0;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}

</style>