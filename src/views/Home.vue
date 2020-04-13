<template>
  <div>
    <Header class="header"></Header>
    <div class="hold_content">
      <!-- 最大高度 - 头部导航栏的高 50  -->
      <Sidebar class="sidebar" :style="`max-height: ${h - 50}px;`"></Sidebar>
      <div class="hold_content_c" :style="contentOpen?`max-width: calc(100% - 60px);`:`max-width: calc(100% - 250px);`">
        <Tags></Tags>
        <keep-alive :include="tagsList">
          <router-view style="padding: 20px;"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Tags from "../components/common/Tags";
export default {
  components: {
    Header,
    Sidebar,
    Tags
  },
  data() {
    return {
      tagsList: [],
      contentOpen:false, //右侧内容是否展开
      //窗口高
      h: window.innerHeight
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
}
.hold_content {
  min-width: 1200px;
  width: 100%;
  min-height: calc(100% - 50px);
  position: absolute;
  top: 50px;
  display: flex;
  .sidebar {
    background: #f1f1f1;
    position: sticky;
    top: 50px;
    z-index: 1;
    // border-right: 1px solid #f1f1f1;
    box-shadow: 1px 0 2px #f1f1f1;
  }
  .hold_content_c {
    width: 100%;
    min-height: 100%;
  }
}
</style>