<template>
  <div class="Login">
    <Row class="Login-Wrap">
      <Col offset="16" span="7" class="Login-box">
        <div class="Login-container">
          <div class="Login-header">
            <p>用户登录</p>
          </div>
          <div class="form-box">
            <Form ref="formInline" :model="formDate" :rules="ruleInline">
              <FormItem prop="username">
                  <Input type="text" v-model="formDate.username" clearable placeholder="输入用户名"></Input>
              </FormItem>
              <FormItem prop="password">
                  <Input type="password" v-model="formDate.password" clearable placeholder="输入密码"></Input>
              </FormItem>
              <FormItem>
                  <Button type="primary" long @click="login('formInline')">登录</Button>
              </FormItem>
              <FormItem>
                <Row>
                  <Col span="6"><Checkbox> 记住我</Checkbox></Col>
                  <Col offset="9" span="9">
                    <Row type="flex" justify="space-between">
                      <Col><router-link to="">忘记密码</router-link></Col>
                      <Col><router-link to="/register">去注册</router-link></Col>
                    </Row>
                  </Col>
                </Row>
              </FormItem>
          </Form>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      formDate: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['modifyLoginState']),
    loginRequest() {
      this.$http.postLogin(this.formDate)
        .then(res => {
          if (res) {
            // 登录成功
            this.$Message.success({
              content: '登录成功',
              duration: 6
            })
            this.modifyLoginState(true)
            window.localStorage.setItem('loginUsername', res.username)
            window.localStorage.setItem('token', res.token)
            this.$router.push({name: this.$route.params.from.name})
          } else{
            this.$Message.error({
              content: '用户名或密码错误',
              duration: 6
            })
            this.modifyLoginState(false)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    login(name) {
      // 登录
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loginRequest()
        } else{
          this.$Message.error({
            content: '请填写正确的用户名或密码',
            duration: 6
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

.Login {
  &-Wrap {
    width: 100%;
    height: 580px;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: url('../../assets/login_bg.jpg') center no-repeat;
      background-size: cover;
      opacity: 0.6;
      position: absolute;  
    }
  }
  &-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-container {
    width: 80%;
    border: @primary-color solid 1px;
    background-color: #fff;
  }
  &-header {
    height: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 5px;
    color: #fff;
    background-color: @primary-color;
  }
  .form-box {
    width: 80%;
    margin: 30px auto;
  }
}
</style>


