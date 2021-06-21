<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_school' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>培养方案</el-breadcrumb-item>
      <el-breadcrumb-item>创建培养方案</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card" >
      <el-form :model="manageForm" style="text-align: center">
        <el-form-item>
          <el-input v-model="manageForm.name" placeholder="输入学院名称" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="manageForm.year" placeholder="输入年份" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      manageForm: {
        name: '计算机与通信工程学院',
        year: '2021'
      }
    }
  },
  methods: {
    async submit () {
      const res = await this.$http.post('schoolManager/initTrainingProgram', this.$qs.stringify({
        major_name: this.manageForm.name,
        enrollment_year: this.manageForm.year
      }))
      console.log(res)
      if (res.status === 200) {
        return this.$message.success('init success')
      }
      return this.$message.error('init failure')
    }
  }
}
</script>

<style lang="less" scoped>
.position{
    display: flex;
    justify-content: flex-end;
}
</style>
