<template>
  <div>
    <el-container>
      <el-header>
        <div class="nav-bar">  
          <div class="nav-bar-title">Wondergames</div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
              <router-link to="/">
                Home
              </router-link>
            </el-menu-item>
            
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&display=swap');
html {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.nav-bar {
  display: flex;
}
.nav-bar-title {
  font-family: 'Pacifico', cursive;
  font-size: 32px;
}
</style>