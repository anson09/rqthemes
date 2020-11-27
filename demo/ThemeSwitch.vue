<template>
  <el-radio-group class="switcher" v-model="radio" @change="update">
    <el-radio-button label="Light"></el-radio-button>
    <el-radio-button label="Dark"></el-radio-button>
  </el-radio-group>
</template>
<script>
export default {
  data() {
    return {
      radio: "Light",
    };
  },
  methods: {
    update(e) {
      const className = {
        Light: "theme-light",
        Dark: "theme-dark",
      };
      document.querySelector("body").className = className[e];
    },
  },
};
</script>
<style scoped lang="scss">
.switcher {
  position: absolute;
  right: 0;
  margin-right: 50px;
  &::before {
    font-size: 12px;
    content: "THEME SWITCHER:";
    margin-right: 12px;
  }
}
</style>
