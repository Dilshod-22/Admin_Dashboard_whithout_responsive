<template>
    <div class="px-5">
        <h1 class="px-5 py-5">Activity feed</h1>
        <hr/>
        <div class="author flex justify-between items-center h-20 ">
            <div class="flex items-center justify-center">
                <img class="" :src="image" alt="">
                <div class="ml-4">
                    <h4>John Snow</h4>
                    <p class="lightGray">3 days ago</p>
                </div>
            </div>
            <button class="bg-lightBlue text-white w-24 h-8 rounded-lg">
                <i class="pi pi-plus"></i>
                Follow
            </button>
        </div>
        <hr/>
        <p class="flex items-center h-32 text-lightGray">Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you’re telling them from the off exactly why they should hire you.</p>
        <img class="rounded-xl w-full" :src="image2" alt="">
        <div class="feed flex justify-between items-center h-12">
            <div class="reactions">
                <button><i class="pi pi-thumbs-up"></i> 150</button>
                <button><i class="pi pi-comment"></i> 36</button>
                <button><i class="pi pi-send"></i> 12</button>
            </div>
            <div class="seeUser flex font-normal text-lightGray">
                <div class="userCollect flex">
                    <img :src="image3" alt="">
                </div>
                and 30+ more
            </div>
        </div>
        <hr/>
        <message/>
        <hr class="mt-2 mb-2"/>
        <div class="flex justify-between items-center commentSend h-24">
            <img class="h-16 w-16 rounded-full mr-7" :src="image" alt="">
            <input type="text" class="w-full h-10 rounded-md pl-3" placeholder="write your comment">
        </div>
    </div>
</template>

<script>

import image from "../assets/images/Image (5).svg"
import image2 from "../assets/images/Image (6).svg"
import image3 from "../assets/images/Avatars Group.svg"
import message from "./message.vue"

export default ({
    name: "Feedback",
    data() {
        return {
            image,
            image2,
            image3,
        };
    },
    components: { 
        message
    }
})

</script>

<style>
div h1{
  height: 69px;
  font-size: 17px;
}
.reactions button{
    margin-right:15px;
}
.userCollect img{
    height:24px;
    width:49px;
    border-radius:100px;
    border:1px solid white;
    margin:0px 7px;
}
.commentSend input{
    border:1px solid lightgray
}
</style>