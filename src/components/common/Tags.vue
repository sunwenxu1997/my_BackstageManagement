<template>
  <SlickList
    v-if="showTags"
    :distance="5"
    :lockToContainerEdges="true"
    :lockOffset="-5"
    axis="x"
    lockAxis="x"
    v-model="tagsList"
    class="SortableList"
  >
    <SlickItem
      class="SortableItem"
      :class="{'active':isActive(i.path)}"
      :style="`width:${100/(tagsList.length + 5)}%`"
      v-for="(i,index) in tagsList"
      :key="index"
      :title="i.title"
      :index="index"
    >
      <router-link :to="i.path" class="title">{{i.title}}</router-link>
      <span class="close" @click="closeTags(index)">
        <i class="el-icon-close"></i>
      </span>
    </SlickItem>
  </SlickList>
</template>

<script>
import bus from "./bus";
import { SlickList, SlickItem } from "vue-slicksort";
export default {
  components: {
    SlickItem,
    SlickList
  },
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
          //此处要注意在使用的页面，头部，也就是 data() 上方记着加 name:''，这样才能获到
          name: route.matched[1].components.default.name
        });
      }
      //子组件定义事件
      // 父组件接收 用 $on
      bus.$emit("tags", this.tagsList);
    }
  }
};
</script>

<style lang="scss" scoped>
.SortableList {
  width: 100%;
  height: 40px;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  background: #f1f1f1;
  box-shadow: 0 1px 2px #f1f1f1;
}
.SortableItem {
  padding: 5px 10px;
  padding-right: 25px;
  max-width: 150px;
  flex-grow: 1;
  background: white;
  display: inline-block;
  position: relative;
  z-index: 10;
  font-size: 13px;
  margin-left: 5px;
  border-radius: 3px;
  white-space: nowrap;
  cursor: pointer;
  transform-origin: 0% 50%;
  // animation: tags 0.3s ease both 1;
  overflow: hidden;
  &.active {
    background: var(--start_base) !important;
    box-shadow: 2px 0 5px #ccc;
    * {
      color: white !important;
    }
    .close {
      opacity: 1;
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
    color: #5a5a5a;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }
  .close {
    // opacity: 0;
    position: absolute;
    right: 5px;
    top: 7px;
    i {
      color: #808080;
      font-weight: bold;
      font-size: 13px;
    }
  }
}
</style>