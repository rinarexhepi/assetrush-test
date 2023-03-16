<template>
  <Component
    :is="getComponentTag()"
    v-bind="getButtonProps()"
    :class="selectButtonClass"
  >
    <div
      class="flex w-full h-full"
      :class="[reverse ? 'flex-row-reverse gap-4 items-center' : '']"
    >
      <div
        :class="[
          iconBackground
            ? 'bg-white relative rounded-full lg:py-4 lg:px-5 md:py-3 md:px-4 sm:py-2 sm:px-3 py-1 px-2'
            : '',
        ]"
      >
        <img :src="icon" />
      </div>
      <p class="text-2xl mx-1">{{ text }}</p>
    </div>

    <div
      v-if="variants && !icon"
      class="absolute right-0 top-0 pt-10 group w-full"
      buttonVariant="selectButtonClass"
    >
      <div
        class="flex flex-col bg-transparent backdrop-blur-2xl backdrop-brightness-150 float-right rounded-xl overflow-hidden"
      >
        <NuxtLink
          class="w-[250px] hidden group-hover:flex btn-primary flex-col p-2"
          v-for="variant in variants"
          :key="variant.value"
          :to="variant.value"
        >
          <span
            class="w-full h-full border-2 border-transparent hover:border-2 hover:border-slate-300 ease-in duration-300 rounded-full py-3"
          >
            {{ variant.text }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </Component>
</template>

<script lang="ts">
import { buttonClasses } from "./const";
import { PropType, defineComponent } from "vue";
import { Button } from "~/types";
import { isUrlExternal } from "~/utils";
import { ButtonVariant } from "~/components/StrapiButton/types.ts";

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
    iconBackground: { type: Boolean, default: false },
  },

  setup(props) {
    const selectedVariant = ref(null);
    const buttonDesign = ref("");
    const hasIcons = computed(() => props.icon && props.icon.length > 0);

    const selectButtonClass = computed(
      () => buttonClasses[props.buttonVariant]
    );

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
      selectButtonClass,
    };
  },
});
</script>
