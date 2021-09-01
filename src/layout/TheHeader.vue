<template>
<header>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <a  href="#">
          <img class="logo" src="../assets/images/logo.png" alt="logo" />
      </a>

      <ul class="pure-menu-list">
          <li class="pure-menu-item"><router-link to="/top/1">Top</router-link></li>
          <li class="pure-menu-item"><router-link to="/new/1">New</router-link></li>
          <li class="pure-menu-item"><router-link to="/show/1">Show</router-link></li>
          <li class="pure-menu-item"><router-link to="/ask/1">Ask</router-link></li>
          <li class="pure-menu-item"><router-link to="/jobs/1">Jobs</router-link></li>
          <li class="pure-menu-item"><a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">Built with Vue</a> </li>
      </ul>
    </div>
  </div>
</header>
</template>

<script>
  export default {
    name: "Navbar"
  };
</script>

<style scoped>
header a {
  text-decoration: none;
 
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  top: -12px;

  
}
  .pure-menu {
    background-color: #f60;
  }
  .pure-menu a {
    color: white;
  }


  @media only screen and (max-width: 1140px){
  li:last-child{
    right: 0px;
}
header nav{
  width: 95%;
}
li{
  margin: 0;
  font-size: 90%;
  width: 60px;
}
}
@media only screen and (max-width: 760px){
  li:last-child{
    visibility: hidden;
  }
}

</style>
