/* Copyright © 2019 STJV <contact@stjv.fr>
 *
 * This work is free. You can redistribute it and/or modify it under the terms of
 * the Do What The Fuck You Want To Public License, Version 2, as published by
 * Sam Hocevar.
 * 
 * See the COPYING file for more details.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: function () {
        return import(/* webpackChunkName: "users" */ './views/Users.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})