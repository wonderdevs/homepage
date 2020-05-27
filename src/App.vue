<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <router-link to="/">
              Home
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/medium">
              Medium
            </router-link>
          </el-menu-item>
        </el-menu>

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
html {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>