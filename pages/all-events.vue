<template>
    <Grids
    gridVariant="fullBleed"
    >
      <h2>full-bleed</h2>
    </Grids>
    <Grids
    gridVariant="guttersOnly"
    >
      <h2>gutters-only</h2>
    </Grids>
    <Grids
    gridVariant="halfAndHalf"
    >
    <template :class="'half'">
      <h2>first half</h2>
    </template>
    <template :class="'half'">
      <h2>second half</h2>
    </template>
    </Grids>
    <Grids 
    gridVariant="standard"
    >
    <div :class="'standard-child'">
      <h2>standard</h2>
    </div>
    </Grids>
    <Grids
    gridVariant="centered"
    >
    <div :class="'centered-child'">
      <h2>centered</h2>
    </div>
    </Grids>
    <Grids
    gridVariant="cards"
    >
    <div :class="'single-card'">
      <h2>single card</h2>
      <slot/>
    </div>
    </Grids>
    <Grids
    gridVariant="centeredCards"
    >
    <div :class="'centered-card'">
      <h2>centered card</h2>
      <slot />
    </div>
    </Grids>

</template>
<style lang="scss" scoped>
.half{
  @apply grid grid-cols-6
}
.standard-child{
  @apply col-span-2 col-start-2 lg:col-end-12 md:col-end-6 sm:col-end-6 xs:col-end-6 bg-red-100 flex gap-4 py-6
}

.centered-child{
  @apply lg:col-start-4 lg:col-end-10 md:col-start-3 md:col-end-5 sm:col-start-3 sm:col-end-5  bg-red-200 flex gap-4 py-6
}

.single-card{
  @apply col-span-3 mx-6 border-violet-600
}

.centered-card{
  @apply lg:col-start-5 lg:col-end-9 md:col-start-3 md:col-end-5 sm:col-start-3 sm:col-end-5 xs:col-start-2 xs:col-end-6 bg-bg-primary py-6
}
</style> 
