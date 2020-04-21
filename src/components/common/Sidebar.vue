<template>
  <div class="sidebar" ref="sidebar">
    <div class="title" :class="$parent.contentOpen?'close':''">
      <span class="t" v-show="!$parent.contentOpen">导航</span>
      <span class="i" @click="sidebarStretch()">
        <i class="el-icon-s-fold" v-if="!$parent.contentOpen"></i>
        <i class="el-icon-s-unfold" v-else></i>
      </span>
    </div>
    <div class="sidebar_nav">
      <el-menu
        :default-active="onRoutes"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="$parent.contentOpen"
        unique-opened
        router
      >
        <el-submenu v-if="n.children" :index="n.index" v-for="(n,index) in navList" :key="index">
          <template slot="title">
            <i :class="n.icon"></i>
            <span slot="title">{{n.title}}</span>
          </template>
          <el-menu-item-group v-if="n.children" title="">
            <el-menu-item
              :index="i.index"
              v-for="(i,indexC) in n.children"
              :key="indexC"
            >{{i.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :index="n.index">
          <i :class="n.icon"></i>
          <span slot="title">{{n.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  data() {
    return {
      navList: [
        {
          icon: "el-icon-guide",
          title: "主页",
          index: "index"
        },
        {
          icon: "el-icon-location",
          title: "导航一",
          index: "home",
          children: [
            {
              title: "选项1",
              index: "one"
            },
            {
              title: "选项2",
              index: "two"
            },
            {
              title: "选项3",
              index: "1-3"
            }
          ]
        },
        {
          icon: "el-icon-menu",
          title: "导航二",
          index: "2",
          children: [
            {
              title: "选项1",
              index: "2-1"
            },
            {
              title: "选项2",
              index: "2-2"
            },
            {
              title: "选项3",
              index: "three"
            }
          ]
        },
        {
          icon: "el-icon-setting",
          title: "导航三",
          index: "3"
        }
      ]
    };
  },
  mounted() {
    if (this.$parent.contentOpen) {
      this.$refs["sidebar"].style.minWidth = "65px";
    } else {
      this.$refs["sidebar"].style.minWidth = "250px";
    }
  },
  methods: {
    //侧边栏的伸展
    sidebarStretch() {
      this.$parent.contentOpen = !this.$parent.contentOpen;
      if (this.$parent.contentOpen) {
        this.$refs["sidebar"].style.minWidth = "65px";
      } else {
        this.$refs["sidebar"].style.minWidth = "250px";
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 100%;
}
.sidebar {
  min-width: 250px;
  transition: 0.4s;
  user-select: none;
  overflow-y: auto;
  overflow-x: hidden;
  * {
    box-sizing: border-box !important;
  }
  &::-webkit-scrollbar {
    opacity: 0;
    background: transparent !important;
    width: 3px; //y轴滚轮的宽
    height: 15px; //x轴滚轮的高
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background: #d3d3d3;
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: white;
  }
  .title {
    background: var(--start_base);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    font-size: 15px;
    &.close {
      justify-content: center;
    }
    .t {
      white-space: nowrap;
      font-weight: bold;
      color: white;
    }
    .i {
      cursor: pointer;
      i {
        font-size: 20px;
        color: white;
      }
    }
  }
  .sidebar_nav {
  }
}
</style>