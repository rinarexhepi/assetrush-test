<template>
    <div class="grid" :class="variantClass" >
      <slot/>
    </div>
</template>
  
  <script lang="ts">
   import { PropType } from 'vue'
   import { GridVariant } from '~/types/types'
    export default {
    props: {
    gridVariant: {
      type: String as unknown as PropType<GridVariant>, default: ""
    },
  },
    setup(props) {
      const variantClasses  = {
          'fullBleed': 'lg:grid-cols-12 gap-4 md:grid-cols-6 sm:grid-cols-6 bg-slate-300 py-6',
          'guttersOnly': 'lg:grid-cols-12 gap-4 md:grid-cols-6 px-10 bg-slate-400 py-6',
          'halfAndHalf': 'lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full bg-slate-500 py-6',
          'half': 'grid grid-cols-6 ',
          'standard': 'lg:grid-cols-12 gap-4 md:grid-cols-6 sm:grid-cols-6 xs:grid-cols-6 bg-white',
          'centered': 'lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 mx-20 bg-indigo-400 py-6',
          'cards': 'lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 mx-20 bg-indigo-400 py-6',
          'centeredCards': 'lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 xs:grid-cols-6 gap-4 justify-center'
        }
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