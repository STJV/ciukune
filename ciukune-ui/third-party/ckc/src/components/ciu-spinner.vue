<template lang="pug">
div(class="ciu-spinner")
</template>

<style>
.ciu-spinner {
  animation: ciu-spinner 1.2s linear infinite;
  border-color: var(--ciu-primary) transparent var(--ciu-primary) transparent;
  border-radius: 50%;
  border-style: solid;
  border-width: 6px;
  height: 2rem;
  width: 2rem;
}

@keyframes ciu-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
