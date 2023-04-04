<template>
    <div class="log-form">
      <h2>Register to your account</h2>
      <form>
        <input v-model="user.username" @change="handlerUsername()" class="form-control" type="text" title="username" placeholder="Username" />
        <span v-if="statusError.username" class="text-danger">*Vui lòng nhập Username*</span>
        <div class="mt-4"></div>
        <input v-model="user.email" class="form-control" type="text" title="username" placeholder="Email" />
        <span v-if="statusError.email" class="text-danger">*Vui lòng nhập Email*</span>
        <div class="mt-4"></div>
        <input v-model="user.password" class="form-control" type="password" title="username" placeholder="Password" />
        <span v-if="statusError.password" class="text-danger">*Vui lòng nhập password*</span>
        <div class="text-center">
          <button @click="handlerSubmitLogin($event)" type="submit" class="btn2 text-center btn_review btn-primary">Register</button>
        </div>
        <div class="row">
          <a @click="handlerClickHome($event)" class="nav-link" href="#">Home</a>
          <a @click="handlerClickLogin($event)" class="nav-link" href="#">Login now?</a>
        </div>
        
      </form>
    </div><!--end log form -->
  </template>
  
  <script>
  import axios from 'axios'
  export default{
    name: 'RegisterPage',
    data(){
        return {           
            user: {
                username: "",
                email: "",
                password: "",
            },
            status: true,
            statusError: {
                username: false,
                email: false,
                password: false,
            }
          
        }
    },
    methods:{
      handlerClickHome(e){
        e.preventDefault()
        this.$router.push({name: 'home'})
      },
      handlerClickLogin(e){
        e.preventDefault()
        this.$router.push({name: 'login'})
      },
      handlerSubmitLogin(e){
        e.preventDefault()
        this.validate()
        if(this.status){
          const data = {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password
          }
          axios.post('http://localhost:3000/api/auth/register',data)
            .then(response=>{
              if(response.status == 200){
                this.user.username = ""
                this.user.email = ""
                this.user.password = ""
                this.$router.push({name: 'login'})
              }
            })
            .catch(error=>{
              console.log(error)
            })
        }
      },
      validate(){
        if(this.user.username == ""){
          this.status = false
          this.statusError.username = true
        }else{
          this.statusError.username = false

        }

        if(this.user.email == ""){
          this.status = false
          this.statusError.email = true
        }else{
          this.statusError.email = false
        }

        if(this.user.password == ""){
          this.status = false
          this.statusError.password = true
        }else{
          this.statusError.password = false
        }

        if(this.user.username != "" && this.user.email!="" && this.user.password!=""){
          this.status = true
        }
      },
      handlerUsername(){
        const name = this.user.username
        axios.get('http://localhost:3000/api/user?name='+name)
          .then(response=>{
            if(response.status == 200){
              if(response.data.length > 0){
                this.status = false
                this.statusError.username = true
              }
            }
          })
          .catch(error=>{
            console.log(error)
          })
      }
    }
  }
  </script>
  
  <style scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Open+Sans:400,300,600);
  
  *{box-sizing:border-box;}
  
  body {
    font-family: 'open sans', helvetica, arial, sans;
  background:url(http://farm8.staticflickr.com/7064/6858179818_5d652f531c_h.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  
  .log-form {
    width: 40%;
    min-width: 320px;
    max-width: 475px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
    
    box-shadow: 0px 2px 5px rgba(0,0,0,.25);
  }
    
  
    form {
      display: block;
      width: 100%;
      padding: 2em;
    }
    
    h2 {
      width: 100%;
      color: white;
      font-family: 'open sans condensed';
      font-size: 1.35em;
      display: block;
      background:#2a2a2a;
      width: 100%;
      text-transform: uppercase;
      padding: .75em 1em .75em 1.5em;
      box-shadow:inset 0px 1px 1px fadeout(white, 95%);
      border: 1px solid darken(#2a2a2a, 5%);
      margin: 0;
      font-weight: 200;
    }
    
    
    
    .btn {
      display: inline-block;
      background: #1fb5bf;
      border: 1px solid darken(#1fb5bf, 5%);
      padding: .5em 2em;
      color: white;
      margin-right: .5em;
      box-shadow: inset 0px 1px 0px fadeout(white, 80%); 
     
    }
    
    .forgot {
      color: lighten(#1fb5bf, 10%);
      line-height: .5em;
      position: relative;
      top: 2.5em;
      text-decoration: none;
      font-size: .75em;
      margin:0;
      padding: 0;
      float: right;
     
    }
  
  
  
  
  </style>