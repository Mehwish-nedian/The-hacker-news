import {createStore} from 'vuex';

import actions from "./actions.js";
import mutations from "./mutations.js";

const store = createStore({
    state: {
        topstories: [],
        newstories: [],
        askstories: [],
        showstories: [],
        jobstories: [],
        user: {}
    },
    mutations,
    actions,

})

export default store;