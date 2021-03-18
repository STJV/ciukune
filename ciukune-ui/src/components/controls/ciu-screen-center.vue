<template lang="pug">
div(class="ciu-screen-center")
  div
    slot
</template>

<style>
.ciu-screen-center {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}

.ciu-screen-center > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>

