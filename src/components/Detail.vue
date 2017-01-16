<template>
  <h1 class="detail-title">This is {{page}} page.</h1>
</template>

<script>

export default {

  data() {
    return {
      page: 'detail'
    };
  },

  computed: {

  },

  methods: {},

  mounted() {
    console.log('detail mounted');
  },

  beforeDestroy() {
    console.log('before detail destroy');
  }

};

</script>

<style lang="less" scoped>

h1.detail-title {
  color: red;
}

</style>
