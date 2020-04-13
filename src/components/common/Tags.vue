<template>
  <div class="tags" v-if="showTags">
    <span
      class="tag_nav"
      :class="{'active':isActive(i.path)}"
      :style="`width:${100/(tagsList.length + 5)}%`"
      v-for="(i,index) in tagsList"
      :key="index"
      :title="i.title"
    >
      <router-link :to="i.path" class="title">{{i.title}}</router-link>
      <span class="close" @click="closeTags(index)">
        <i class="el-icon-close"></i>
      </span>
    </span>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  data() {
    return {
      tagsList: []
    };
  },
  created() {
    this.setTags(this.$route);
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/index");
      }
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        // if (this.tagsList.length >= 8) {
        //   this.tagsList.shift();
        // }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        });
      }
      bus.$emit("tags", this.tagsList);
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  height: 50px;
  width: 100%;
  overflow-x: auto;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  position: sticky;
  top: 50px;
  box-shadow: 0 1px 2px #f1f1f1;
  .tag_nav {
    max-width: 150px;
    flex-grow: 1;
    background: white;
    display: inline-block;
    position: relative;
    font-size: 13px;
    margin-left: 5px;
    border-radius: 3px;
    white-space: nowrap;
    cursor: pointer;
    transform-origin: 0% 50%;
    animation: tags 0.3s ease both 1;
    // clip-path: polygon(0 0,calc(100% - 7px) 0,100% 50%,calc(100% - 7px) 100%,0 100%,7px 50%);
    &.active {
      background: var(--start_base) !important;
      box-shadow: 2px 0 5px #ccc;
      * {
        color: white !important;
      }
    }
    &:hover {
      background: #f1f1f1;
      box-shadow: 2px 0 5px #ccc;
    }
    &:hover .close {
      opacity: 1;
    }
    .title {
      padding: 5px 10px;
      padding-right: 25px;
      color: #5a5a5a;
      text-decoration: none;
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }
    .close {
      opacity: 0;
      position: absolute;
      right: 5px;
      top: 7px;
      i {
        font-size: 13px;
      }
    }
  }
  .tag_nav:last-child {
    margin-right: 5px;
  }
}
@keyframes tags {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
</style>