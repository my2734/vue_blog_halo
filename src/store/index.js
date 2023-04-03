import { createStore } from 'vuex'
import axios from 'axios'
// Create a new store instance.
const store = createStore({
  state () {
    return {
      list_blog: [],
      blog_detail: {

      }
    }
  },
  mutations: {
    GETLISTBLOG(state,data){
      state.list_blog = data
    },
    ADD_BLOG(state,data){
      state.list_blog.unshift(data)
    },
    GET_BLOG_DETAIL(state,data){
      state.blog_detail = data
    }
  },
  actions: {
    async getListBlog({commit}){
      try{
        const response = await axios.get('http://localhost:3000/api/blog')
        commit('GETLISTBLOG',response.data)
      }catch(error){
          console.log("Loi action getListBlog")
      }
    },
    async addNewBlog({commit},data){
      try{
        const response = await axios.post('http://localhost:3000/api/blog',data)
        console.log(response.data)
        // console.log(commit)
        commit('ADD_BLOG', response.data)
      }catch(error){
        console.log("loi action addNewBlog")
      }
    },
    async getBlogDetail({commit},id){
      try{  
        const response = await axios.get('http://localhost:3000/api/blog/'+id)
        commit('GET_BLOG_DETAIL',response.data)
      }catch(error){
        console.log("Loi action getBlogDetail")
      }
    }
  }
})


export default store