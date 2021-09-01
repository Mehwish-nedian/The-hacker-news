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
            stories1: this.$store.state.jobstories.slice(0,25),
            stories2: this.$store.state.jobstories.slice(25,50),
            stories3: this.$store.state.jobstories.slice(50,75),
            currentpage : 1
        }
    },
    created(){
        if(this.$store.state.newstories.length ==0){
            this.$store.dispatch('fetchNewStories');
            this.stories1= this.$store.state.jobstories.slice(0,25);
            this.stories2= this.$store.state.jobstories.slice(25,50);
            this.stories3= this.$store.state.jobstories.slice(50,75); 
        }

    },
    methods:{
        Pageno(pageno){
            this.currentpage = pageno;
        }, 
    },
}
</script>