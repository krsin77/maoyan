<template>
    <div>
        <section class="header">
        <my-header :hasBack="false" />
        <my-nav-tab />
        </section>
        <section class="wrapper">
        <div>
            <my-rated :ratedList="ratedList" />
            <my-movie-list :movieList="movieList" :isToBottom="isToBottom" />
        </div>
        </section>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import BetterScroll from "better-scroll";
    
    import { getRatedListApi, getMovieListApi, getMovieListMoreApi } from "@/utils/api";

    import MyHeader from "@/components/Home/MyHeader";
    import MyNavTab from "@/components/Home/MyNavTab";
    import MyRated from "@/components/Home/MyRated";
    import MyMovieList from "@/components/Home/MyMovieList";
    import MyFooter from "@/components/Home/MyFooter";

    export default{
        data(){
            return{
                ratedList: [],
                movieList: []
            };
        },
        components:{
            MyHeader,
            MyNavTab,
            MyRated,
            MyMovieList,
            MyFooter
        },
        mounted(){
            this.getRatedList(),
            this.getMovieList();
        },
        methods:{
            //电影好评列表
            async getRatedList(){
                const res = await getRatedListApi();
                if(res.status === 0){
                    this.ratedList = res.result;
                }
            },
            //电影item列表
            async getMovieList(){
                const res = await getMovieListApi();
                if(res.status === 0){
                    this.movieList = res.result;
                }
                await this.$nextTick();
      const bs = new BetterScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click: true,
        pullUpLoad: true
      });
      // 监听滚动到底的事件
      bs.on("pullingUp", async () => {
        // 整理字符串
        const arr = this.ids.slice(this.start, this.start + this.num);
        const str = arr.join();
        // 请求数据
        const res = await getMovieListMoreApi({
          ids: str
        });
        // 将请求到的数据和之前的数据做合并
        this.movieList = this.movieList.concat(res.result);
        this.start += this.num;
        // 需要重新计算better-scroll的高度
        await this.$nextTick();
        bs.refresh();
        // 表示这次下拉结束了，可以进行下一次的下拉了
        if (this.start <= this.count) {
          bs.finishPullUp();
        }
      });
            }
            
        }
    };
</script>

<style lang="scss" scoped>
</style>