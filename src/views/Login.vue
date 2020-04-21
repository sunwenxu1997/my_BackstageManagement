<template>
  <div class="login">
    <div class="title">
      <h2>{{$siteSet.name}}</h2>
      <p>management system</p>
    </div>
    <div class="login_box">
      <div id="input_box">
        <span class="label">
          <i class="el-icon-user"></i>
        </span>
        <div class="input_text">
          <input type="text" v-model="loginForm.name" />
          <span class="msg_hint" :class="loginForm.name?'focus':''">账号</span>
        </div>
      </div>
      <div id="input_box">
        <span class="label">
          <i class="el-icon-lock"></i>
        </span>
        <div class="input_text">
          <input
            @keyup.enter="toLogin()"
            type="password"
            v-model="loginForm.password"
            autocomplete="new-password"
          />
          <span class="msg_hint" :class="loginForm.password?'focus':''">密码</span>
        </div>
      </div>
      <div
        id="button_box"
        style="margin-top:50px;background:white;color:#808080;font-weight:bold"
        @click="toLogin()"
      >登 录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    toLogin() {
      if (!this.loginForm.name) {
        this.$message.warning("账号不能为空!");
        return;
      }
      if (!this.loginForm.password) {
        this.$message.warning("密码不能为空!");
        return;
      }
      if (
        this.loginForm.name != "admin" ||
        this.loginForm.password != "123456"
      ) {
        this.$message.warning("账号或密码有误!");
        return;
      }
      this.$store.commit("USER_SIGNIN", {});
      this.$message.success("登录成功！");
      this.$router.replace({
        name: "Home"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(
    45deg,
    var(--base) 0%,
    var(--base) 30%,
    #f1f1f1 30%,
    #f1f1f1 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    position: absolute;
    width: 100%;
    top: 10%;
    left: 0;
    text-align: center;
    h2 {
      font-weight: 200;
      letter-spacing: 1rem;
    }
    p {
      margin: 10px 0;
      font-size: 12px;
      color: #808080;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
  }
  .login_box {
    width: 350px;
    input {
      color: #5a5a5a;
    }
  }
}
#button_box {
  transition: 0.3s;
  user-select: none;
  width: 100%;
  height: 45px;
  background: var(--base);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
  &:hover {
    box-shadow: 0 0 5px #ccc;
  }
}
#input_box {
  display: inline-block;
  width: 100%;
  height: 40px;
  flex-wrap: nowrap;
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  .label {
    white-space: nowrap;
    margin-right: 10px;
    font-size: 17px;
    text-align: right;
    i {
      font-size: 25px;
      color: #808080;
    }
  }
  .input_text {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    input {
      outline: none;
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      border-bottom: 2px solid #808080;
      font-size: 16px;
      padding: 0;
      padding-right: 25px;
      letter-spacing: 0.2rem;
      &:focus ~ .msg_hint {
        transform: translateY(calc(-200% + 10px)) translateX(0px) scale(0.9);
      }
    }
    .msg_hint {
      letter-spacing: 0.2rem;
      user-select: none;
      pointer-events: none;
      transition: transform 0.3s;
      position: absolute;
      transform-origin: 0 50%;
      transform: translateY(0) translateX(0px) scale(1);
      font-size: 14px;
      color: #808080;
    }
    .msg_hint.focus {
      transform: translateY(calc(-200% + 10px)) translateX(0px) scale(0.9);
    }
  }
}
</style>