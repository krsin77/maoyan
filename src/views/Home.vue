<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "@/components/Home/MyFooter";

export default {
  components: {
    MyFooter
  }
};
</script>

<style lang="scss" scoped></style>
