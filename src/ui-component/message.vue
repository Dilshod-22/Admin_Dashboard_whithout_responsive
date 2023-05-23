<template>
    <div>
        <div class="flex comment mt-7">
            <img :src="image" class="messageAvatar rounded-3xl" alt="">
            <div class="message bg-backColor rounded-xl px-10 py-5 mt-4 h-[143px]">
                <h3>Michael Lewis</h3>
                <p class="text-lightGray mt-2 mb-3">
                    Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis.
                </p>
                <div class="reaction text-lightGray mt-3">
                    <button><i class="pi pi-thumbs-up"></i> likes</button>
                    <button><i class="pi pi-send"></i> sharea</button>
                </div>
            </div>
        </div>
        <div class="flex h-[155px] mb-7">
            <img :src="image" class="messageAvatar rounded-3xl" alt="">
            <div class="message bg-backColor rounded-xl px-10 py-5 mt-4 h-[145px]">
                <h3>Michael Lewis</h3>
                <p class="text-lightGray mt-2 mb-3">
                    Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis.
                </p>
                <div class="reaction text-lightGray mt-3">
                    <button><i class="pi pi-thumbs-up"></i> likes</button>
                    <button><i class="pi pi-send"></i> sharea</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image from "../assets/images/Image (8).svg"

export default({
    name: "message",
    data(){
        return{
            image
        }
    }
})
</script>

<style>
.comment{
    height:200px;
    margin-bottom:-15px;
}
.message{
    width:670px;
}
.reaction button{
    margin-right: 25px;
}
.messageAvatar{
    height:50px;
    width:50px;
    margin-right: -25px;
    z-index: 1;
    box-shadow:0px 0px 0px 4px white;
}
</style>