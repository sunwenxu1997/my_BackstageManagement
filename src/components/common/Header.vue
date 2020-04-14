<template>
  <div class="header">
    <div class="h_l">
      <span>{{$siteSet.name}}</span>
    </div>

    <div class="h_r">
      <span class="user_img">
        <img src="@/assets/img/user.jpg" alt />
      </span>
      <span class="user_name">admin</span>
      <span class="login_out" @click="loginOut()">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      this.$message.success("退出成功");
      this.$store.commit("USER_SIGNOUT");
      this.$router.replace({
        name: "Login"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 99;
  width: 100%;
  min-width: 500px;
  background: var(--base);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
  user-select: none;
  .h_l {
    font-size: 17px;
    font-weight: bold;
  }
  .h_r {
    display: flex;
    align-items: center;
    .user_img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: inline-block;
      overflow: hidden;
      margin: 0 10px;
      img {
        height: 100%;
      }
    }
    .user_name {
      font-size: 15px;
    }
    .login_out {
      font-size: 13px;
      margin-left: 30px;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }
}
</style>