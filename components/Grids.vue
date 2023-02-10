<template>
    <div class="grid grid-responsive" :class="variantClass" >
      <slot name="singleCard" class="singleCard"/>
      <slot name="half" class="half"/>
      <slot name="standardChild" class='standardChild'/>
      <slot name="centeredChild" class="centeredChild"/>
      <slot name="singleCard" class="singleCard"/>
      <slot name="centeredCard" class="centeredCard"/>
      <slot/>
    </div>
</template>
  
  <script lang="ts">
  const variantClasses  = {
          'fullBleed': 'gap-4 bg-slate-300 py-6',
          'guttersOnly': 'gap-4 px-10 bg-slate-400 py-6',
          'halfAndHalf': 'lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full bg-slate-500 py-6',
          'half': 'grid grid-cols-6 ',
          'standard': 'gap-4 bg-red-100',
          'centered': 'gap-4 mx-20 bg-indigo-500 py-6',
          'cards': ' gap-4 mx-20 bg-indigo-400 py-6',
          'centeredCards': ' gap-4 justify-center',
          'standardChild' : '.standard col-span-2 col-start-2 lg:col-end-12 md:col-end-6 sm:col-end-6 xs:col-end-6 flex gap-4 py-6',
          'centeredChild': '.centered lg:col-start-4 lg:col-end-10 md:col-start-3 md:col-end-5 sm:col-start-3 sm:col-end-5  bg-red-200 flex gap-4 py-6',
          'singleCard' : 'col-span-3 mx-6 border-violet-600',
          'centeredCard': 'lg:col-start-5 lg:col-end-9 md:col-start-3 md:col-end-5 sm:col-start-3 sm:col-end-5 xs:col-start-2 xs:col-end-6 bg-bg-primary py-6'
        }
   import { PropType } from 'vue'
   import { GridVariant } from '~/types/types'
    export default {
    props: {
    gridVariant: {
      type: String as PropType<GridVariant>, default: ""
    },
  },
    setup(props) {
      
        const useVariantClasses = (variant: GridVariant) => {
          return variantClasses[variant];
        }
        const variantClass = useVariantClasses(props.gridVariant)
            return{
            variantClasses,
            useVariantClasses,
            variantClass
        }
    },
  };
  </script>