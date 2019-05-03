<template>
  <div class="Register">
    <Row class="Register-Wrap">
      <Col offset="16" span="7" class="Register-box">
        <div class="Register-container">
          <div class="Register-header">
            <p>用户注册</p>
          </div>
          <div class="form-box">
            <Form ref="formInline" :model="formValidate" :rules="ruleValidate">
              <FormItem prop="username">
                  <Input type="text" v-model="formValidate.username" clearable placeholder="请输入你的手机号"></Input>
              </FormItem>
              <FormItem prop="password">
                  <Input type="password" v-model="formValidate.password" clearable placeholder="请输入你输入密码"></Input>
              </FormItem>
              <FormItem prop="repassword">
                <Input type="password" v-model="formValidate.repassword" clearable placeholder="请再次输入你的密码"></Input>
              </FormItem>
              <FormItem prop="checkNum">
                <Input type="text" v-model="formValidate.checkNum" clearable placeholder="请输入验证码">
                  <Button slot="append" @click="getcheckNum">获取验证码</Button>
                </Input>  
              </FormItem>
              <FormItem>
                  <Button type="primary" long @click.native.stop="register('formInline')">注册</Button>
              </FormItem>
              <FormItem>
                <Row type="flex" justify="center">
                  <Col><router-link to="/login">去登录</router-link></Col>
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
export default {
  name: 'register',
  data() {
    /* 验证重复输入密码 */
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formValidate.password) {
        callback(new Error('两次输入的密码不一样'));
      } else {
        callback();
      }
    }

    return {
      formValidate: {
        username: '',
        password: '',
        repassword: '',
        checkNum: ''
      },
      ruleValidate: {
        username: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6', trigger: 'blur' }
        ],
        repassword: [
          { validator: validatePassCheck, trigger: 'blur' }
        ],
        checkNum: [
          { required: true, message: '必须填写验证码', trigger: 'blur' },
          { type: 'string', min: 4, max: 4, message: '验证码长度错误', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getcheckNum () {
      if (this.formValidate.username.length === 11) {
        this.$Message.success({
          content: '验证码为: 1234',
          duration: 6,
          closable: true
        })
      } else {
        this.$Message.error({
          content: '请输入正确的手机号',
          duration: 6,
          closable: true
        })
      }
    },
    registerRequest() {
      const { 
        username, 
        password
      } = this.formValidate

      this.$http.postRegister({ username, password })
        .then(res => {
          if (res) {
            // 注册成功
            this.$Message.success({
              content: '注册成功',
              duration: 6
            })
            console.log(res)
          } else{
            // 注册失败
            this.$Message.error({
              content: '手机号已被注册',
              duration: 6
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    register(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.registerRequest()
        } else{
          this.$Message.error({
            content: '请填写正确的注册信息',
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

.Register {
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


