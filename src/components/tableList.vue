<template>
    <div class="w-[450px] h-56 mt-5 mx-auto overflow-x-hidden overflow-y rounded-lg">
        <div class="w-[450px] h-auto  bg-white">
            <tableItem 
                v-for="information in informations"
                :information="information"
                :key="information.id"
                @activeUpdate="$emit('activeUpdate',information.id)"
                @onRemove="$emit('onRemove',information.id)"
            />
        </div>
    </div>
</template>

<script>
import tableItem from './tableItem.vue';
    export default {
        components:{
            tableItem
        },
        props:{
            informations:{
                type:Array,
                required:true
            }
        },
    }
</script>

<style>

</style>