<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>课程相关</el-breadcrumb-item>
      <el-breadcrumb-item>开课申请</el-breadcrumb-item>
      <el-breadcrumb-item>具体申请</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-form :model="form" style="text-align: center">
        <el-form-item>
          <el-input v-model="form.coursename" placeholder="输入课程名称" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.credit" placeholder="输入课程学分" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.compulsory" placeholder="输入课程是否必修" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.public" placeholder="输入课程是否必修" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.length" placeholder="输入课程学时" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.fullWeek" placeholder="输入课程是否进行全教学周" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.alternate" placeholder="输入课程是否进行单双周" style="width:25%"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.collage" placeholder="请选择学院" @change="chooseCollage">
            <el-option
              v-for="item in form.collageList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.major" placeholder="请选择专业" multiple>
            <el-option
              v-for="item in form.majorList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
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
      form: {
        coursename: '大学物理',
        credit: '4',
        compulsory: '1',
        public: '1',
        length: '32',
        fullWeek: '1',
        alternate: '0',
        collage: '',
        collageList: [],
        major: '',
        majorList: []
      }
    }
  },
  created () {
    this.getAllCollege()
  },
  methods: {
    async getAllCollege () {
      const res = await this.$http.post('teacherSetPlatform/showAllCollage')
      this.form.collageList = res.data
      // console.log(this.CourseSet.collageList)
    },
    async chooseCollage (collage) {
      const res = await this.$http.post('teacherApplyCourse/showMajorFromCollage', this.$qs.stringify({
        collage_id: collage
      }))
      this.form.majorList = res.data
    },
    async submit () {
      const res = await this.$http.post('teacherApplyCourse/addCourseApply', this.$qs.stringify({
        rid: this.$route.params.courseId,
        tid: window.sessionStorage.getItem('Teacher_ID'),
        course_name: this.form.coursename,
        credit: this.form.credit,
        compulsory: this.form.compulsory,
        public: this.form.public,
        length: this.form.length,
        fullWeek: this.form.fullWeek,
        alternate: this.form.alternate,
        major_id_list: JSON.stringify(this.form.major)
      }))
      console.log(res.data)
      this.$router.push({ name: 'applyPlatform', params: { courseId: res.data } })
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
