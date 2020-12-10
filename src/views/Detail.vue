<template>
    <div class="detail"
        :style="{background: detailData.backgroundColor}"
        v-if="detailData.nm"
    >
        <p class="title">猫眼电影 > {{detailData.nm}}</p>
        <div class="content">
            <img class="content-img" :src="detailData.img | formatUrl" alt="">
            <div class="content-right">
                <h2>{{ detailData.nm }}</h2>
                <h5>{{ detailData.enm }}</h5>
                <h5>{{ detailData.cat | formatCat }}</h5>
                <h5>{{ detailData.star | formatCat }}</h5>
                <h5>{{ detailData.pubDesc + detailData.dur + "分钟>" }}</h5>
                <div class="buttonGroup">
                    <div class="button">想看</div>
                    <div class="button">看过</div>
                </div>
            </div>
        </div>
        <div class="score">
            <div class="score-title">
                <span>实时口碑</span>
                <span>
                    {{detailData.watched}}人看过 {{detailData.wish}}想看
                </span>
            </div>
            <div class="middle">
                <div class="middle-score">
                    <div class="middle-score-p">
                        {{detailData.sc}}
                    </div>
                    <div class="middle-score-i">
                        {{detailData.snum}}评
                    </div>
                    </div>
                <div class="middle-stars">
                    <stars-bar
                        v-for="(item,index) in detailData.distributions"
                        :key="index"
                        :starsCount="3 - index"
                        :proportion="item.proportion"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getMovieDetailApi } from "../utils/api";
import StarsBar from "@/components/detail/StarsBar";

export default {
    props:["movieId"],
    data(){
        return{
            id: this.movieId,
            detailData:{}
        }
    },
    components:{
        StarsBar
    },
    mounted(){
        this.getDetailData()
    },
    filters:{
        formatUrl(val){
            return val.split("/w.h").join("");
        },
        formatCat(val){
            return val.split(",").join("");
        }
    },
    methods:{
        async getDetailData(){
            const res = await getMovieDetailApi({id:this.id});
            this.detailData = res.result;
        } 
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/var.scss";
    .detail{
        padding: 0 15px;
        overflow: hidden;
        color: #ccc;
        font-size: 12px;

        .title{
            font-size: 14px;
            margin: 15px 0;
        }

        .content{
            width: 100%;
            height: 138px;
            display: flex;
            justify-content: space-between;

            .content-img{
                width: 100px;
                height: 100%;
            }

            .content-right{
                width: 230px;
                height: 100%;

                h2{
                    color: #fff;
                    font-size: 20px;
                }

                h5{
                    margin: 6px 0;
                }

                .buttonGroup{
                    height: 30px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    .button{
                        width: 45%;
                        height: 100%;
                        background: rgba(255, 255, 255, 0.35);
                        border-radius: 4px;
                        @include center;
                    }
                }
            }
        }
        .score{
            width: 100%;
            margin-top: 15px;
            padding: 10px 12px;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.2);

            .score-title{
                height: 18px;

                :nth-child(1){
                    float: left;
                }

                :nth-child(2){
                    float: right;
                }
            }
            
            .middle{
                height: 128px;
                padding: 20px 0;

                .middle-score{
                    margin-right: 20px;
                    padding-top: 5px;
                    width: 100px;
                    float: left;
                    text-align: right;

                    .middle-score-p{
                        font-size: 35px;
                        color: #FFBE40;
                    }
                }
                .middle-stars{
                    float: left;
                }
            }
        }
    }
</style>