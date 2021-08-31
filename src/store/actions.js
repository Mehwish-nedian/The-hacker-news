export default {
    async fetchTopStories(context){
        const topstoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const topstory = await topstoryresponse.json();
        if(!topstoryresponse.ok){
            const err = new Error( topstory.message || 'Failed to fetch');
            throw err;
        }
        else{
            let results = topstory.slice(0, 25);
            for(let i=0; i<results.length; i++){
                let id = results[i];
                const thestoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + ".json");
                const thestory = await thestoryresponse.json();
                if(!thestoryresponse.ok){
                    const err = new Error( thestory.message || 'Failed to fetch');
                    throw err;
                }
                else {
                    context.commit('appendTopStory', thestory);
                }
            }
        }
    },

    async fetchNewStories(context){
        const newstoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
        const newstory = await newstoryresponse.json();
        if(!newstoryresponse.ok){
            const err = new Error( newstory.message || 'Failed to fetch');
            throw err;
        }
        else{
            let results = newstory.slice(0, 25);
            for(let i=0; i<results.length; i++){
                let id = results[i];
                const thestoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + ".json");
                const thestory = await thestoryresponse.json();
                if(!thestoryresponse.ok){
                    const err = new Error( thestory.message || 'Failed to fetch');
                    throw err;
                }
                else {
                    context.commit('appendNewStory', thestory);
                }
            }
        }
    },

    async fetchAskStories(context){
        const askstoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json');
        const askstory = await askstoryresponse.json();
        if(!askstoryresponse.ok){
            const err = new Error( askstory.message || 'Failed to fetch');
            throw err;
        }
        else{
            let results = askstory.slice(0, 25);
            for(let i=0; i<results.length; i++){
                let id = results[i];
                const thestoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + ".json");
                const thestory = await thestoryresponse.json();
                if(!thestoryresponse.ok){
                    const err = new Error( thestory.message || 'Failed to fetch');
                    throw err;
                }
                else {
                    context.commit('appendAskStory', thestory);
                }
            }
        }
    },

    async fetchShowStories(context){
        const showstoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json');
        const showstory = await showstoryresponse.json();
        if(!showstoryresponse.ok){
            const err = new Error( showstory.message || 'Failed to fetch');
            throw err;
        }
        else{
            let results = showstory.slice(0, 25);
            for(let i=0; i<results.length; i++){
                let id = results[i];
                const thestoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + ".json");
                const thestory = await thestoryresponse.json();
                if(!thestoryresponse.ok){
                    const err = new Error( thestory.message || 'Failed to fetch');
                    throw err;
                }
                else {
                    context.commit('appendShowStory', thestory);
                }
            }
        }
    },

    async fetchJobStories(context){
        const jobstoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json');
        const jobstory = await jobstoryresponse.json();
        if(!jobstoryresponse.ok){
            const err = new Error( jobstory.message || 'Failed to fetch');
            throw err;
        }
        else{
            let results = jobstory.slice(0, 25);
            for(let i=0; i<results.length; i++){
                let id = results[i];
                const thestoryresponse = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + ".json");
                const thestory = await thestoryresponse.json();
                if(!thestoryresponse.ok){
                    const err = new Error( thestory.message || 'Failed to fetch');
                    throw err;
                }
                else {
                    context.commit('appendJobStory', thestory);
                }
            }
        }
    },
    async fetchUser(context, payload){
        const response = await fetch('https://hacker-news.firebaseio.com/v0/user/'+ payload +'.json')
        const responseData = await response.json();
        if(!response.ok){
            const err = new Error(responseData.message || 'Failed to fetch user data');
            throw err;
        }
        else{
            context.commit('getUser', responseData);
        }
    }
}