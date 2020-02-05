<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

html {
  box-sizing: border-box;
  height: 100%;
}
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
  height: 100%;
  margin: 0;
}

input {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

:root {
  --primary-color: #660FA0;
  --primary-color-light: #5F6CDF;
  --letter-spacing: -2px;
}

h1,
h2,
h3 {
  margin: 0;
}

h1 {
  font-size: 3rem;
}
</style>
