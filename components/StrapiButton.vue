<template>
  <Component
    :is="getComponentTag()"
    v-bind="getButtonProps()"
    :class="buttonClass"
  >
    <div class="flex" :class="[reverse ? 'flex-row-reverse' : '']">
      <img v-if="icon" :src="icon" alt="" />
      <p>{{ text }}</p>
    </div>
    <template v-if="variants">
      <select
        class=" hover:backdrop-blur-xl btn-primary px-7 py-3"
        v-model="selectedVariant"
      >
        <option
          class=""
          v-for="variant in variants"
          key="variant.value"
          value="variant.value"
          >{{ variant.text }}</option
        >
      </select>
    </template>
  </Component>
</template>
<script lang="ts">
const buttonClasses = {
  primary:
    "uppercase border-2 border-transparent hover:border-white rounded-full text-white backdrop-blur-md bg-white/20 py-4 px-3 ",
  secondary: "uppercase bg-blue-600 text-white rounded-full",
  third: " uppercase text-blue-600 bg-white rounded-full",
};
import { PropType, defineComponent } from "vue";
import { Button } from "~/types";
import { isUrlExternal } from "~/utils";
import { ButtonVariant } from "~/types/buttonTypes.ts";

interface listVariant {
  text: string;
  value: string;
}

export default defineComponent({
  props: {
    file: { type: Object as PropType<Button["file"]>, default: undefined },
    url: { type: String as PropType<Button["url"]>, default: undefined },
    newTab: {
      type: Boolean as PropType<Button["newTab"] | undefined>,
      default: undefined,
    },
    text: { type: String as PropType<Button["text"]>, default: "" },
    size: { type: String as PropType<"base" | "lg">, default: "lg" },
    reverse: { type: Boolean, default: null },
    icon: { type: String as PropType<string>, default: "" },
    variants: { type: Array as PropType<listVariant[]>, default: null },
    buttonVariant: { type: String as PropType<ButtonVariant>, default: "" },
  },

  setup(props) {
    const selectedVariant = ref(null);
    const buttonDesign = ref("");
    const hasIcons = () => props.icon && props.icon.length > 0;

    const useButtonClasses = (variant: ButtonVariant) => {
      return buttonClasses[variant];
    };
    const buttonClass = useButtonClasses(props.buttonVariant);

    function getComponentTag() {
      if (props.url) {
        return isUrlExternal(props.url) ? "a" : defineNuxtLink({});
      }
      return "button";
    }
    function getButtonProps() {
      if (props.url) {
        if (isUrlExternal(props.url)) {
          return {
            href: props.url,
            // open external links in new tab by default
            target: props.newTab ? "_self" : "_blank",
            rel: "noopener",
          };
        }
        return {
          to: props.url,
          target: props.newTab ? "_blank" : "_self",
        };
      }
    }
    return {
      isUrlExternal,
      getComponentTag,
      getButtonProps,
      selectedVariant,
      hasIcons,
      buttonDesign,
      buttonClass,
      useButtonClasses,
    };
  },
});
</script>
