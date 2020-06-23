<template>
  <div>
    <el-container>
      <el-header>
        <div class="nav-bar">
          <router-link class="nav-bar-title" to="/">Wondergames</router-link>
          <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
            <el-menu-item index="/tournaments">
                Torneos
            </el-menu-item>
            <el-menu-item index="/community">
                Community
            </el-menu-item>
              <img src="./assets/logo.png" height="28" />
          </el-menu>
        </div>

      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
          activeIndex: '1'
      };
    },
  methods: {
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
          router.push('home')
      }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&display=swap');
html {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
body {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.nav-bar {
  display: flex;
  border-bottom: solid 1px #e6e6e6;
  a {
    text-decoration: none;
  }
  .nav-bar-title {
    font-family: 'Pacifico', cursive;
    font-size: 28px;
  }
  .el-menu {
    border-bottom: none;
  }
}
</style>