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
        axios.get('http://localhost:3000/data')
        .then(matthew => {
          console.log(matthew)
          let [intro,task, review] = matthew.data
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
