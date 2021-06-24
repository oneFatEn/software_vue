<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>授课信息</el-breadcrumb-item>
    <el-breadcrumb-item>成绩填写</el-breadcrumb-item>
    <el-breadcrumb-item>成绩分析单</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="studentScore" style="text-align: center">
        <el-form-item>
          <el-input v-model="studentScore.number" placeholder="选课人数" class="input" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="studentScore.percent" placeholder="及格率" class="input" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="studentScore.max" placeholder="最高分" class="input" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="studentScore.min" placeholder="最低分" class="input" style="width: 25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="studentScore.said" placeholder="评语" class="input" style="width: 25%"></el-input>
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
      studentScore: {
        number: '6',
        percent: '100%',
        max: '100',
        min: '61',
        said: '真不错'
      }
    }
  },
  methods: {
    submit () {
      return this.$message.success('成绩分析表提交成功')
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
