<template>
  <h1>This is {{page}} page.</h1>
</template>

<script>

export default {

  data() {
    return {
      page: '404'
    };
  },

  computed: {

  },

  methods: {}

};

</script>

<style lang="less">
h1 {
  color: green;
}
</style>
