<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@media (prefers-color-scheme: dark) {
  html {
    filter: invert(1) hue-rotate(180deg);
  }
  html img {
      filter: invert(1) hue-rotate(180deg);
  }
}
html {
  transition: color 300ms, background-color 300ms;
}
</style>
