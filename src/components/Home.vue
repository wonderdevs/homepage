<template>
  <div>
    <h1>Vue 2 & ElementUI</h1>
    <el-button @click="handleClick" size="small" round>Small</el-button>
  </div>
</template>

<script>
import { api } from '../services/api-glue';

export default {
    name: 'Home',
    methods: {
        handleClick () {
            api.getLaravel(2)
                .then(() => {
                    this.$message({
                        message: 'Congrats, this is a success message.',
                        type: 'success'
                    });
                });
        }
    }
};
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .app {
        color: #2c3e50;
        text-align: center;
    }
    h1, h2 {
        font-weight: normal;
        margin: 16px 0;
    }
</style>