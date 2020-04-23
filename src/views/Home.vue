<template>
  <div>
    <Header class="header"></Header>
    <div class="hold_content">
      <!-- 最大高度 - 头部导航栏的高 50  -->
      <Sidebar class="sidebar" ></Sidebar>
      <div
        class="hold_content_c"
        :style="contentOpen?`max-width: calc(100% - 65px);`:`max-width: calc(100% - 250px);`"
      >
        <Tags
          class="tags"
          :style="contentOpen?'width: calc(100% - 65px);':'width: calc(100% - 250px);'"
        ></Tags>
        <keep-alive :include="tagsList">
          <router-view style="padding: 20px;margin-top:40px;"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Tags from "../components/common/Tags";
import bus from "../components/common/bus";
export default {
  components: {
    Header,
    Sidebar,
    Tags
  },
  data() {
    return {
      tagsList: [],
      contentOpen: true, //右侧内容是否展开,默认展开
    };
  },
  created() {
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    // $on 接收子组件的自定义事件 值，此处接收的是tags 标签页的
    bus.$on("tags", msg => {
      let arr = [];
      for (let i = 0; i < msg.length; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
}
.hold_content {
  min-width: 1400px;
  width: 100%;
  min-height: calc(100% - 50px);
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: flex-end;
  .sidebar {
    background: #f1f1f1;
    position: fixed;
    height: 100%;
    top: 50px;
    left: 0;
    z-index: 1;
    // border-right: 1px solid #f1f1f1;
    box-shadow: 1px 0 2px #f1f1f1;
  }
  .hold_content_c {
    transition: 0.4s;
    width: 100%;
    min-height: 100%;
  }
  .tags {
    transition: 0.4s;
    position: fixed;
    top: 50px;
    z-index: 9;
  }
}
</style>