<template>
    <div class="grid" :class="gridVariant" >
      <slot/>
    </div>
</template>
  
  <script lang="ts">
    import { ref, onMounted } from 'vue';
  
  export default {
    props: {
    gridVariant: {
      type: String,
      default: ""
    }
  },
    setup(props) {
        const screen = ref<string | null>(null); //is initially set to null, changes value based on screen 
        const columns = ref(12);
        const gridClasses = ref('');

        const getGridClasses = () => {
      let classes = ''; 
      switch (props.gridVariant) {
        case 'full-bleed':
          classes = "full-bleed";
          break;
        case 'gutters-only':
          classes = 'gutters-only';
          break;
        case 'half-and-half':
          classes = 'half-and-half';
          break;
        case 'standard':
          classes = 'standard';
          break;
        case 'centered':
          classes = 'centered';
          break;
        case 'cards':
          classes = 'cards';
          break;
        case 'centered-cards':
          classes = 'centered-cards';
          break;
        default:
          break;
      }

      gridClasses.value = `grid ${classes}`;
    };

      //computed below returns a string representing the class names that should
      //be applied to the grid component based on the current screen size and the `columns` value.
        const classes = computed(() =>{
            let colClass = `col-${columns.value}`;
            if(screen.value === 'tablet' || screen.value === 'mobile'){
                colClass = `col-6`;
            }
            let gridClass = `grid ${colClass}`;
            return `${gridClass} ${colClass}`; //returns a single string that represents the class names that should be applied to the grid component.
            //The string returned from this line will be used to dynamically set the class of the grid component based on the current screen size and the grid variant.
        });
        
        const handleResize = () =>  {
            if(window.innerWidth >= 1024){
                screen.value = 'desktop';
            }else if (window.innerWidth >= 768){
                screen.value = 'tablet';
            }else{
                screen.value = 'mobile';
            }
        };

        onMounted(()=>{
            window.addEventListener('resize', handleResize)
            handleResize();
        })

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize);
        });

        return{
            screen, 
            columns,
            classes,
            getGridClasses,
            gridClasses
        }
    },
  };
  </script>
  <style lang="scss" scoped>
  .grid{
    @apply lg:grid-cols-12 gap-4 md:grid-cols-6 sm:grid-cols-6
  }
  .full-bleed{
    @apply lg:grid-cols-12 gap-4 md:grid-cols-6 sm:grid-cols-6 bg-slate-300 py-6;
  }
  .gutters-only{
    @apply lg:grid-cols-12 gap-4 md:grid-cols-6 px-10 bg-slate-400 py-6;
  }
  .half-and-half{
    @apply lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full bg-slate-500 py-6
  }
  .half{
    @apply grid grid-cols-6 
  }
  .standard{
    @apply lg:grid-cols-12 gap-4 md:grid-cols-6 sm:grid-cols-6 xs:grid-cols-6 bg-white
  }
  .centered{
    @apply lg:grid-cols-12 gap-4 md:grid-cols-6 sm:grid-cols-6 bg-white
  }
  .cards{
    @apply lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4 mx-20 bg-indigo-400 py-6
  } 
  .centered-cards{
    @apply lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 xs:grid-cols-6 gap-4 justify-center
  }
  </style> 