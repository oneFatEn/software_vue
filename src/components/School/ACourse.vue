<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_school' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>管理</el-breadcrumb-item>
    <el-breadcrumb-item>自动排课</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form style="text-align: center">
        <template>
          <el-form-item>
            <el-button type="primary" @click="autosubmit">提交</el-button>
          </el-form-item>
        </template>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    async autosubmit () {
      const res = await this.$http.post('schoolManager/autoArrangeCourse')
      console.log(res)
      if (res.status === 200) {
        return this.$message.success('排课成功!')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.input{
  margin-top: 10px;
}
.table{
  margin-top: 10px;
}
</style>
