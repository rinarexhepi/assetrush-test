<template>
 <Component
    :is="getComponentTag()"
    v-bind="getButtonProps()" 
    :reverse="''"
    :class="designVariant"
  >
    <div  class="flex" :class="[reverse ? 'flex-row-reverse' : '']">
      <img v-if="icon" :src="icon" alt=""/>
      <p>{{ text }}</p>
    </div>
    <template v-if="variants">
      <select class=" hover:backdrop-blur-xl btn-primary px-7 py-3" v-model="selectedVariant">
        <option class="" v-for="variant in variants" key="variant.value" value="variant.value">{{ variant.text }}</option>
      </select>
    </template> 
  </Component> 
  </template>
<script lang="ts">
  import { PropType, defineComponent } from 'vue'
  import type { Button } from '~/types'
  import { isUrlExternal } from '~/utils'

  interface Variant {
    text: string
    value: string
  }

  export default defineComponent({
    
  props: {
      file: { type: Object as PropType<Button['file']>, default: undefined },
      url: { type: String as PropType<Button['url']>, default: undefined },
      newTab: { type: Boolean as PropType<Button['newTab'] | undefined>, default: undefined },
      text: { type: String as PropType<Button['text']>, default: '' },
      size: { type: String as PropType<'base' | 'lg'>, default: 'lg' },
      reverse: { type: Boolean, default: null },
      designVariant: { type: String, default: ""},
      icon: { type: String as PropType<string>, default: '' },
      variants: { type: Array as PropType<Variant[]>, default: null},
  },

    setup(props) {
    const strapiUrl = useStrapiUrl()
    const baseUrl = strapiUrl.slice(0, -1)
    const route = useRoute()
    const selectedVariant = ref(null)
    const buttonDesign = ref('');
    const hasIcons = () =>
     props.icon && props.icon.length > 0;
    const getButtonDesign = () => {
        let classes = '';
        switch(props.designVariant){
          case 'primary-btn':
            classes = 'primary-btn';
            break;
          case 'secondary-btn':
            classes = 'secondary-btn';
            break;
          case 'third-btn':
            classes = 'third-btn';
          default:
            break;  
        }
        buttonDesign.value = `${classes}`;
      }
      

    function getComponentTag() {
      if (props.url) {
        return isUrlExternal(props.url) ? 'a' : defineNuxtLink({})
      }
      return 'button'
    }
    function getButtonProps() {
    //  btn: Pick<Button, 'file' | 'url' | 'newTab'>
      if (props.url) {
        if (isUrlExternal(props.url)) {
          return {
            href: props.url,
            // open external links in new tab by default
            target: props.newTab === false ? '_self' : '_blank',
            rel: 'noopener',
          }
        }
        return {
          to: props.url,
          target: props.newTab ? '_blank' : '_self',
        }
      }
      if (props.file) {
        return {
          href: `${baseUrl}${props.file.url}`,
          download: props.file.name,
          rel: route.fullPath.includes('gentwo-plus') ? 'nofollow' : undefined,
        }
      }
    }
    return { isUrlExternal, 
              getComponentTag, 
              getButtonProps, 
              selectedVariant,
              hasIcons,
              getButtonDesign,
              buttonDesign
          }
    },
})
</script>
