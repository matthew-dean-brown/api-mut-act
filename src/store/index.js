import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    intro:[],
    tasks:[],
    review:[]
  },
  getters: {
  },
  mutations: {
    setIntro(state,info){
      state.intro = info
    },
    setTask(state,info){
      state.tasks = info
    },
    setReview(state,info){
      state.review = info
    }
  },
  actions: {
    getData(context){
        axios.get('https://matthew-dean-brown.github.io/api-mut-act/index.json  ')
        .then(matthew => {
          console.log(matthew.data)
          let [intro,task, review] = matthew.data.data
          console.log(intro.intro)
          context.commit('setIntro', intro.intro)
          // console.log(task.tasks)
          context.commit('setTask', task.tasks)
          // console.log(review.reviews)
          context.commit('setReview', review.reviews)
        })
    }
  },
  modules: {
  }
})
