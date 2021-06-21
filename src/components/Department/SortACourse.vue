<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home_teacher' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>课程相关</el-breadcrumb-item>
    <el-breadcrumb-item>选课要求设定</el-breadcrumb-item>
    <el-breadcrumb-item>该课要求</el-breadcrumb-item>
<!-- <input  type="text"> -->
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :model="CourseSet" style="text-align: center">
        <template>
        <el-form-item>
          <el-select v-model="CourseSet.collage" placeholder="请选择学院" @change="chooseCollage">
            <el-option
              v-for="item in CourseSet.collageList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="CourseSet.major" placeholder="请选择专业" @change="chooseMajor">
            <el-option
              v-for="item in CourseSet.majorList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="CourseSet.grade" placeholder="请选择学年" @change="chooseGrade">
            <el-option
              v-for="item in CourseSet.gradeList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="CourseSet.term" placeholder="请选择学期" @visible-change="chooseClass" multiple>
            <el-option
              v-for="item in CourseSet.termList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="CourseSet.class" placeholder="请选择班级" @visible-change="chooseClass" multiple>
            <el-option
              v-for="item in CourseSet.classList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交课程信息</el-button>
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
      CourseSet: {
        collage: '',
        collageList: [],
        major: '',
        majorList: [],
        grade: '',
        gradeList: [],
        class: [],
        classList: [],
        term: '',
        termList: [
          {
            value: '1',
            label: '上学期'
          }, {
            value: '2',
            label: '下学期'
          }
        ]
      }
    }
  },
  created () {
    this.getAllCollege()
  },
  methods: {
    async getAllCollege () {
      const res = await this.$http.post('teacherSetPlatform/showAllCollage')
      this.CourseSet.collageList = res.data
      // console.log(this.CourseSet.collageList)
    },
    async chooseCollage (collage) {
      const res = await this.$http.post('teacherSetPlatform/showMajorFromCollage', this.$qs.stringify({
        collage_id: collage
      }))
      this.CourseSet.majorList = res.data
      // console.log(this.CourseSet.majorList)
    },
    async chooseMajor (major) {
      const res = await this.$http.post('teacherSetPlatform/showSelectableGrade')
      console.log(res)
      this.CourseSet.gradeList = res.data
      this.CourseSet.major = major
      console.log(this.CourseSet.gradeList)
    },
    async chooseGrade (grade) {
      const res = await this.$http.post('teacherSetPlatform/showClassFromMajor', this.$qs.stringify({
        major_id: this.CourseSet.major,
        grade_year: this.CourseSet.gradeList[grade - 1].name
      }))
      console.log(res)
      this.CourseSet.classList = res.data
    },
    async chooseClass () {
      // console.log(this.CourseSet.class)
    },
    async submit () {
      /*
      await this.$http.post('teacherSetPlatform/setPlatformInformation', this.$qs.stringify({
      }))
      */
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
