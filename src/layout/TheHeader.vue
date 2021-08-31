<!--<template>
    <header>
       <nav>
           <a  href="#">
               <img class="logo" src="../assets/images/logo.png" alt="logo" />
            </a>
            <ul>
                <li><router-link to="/top">Top</router-link></li>
                <li><router-link to="/new">New</router-link></li>
                <li><router-link to="/show">Show</router-link></li>
                <li><router-link to="/ask">Ask</router-link></li>
                <li><router-link to="/jobs">Jobs</router-link></li>
                <li><a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">Built with Vue</a> </li>
            </ul>
        
       </nav>

    </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #f60;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
header a {
  text-decoration: none;
 
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  
}
a:active,
a:hover,
a.router-link-active {
  font-weight: 400;
}


header nav {
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  /*justify-content: center;
  align-items: center;*/
  
}
li {
  margin: 0 0.5rem;
  font-size: 90%;
}
li:last-child{
    position: absolute;
    right: 7%;

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

</style>-->
<template>
<header>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <a  href="#">
          <img class="logo" src="../assets/images/logo.png" alt="logo" />
      </a>

      <ul class="pure-menu-list">
          <li class="pure-menu-item"><router-link to="/top">Top</router-link></li>
          <li class="pure-menu-item"><router-link to="/new">New</router-link></li>
          <li class="pure-menu-item"><router-link to="/show">Show</router-link></li>
          <li class="pure-menu-item"><router-link to="/ask">Ask</router-link></li>
          <li class="pure-menu-item"><router-link to="/jobs">Jobs</router-link></li>
          <li class="pure-menu-item"><a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">Built with Vue</a> </li>
      </ul>


        
     <!-- <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">News</a>
        </li>
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">Sports</a>
        </li>
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">Finance</a>
        </li>
      </ul>-->
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
