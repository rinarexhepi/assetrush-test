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
    <template v-slot:half>
      <p>half</p>
      <p>half</p>
    </template>
    </Grids>
    <Grids
    gridVariant="standard"
    >
    <template v-slot:standardChild>
      <p>standardChild</p>
    </template>
    </Grids>

    <Grids
    gridVariant="centered"
    >
   <template v-slot:centeredChild>
    <p>centered</p>
   </template>
    </Grids>
    <Grids
    gridVariant="cards"
    >
    <template v-slot:singleCard>
      <p>singleCard</p>
    </template>
    </Grids>
    <Grids
    gridVariant="centeredCards"
    >
    <template v-slot:centeredCard>
      <p>centeredCard</p>
    </template>
    </Grids>

</template>
