<template>
    <div v-if="blog_detail" class="col-lg-9" >
        <div class="row">
            <div class="blog_detail_img">
                <img
                :src="'http://localhost:3000/images/' + blog_detail.image"
                alt=""
              />
            </div>
            <h5 class="blog_detail_name"> {{ blog_detail.title }} </h5>
            <br>
            <div class="blog_detail_content">
                <p>{{ blog_detail.header }}
                </p>
                <p class="blog_detail_content_sub">{{ blog_detail.body }}
                </p>
                <p>{{ blog_detail.footer }}
                </p>
            </div>
            <div class="w-100">
                <p><span class="font-weight-bold mr-3">Category:    </span>{{ blog_detail.category}}</p>
            </div>
            <div class="">
                <h3>3 Comments</h3>
            </div>
            <br>
            <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="comment-item d-flex mb-3">
                    <div class="row">
                        <div class="col-sm-1 col-12">
                            <div class="comment-img pr-xl-0 pr-lg-4 pr-2">
                                <img src="@/assets/images/product/default-9.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-sm-11 col-12">
                            <div class="comment-content pl-4 pl-lg-4">
                                <p class="user_name">Keadyn Fraser</p>
                                <p class="user_comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, 
                                    voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque 
                                    nam quod sint provident modi alias culpa, inventore deserunt accusantium amet 
                                    earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo 
                                    comment-item                            enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe 
                                    repellat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="comment-item d-flex mb-3">
                    <div class="row">
                        <div class="col-sm-1 col-12">
                            <div class="comment-img pr-xl-0 pr-lg-4 pr-2">
                                <img src="@/assets/images/product/default-9.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-sm-11 col-12">
                            <div class="comment-content pl-4 pl-lg-4">
                                <p class="user_name">Keadyn Fraser</p>
                                <p class="user_comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, 
                                    voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque 
                                    nam quod sint provident modi alias culpa, inventore deserunt accusantium amet 
                                    earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo 
                                    comment-item                            enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe 
                                    repellat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div >
                    <h6 style="color: #000; font-size: 16px;">ADD TO REVIEW</h6>
                    <form action="">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Your name *</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Your email *</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Your review</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn2 text-center btn_review btn-primary mb-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <h1 v-else>Loading...</h1>
</template>

<script>
// import store from '@/store';
import { mapActions } from 'vuex';

export default{
    data(){

    },
    computed:{
        // blog_detail(){
        //     this.getBlogDetail(this.$route.params.id)
        //     return store.state.blog_detail
        // }
    },
    methods: {
        ...mapActions(['getBlogDetail'])
    },
    created(){
        // const id = this.$route.params.id
        // this.getBlogDetail(id)
    }
}
</script>

<style>

</style>




