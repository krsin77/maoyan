<template>
    <div class="rated">
        <h5>最受好评的电影</h5>
        <ul>
            <li v-for="item in ratedList" :key="item._id" @click="goToDetail()">
                <div class="img-wrap">
                    <img :src="item.imgUrl" alt="">
                    <span v-if="item.score">观众评分 {{item.score}}</span>
                    <span v-else>{{item.wishNum}}人想看</span>
                </div>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default ({
    props:{
        ratedList: Array
    },
    data(){
        return{}
    },
    watch: {
        async ratedList() {
        // console.log("list改变了");
            await this.$nextTick();
            new BetterScroll(".ul-wrap", {
                scrollX: true,
                scrollY: false,
                click: true
            });
        }
    },
    methods:{
        goToDetail(){
            
        }
    }
})
</script>

<style lang="scss" scoped>
    .rated{
        background-color: #fff;
        height: 200px;
        padding: 0 15px;

        h5{
            height: 32px;
            line-height: 32px;
            font-size: 15px;
            font-weight: 500;
        }

        ul{
            height: 168px;
            display: flex;
            overflow: auto;

            li{
                width: 85px;
                height: 140px;
                margin-right: 10px;
                flex-shrink: 0;

                .img-wrap{
                    width: 100%;
                    height: 115px;
                    position: relative;

                    img{
                        width: 100%;
                        height: 100%;
                    }

                    span{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 35px;
                        background: linear-gradient(
                            to top,
                            rgba(0, 0, 0, 1),
                            rgba(0, 0, 0, 0)
                        );
                        color: #faaf00;
                        font-size: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                        font-weight: 900;
                    }
                }
                p{
                    font-size: 13px;
                    font-weight: 600;
                    margin: 0;
                    margin-top: 3px;
                    color: #222;
                    margin-bottom: 3px;
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>