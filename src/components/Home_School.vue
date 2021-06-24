<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="return-home" @click="returnHome">
        <img src="../assets/login.png" alt="" width="50" height="50" />
        <span>教务管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体内容 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#333744" text-color="#fff"
        active-text-color="#409EFF" :unique-opened="true" :collapse="isCollapse"
        :collapse-transition="false" router>
          <!-- 一级菜单 -->
          <el-submenu index="sc-1">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-date"></i>
              <!-- 文本 -->
              <span>教务管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group>
              <el-menu-item index="sc-1-1">开课申请单</el-menu-item>
              <el-menu-item index="sc-1-2">课程成绩查询</el-menu-item>
              <el-menu-item index="sc-1-3">讲台成绩查询</el-menu-item>
              <el-menu-item index="sc-1-4">学生成绩查询</el-menu-item>
              <el-menu-item index="sc-1-5">系所负责人</el-menu-item>
              <el-menu-item index="sc-1-6">成绩审核</el-menu-item>
              <el-menu-item index="sc-1-7">排专业课</el-menu-item>
              <el-menu-item index="sc-1-8">排公共课</el-menu-item>
              <el-menu-item index="sc-1-9">自动排课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 一级菜单 -->
          <el-submenu index="s-2">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>培养方案</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group>
              <el-menu-item index="sc-2-1">初始培养方案</el-menu-item>
              <el-menu-item index="sc-2-2">编辑培养方案</el-menu-item>
              <el-menu-item index="sc-2-3">培养方案设定</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="sc-3">
            <i class="el-icon-setting"></i>
            <span slot="title">调/停课审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 是否折叠
      isCollapse: false
    }
  },
  methods: {
    // 退出按钮
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 导航栏收缩
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 返回主页
    returnHome () {
      this.$router.push('/home_school')
    }
  }
}
</script>

<style lang="less" scoped>
// 组件名称就是类名
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 10;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.toggle-button{
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.return-home{
  cursor: pointer;
}
</style>
