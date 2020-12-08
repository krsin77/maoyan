<template>
    <header>
        <span class="iconfont icon-icon105" v-if="hasBack"></span>
        <h3>猫眼电影</h3>
        <span class="iconfont icon-mulu"></span>
    </header>
</template>

<script>
export default ({
    props: {
    hasBack: Boolean
    },
    data(){
        return{}
    }
})
</script>

<style lang="scss" scoped>
    @import "../../assets/style/var.scss";
    header{
        width: 100%;
        height: 50px;
        background-color: $theme-color;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        
        h3{
            font-size: 18px;
            color: #fff;
        }

        .icon-icon105{
            position: absolute;
            left: 12px;
            color: #fff;
        }
        
        .icon-mulu{
            position: absolute;
            right: 12px;
            color: #fff;
        }
    }
</style>