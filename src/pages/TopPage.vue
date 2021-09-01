<template>
    <section>
        <post-header @Pageno ="Pageno"></post-header>
        <div v-if="currentpage==1" class="container">
            <item v-for="story in stories1" :key="story" :story= story />    
        </div>
        <div v-if="currentpage==2" class="container">
            <item v-for="story in stories2" :key="story" :story= story />    
        </div>
        <div v-if="currentpage==3" class="container">
            <item v-for="story in stories3" :key="story" :story= story />    
        </div>
    </section>
</template>

<script>
import item from '../components/Item.vue';
export default {
    components: {
        item
    },
    data(){
        return{
            err: null,
            stories1: this.$store.state.topstories.slice(0,25),
            stories2: this.$store.state.topstories.slice(25,50),
            stories3: this.$store.state.topstories.slice(50,75),
            currentpage : 1
        }
    },
    created(){
        if(this.$store.state.topstories.length ==0){
            this.$store.dispatch('fetchTopStories');
            this.stories1= this.$store.state.topstories.slice(0,25);
            this.stories2= this.$store.state.topstories.slice(25,50);
            this.stories3= this.$store.state.topstories.slice(50,75);
            let currpage = this.$route.path;
            console.log(currpage);
            console.log(currpage.substring(currpage.length-1, currpage.length));
            
        }
    },
    methods:{
        Pageno(pageno){
            this.currentpage = pageno;
        },
        
    },


}
</script>