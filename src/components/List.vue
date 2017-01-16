<template>
  <h1>This is {{page}} page.</h1>
</template>

<script>

export default {

  data() {
    return {
      page: 'list'
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
