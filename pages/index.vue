<template>
    <div class="bg-custom-gradient h-screen">
       <h1 class="text-white text-lg">------main template------</h1>
    <div class="flex gap-6">
       <div >
        <StrapiButton 
            :variants="[
                { text: 'All Events', value: '/all-events' },
                { text: 'Upcoming Events', value: '/upcoming-events' },
                { text: 'Past Events', value: '/past-events' },
              ]"
            :reverse="true"            
            /> 
        </div>
        <div class="">
        <StrapiButton 
            v-bind:text="'Button'" 
            class="btn-primary px-7 py-3"
            icon="https://www.svgrepo.com/show/447/web-application.svg"
        />
        </div>
        <div class="">
        <StrapiButton 
            v-bind:text="'Go to Asset Rush'" 
            v-bind:url="'https://www.assetrush.com/'"
            target="_blank"
            class="btn-primary px-4 py-6"
            rel="'noopener'"
            v-bind:reverse="true"   
        />
        </div>
        <div class="">
        <StrapiButton
            text="Asset Rush All Events" 
            target="_self"
            url="all-events"
            class="btn-third px-5 py-4"
            v-bind:reverse="true"
        /> 
        </div>
    </div>
    <!-- </Grids>  -->
    </div>
       
</template>
<script lang="ts"> 
    import StrapiButton from '~~/components/StrapiButton.vue';  
    import ArrowOut from '~~/components/svg/ArrowOut.vue';
    export default defineComponent({
        components: { StrapiButton, ArrowOut }, 
    })
</script>