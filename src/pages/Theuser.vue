<template>
    <div class="container">
        <h2>User: {{user.id}}</h2>
        <br>
        <p>Created: {{user.created}} days ago</p>
        <p>Karma: {{user.karma}}</p>
        <br>
        <br>
        <p>
            {{user.about}}
        </p>
        <br>
        <br>
        <p>submissions | comments</p>
        
    </div>
</template>


<script>
export default {
    data(){
        return{
            user: this.$store.state.user
        }
    },
    async created(){
       const username = this.$route.params.user
       await this.$store.dispatch('fetchUser',username);       
    }
}
</script>
<style scoped>
.container {
  padding: 2rem 5rem;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  max-width: 50rem;
}
p{
font-size: 90%;
}
</style>