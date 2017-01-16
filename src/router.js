import Vue from 'vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

function load (component) {
  return () => System.import(`./components/${component}.vue`);
}

export default new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    // { path: '/', component: load('Index') }, // Default

    {
      path: '/',
      component: load('Main'),
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'list',
          component: load('List')
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'detail',
          component: load('Detail')
        },
        { path: '*', component: load('404') }, // 404
      ]
    },

  ]
});
