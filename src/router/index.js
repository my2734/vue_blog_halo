import { createRouter, createWebHistory } from 'vue-router'
import mainLayout from '../layouts/mainLayout.vue'
import adminLayout from '../layouts/adminLayout.vue'


import HomePage from '../views/main/HomePage.vue'
import BlogDetail from '../views/main/BlogDetail.vue'
import ContactPage from '../views/main/ContactPage.vue'

// import ListBlog from '../views/admin/ListBlog.vue'
import PostBlog from '../views/admin/PostBlog.vue'


import BlogApp from '../views/main/BlogApp.vue'

import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
const routes = [
    { 
      path: '/', 
      component: HomePage,
      name: "home",
      meta: {
        layout: mainLayout
      }
    },
    {
      path: '/blog-detail/:id',
      component: BlogDetail,
      name: "blogdetail",
      meta:{
        layout: mainLayout
      }
    },
    {
      path: '/contact',
      component: ContactPage,
      
    },
    { 
      path: '/admin/blog', 
      component: BlogApp, 
      meta:{
        layout: adminLayout
      }
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    // {
    //   path: '/admin/list-blog',
    //   component: ListBlog,
    //   name: 'listblog',
    //   meta: {
    //     layout: adminLayout
    //   }
    // },
    
    {
      path: "/admin/post-blog",
      component: PostBlog,
      name: 'postblog',
      meta: {
        layout: adminLayout
      }
    }
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  

export default router