<template>
  <div>
    <div>
      Wondergames
      <!-- <el-button @click="handleClick" size="small" round>Small</el-button> -->
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel quasi qui nam labore odio ut. Rerum fuga accusantium et quidem eos inventore, atque natus animi repellendus, iste iure ea.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus, voluptates quibusdam odit sunt corrupti, ab ipsam necessitatibus laborum exercitationem, fuga inventore ipsum nam molestias consequatur quae. Voluptatum, accusantium. Ea.</p>
      <el-divider></el-divider>
      <div class="triage">
          <div v-for="item in 3" :key="item" class="block">
            <span class="demonstration">{{ item }}</span>
            <el-image>
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
          </div>
      </div>
    </div>
    <div>
      <el-row>
        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 2">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>Yummy hamburger</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    
    </div>
  </div>
</template>

<script>
import { api } from '../services/api-glue';

export default {
    name: 'Home',
    data() {
        return {
          currentDate: new Date()
        };
    },
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

<style lang="scss" scoped>
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

    .triage {
        display: flex;
        justify-content: space-around;
        margin: 50px 0;
        .block {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
</style>