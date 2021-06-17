<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 登录-头像区域 -->
            <div class="avatar_box">
                <img src="../assets/login.png" alt="">
            </div>
            <!-- 登录-登录表单区域 -->
            <!-- 先:model为数据表单绑定一个数据对象，再用v-model为每一个绑定到数据对象相应的属性 -->
            <!-- 表单验证，为表单添加一个表单验证对象 -->
            <!-- 给form创建一个引用，使得重置键可以获得该form表单，并且调用resetFields方法对整个表单进行重置 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username" label="学/工号">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password" label="密码">
                    <el-input v-model="loginForm.password"
                    type="password"></el-input>
                </el-form-item>
                <!-- 身份选择 -->
                <el-form-item label="身份">
                  <el-radio-group v-model="loginForm.identity">
                    <el-radio label='1'>学生</el-radio>
                    <el-radio label='2'>教师</el-radio>
                    <el-radio label='3'>院教务处</el-radio>
                    <el-radio label='4'>校教务处</el-radio>
                  </el-radio-group>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class = "btns">
                    <el-button type="primary" @click="formLogin">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '1001',
        password: '123456',
        identity: '1'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { min: 4, max: 5, message: '学号为4-5个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 20, message: '密码为4~20个字符', trigger: 'blur' }
        ]
      },
      radio: ''
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    formLogin () {
      var axios = require('axios')
      // 登录前的预验证
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) {
          return false
        }
        // 当用户名密码的输入符合预校验时,向后端发送请求
        // 前端向后端发送username password identity 三个数据
        const { data: res } = await axios.post('/login/loginCheck', this.$qs.stringify({
          username: this.loginForm.username,
          password: this.loginForm.password,
          identity: this.loginForm.identity
        }))
        // console.log(res)
        if (res === '1') {
          return this.$message.error('Login Faliure - username')
        }
        if (res === '2') {
          return this.$message.error('Login Faliure - password')
        }
        this.$message.success('Login Success')
        // 使用sessionStorage存储token值
        window.sessionStorage.setItem('Student_ID', this.loginForm.username)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
    background-image:url('~@/assets/mount.png');
    background-size: cover;
    height: 100%;
}

//登录-头像区域
.login_box{
    width: 450px;
    height: 350px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

//登录-登录表单区域
.btns{
    display: flex;
    justify-content: flex-end;
}

.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>
