<template>
  <div class="us">
    <transition-group name="slide-left">
      <h2 key="1">User Settings</h2>
      <UserSettingsNav key="2"/>
      <router-view key="3" class ="us__content"/>
      <router-view key="4" name="helper" class="us__content us__content--helper"/>
    </transition-group>
  </div>
</template>

<script>
import UserSettingsNav from './components/userSettingsNav'

export default {
  components: { UserSettingsNav },
}
</script>

<style lang="less" scoped>
.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "nav content"
    "nav helper"
    ;
}

h2 {
  grid-area: header;
}
.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
}

</style>
