<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>课程相关</el-breadcrumb-item>
    <el-breadcrumb-item>调/停课</el-breadcrumb-item>
    <el-breadcrumb-item>具体原因</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="StopClass" >
        <template>
        <el-form-item>
          <el-select v-model="StopClass.oldTime" placeholder="请选择要调整的原时间">
            <el-option
              v-for="item in CourseSet.oldTime"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
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
      StopClass: {
        oldTime: []
      }
    }
  },
  created () {
    this.getCourseOldTime()
  },
  methods: {
    async getCourseOldTime () {
      const res = await this.$http.post('teacherSetPlatform/showAllCollage', this.$qs.stringify({
        courseId: this.$route.params.courseId
      }))
      this.CourseSet.collageList = res.data
    }
  }
}
</script>

<style lang="less" scoped>

</style>
