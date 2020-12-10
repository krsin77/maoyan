<template>
  <div class="movie-list">
    <ul>
      <my-movie-item
        v-for="(item,index) in movieList"
        :key="index"
        :item="item"
      ></my-movie-item>
    </ul>
    <p v-if="isToBottom" class="bot">我是有底线的...</p>
  </div>
</template>

<script>
import MyMovieItem from "@/components/Home/MyMovieItem";

export default {
  props: {
    movieList: Array,
    isToBottom: Boolean
  },
  data() {
    return {};
    
  },
  components: {
    MyMovieItem
  }
};
</script>
<style lang="scss" scoped>
.movie-list {
  background: #fff;
  margin-top: 10px;

  .bot{
    margin-left: 15px;
    font-size: 14px;
  }
}
</style>
