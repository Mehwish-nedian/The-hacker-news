<template>
    <header>
       <nav>
           <a  href="#">
               <img class="logo" src="../assets/images/logo.png" alt="logo" />
            </a>
            <ul>
                <li><router-link to="top">Top</router-link></li>
                <li><router-link to="/new">New</router-link></li>
                <li><router-link to="/show">Show</router-link></li>
                <li><router-link to="/ask">Ask</router-link></li>
                <li><router-link to="/jobs">Jobs</router-link></li>
                <li>Built with Vue</li>
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
  justify-content: center;
  align-items: center;
  
}
li {
  margin: 0 0.5rem;
}
li:last-child{
    position: absolute;
    right: 7%;
}
</style>
