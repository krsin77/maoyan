<template>
  <nav>
    <address @click="goToCities">{{city.name}}</address>
    <ul>
      <router-link
        tag="li"
        v-for="(item,index) in navList"
        :key="index"
        :to="item.url"
        active-class="active"
      >
        {{ item.title }}
      </router-link>
    </ul>
    <span class="iconfont icon-icon105"></span>
  </nav>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      navList: [
        {
          title: "热映",
          url: "hot"
        },
        {
          title: "影院",
          url: "cinema"
        },
        {
          title: "待映",
          url: "wait"
        },
        {
          title: "经典",
          url: "classic"
        }
      ],
      activeIndex: 0
    };
  },
  computed:{
    city(){
      return this.$store.state.city;
    }
  },
  methods: {
    handleClick(i) {
      this.activeIndex = i;
    },
    goToCities(){
      this.$router.push("/cities")
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/var.scss";
nav {
  height: 46px;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;

  ul {
    display: flex;
    height: 100%;

    li {
      width: 66px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .active {
      color: $active-color;
      font-size: 17px;
      font-weight: 900;

      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;
        background: $theme-color;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
