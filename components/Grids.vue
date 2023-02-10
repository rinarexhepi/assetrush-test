<template>
    <div class="grid grid-responsive" :class="variantClass" >
      <slot/>
    </div>
</template>
  
  <script lang="ts">
  const variantClasses  = {
          'fullBleed': 'gap-4 bg-slate-300 py-6',
          'guttersOnly': 'gap-4 px-10 bg-slate-400 py-6',
          'halfAndHalf': 'lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full bg-slate-500 py-6',
          'standard': 'gap-4 bg-red-100',
          'centered': 'gap-4 mx-20',
          'cards': ' gap-4 mx-20 bg-indigo-400 py-6',
          'centeredCards': ' gap-4 justify-center',
        }
   import { PropType } from 'vue'
   import { GridVariant } from '~/types/gridTypes.js'
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