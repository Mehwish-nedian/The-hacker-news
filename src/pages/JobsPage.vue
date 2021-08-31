<template>
    <div>
        <item v-for="story in stories" :key="story" :story= story />
    </div>
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
            stories: this.$store.state.jobstories
        }
    },
    created(){
        if(this.$store.state.jobstories.length==0){
            this.$store.dispatch('fetchJobStories');
            
        }
    }
}
</script>