<template>
  <div class="container">
    <h1>登录页面</h1>
    <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="pass">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button type="primary" @click="$router.push({path:'register'})">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>

export default {
  name: "LoginPage",
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
    }
  },
  components: {},
  methods: {
    submitForm() {
      this.$http.post('login',this.ruleForm)
          .then(resp=>{

            if (resp.data.code!==0){
              this.$message({
                message: resp.data.msg,
                showClose: true,
                type: 'error'
              });
            }else{
              this.$message({
                message: resp.data.msg,
                showClose: true,
                type: 'success',
                onClose:()=>{
                  this.$router.push({path:'MusicItem'})
                }
              })
            }


          })
    },
    sendVerifyCode(){
      this.$http.get('register/verify?email='+this.ruleForm.username)
          .then(resp=>{
            this.$message({
              message: resp.data.data,
              showClose: true,
              type: 'success'
            });
          })
    }
  },
  mounted() {
  },

}
</script>


<style scoped>

</style>
