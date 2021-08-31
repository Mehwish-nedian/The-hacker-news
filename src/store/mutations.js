export default {
    appendTopStory(state, article){
        state.topstories.push(article);
    },
    appendNewStory(state, article){
        state.newstories.push(article);
    },
    appendAskStory(state, article){
        state.askstories.push(article);
    },
    appendShowStory(state, article){
        state.showstories.push(article);
    },
    appendJobStory(state, article){
        state.jobstories.push(article);
    },
    getUser(state, user){
        state.user = user
        console.log(state.user);
    }

}