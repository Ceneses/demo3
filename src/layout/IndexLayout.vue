<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="auto">
      <el-scrollbar>
        <el-menu
            v-for="(item, index) in menuTree"
            :key="index"
            :collapse="isCollapse"
            :collapse-transition="false"
            default-active="1"
            mode="vertical"
            router
        >
          <el-menu-item v-if="item.children == null || item.children === []" @click="handleClickMenuItem(e)">
            <el-icon>
              <component :is="item.icon"/>
            </el-icon>
            <span>{{ item.title }}</span>
          </el-menu-item>
          <el-sub-menu v-for="(subItem, subIndex) in item.children" v-else :key="subIndex">
            <template #title>
              <el-icon>
                <component :is="item.icon"/>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item :index="subItem.route">
              <el-icon>
                <component :is="subItem.icon"/>
              </el-icon>
              <span>{{ subItem.title }}</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header
          style="text-align: right; font-size: 12px; display: flex;justify-content: space-between;align-items: center">
        <div>
          <el-button size="large" @click="isCollapse = !isCollapse">切换</el-button>
        </div>
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
            >
              <setting
              />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>创作中心</el-dropdown-item>
                <el-dropdown-item>个人设置</el-dropdown-item>
                <el-dropdown-item>账号登出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span style="display: flex;justify-content: space-between;align-items: center">
            <h1>恒成立</h1>
            <el-icon>
              <user/>
            </el-icon>
          </span>
        </div>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {Document} from "@element-plus/icons-vue";

export default {
  name: "IndexLayout",
  components: {Document},
  data() {
    return {
      menuTree: [
        {
          index: "nav",
          icon: "document",
          title: "文档",
          children: [{
            index: "Two",
            icon: "document",
            title: "信件",
            route: "/dashboard",
          }]
        },
        {
          index: "sys",
          icon: "setting",
          title: "洗头膏",
          route: "/setting",
          // children: []
        }
      ],
      tableData: Array.from({length: 20}).fill({
        date: "2016-05-02",
        name: "恒心",
        address: "浙江省杭州市庆春路50兴业大厦12楼",
      }),
      isCollapse: true
    };
  },
  computed: {
    asideWidth() {
      return this.isCollapse ? "auto" : "200px";
    }
  },
  methods: {
    handleClickMenuItem(e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
