<template>
  <div class="fixed w-full h-full overflow-y-auto overflow-x-hidden bg-gray-100 text-gray-100">
    <app-header />
    <app-main />
    <app-footer />
    <app-notification />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.absolute.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
  width: 120px;
  height: 34px;
  color: #fff;
  background-color: rgba(220, 38, 38, 1);
  border-radius: 0.5em;
}

.cta.secondary {
  background-color: rgba(17, 24, 39, 1);
}
</style>
