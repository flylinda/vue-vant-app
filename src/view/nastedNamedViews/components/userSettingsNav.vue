<template>
  <div class="us__nav">
    <router-link to="/settings/emails">emails</router-link>
    <br>
    <router-link to="/settings/profile">profile</router-link>
  </div>
</template>

<style lang="less" scoped>
.us__nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: .75rem;
  padding: .3rem;
}
</style>
