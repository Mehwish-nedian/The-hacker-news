<template>
    <div>
        <div v-for="story in stories" :key="story">
            <h2>{{story.title}}}</h2>
            <p><router-link :to="'/story/'+story.id">{{story.url}}</router-link></p>
            <p>Comments: {{story.descendants}} </p>
            <p>Score: {{story.score}}</p>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            err: null,
            stories: []
        }
    },
    /*methods: {
         getStories(results){
            
            
        }
    },*/
    async created(){
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const responseData = await response.json();
        if(!response.ok){
            const err = new Error(responseData.message || 'Failed to fetch data');
            throw err;
        }
        else{
            let results = responseData.slice(0, 10);
                console.log(results.length);
            for(let index=0; index <results.length; index++){
                let id = results[index];
                const ItemData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                const item =  await ItemData.json();
                if(!ItemData.ok){
                    const err = new Error(item.message || 'Failed to fetch data');
                    console.log('Error');
                    throw err;
                }
                else{
                    this.stories.push(item);
                }
            }
            /*results.forEach(id=>{
            const ItemData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            const item =  await ItemData.json();
                if(!ItemData.ok){
                    const err = new Error(item.message || 'Failed to fetch data');
                    console.log('Error');
                    throw err;
                }
                else{
                    this.stories.push(item);
                }
            })*/
            
            }
    }
}
</script>