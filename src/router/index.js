/**
 * @Author: chenanjie
 * @Date:   2017-06-13T21:20:08+08:00
 * @Last modified by:   chenanjie
 * @Last modified time: 2017-07-08T14:47:06+08:00
 */


/*jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/Hello';
import login from '../components/login';
import admin from '../components/admin';
import addJs from '../components/addJs';
import delJs from '../components/delJs';
import addPhoto from '../components/addPhoto';
import delPhoto from '../components/delPhoto';
import preView from '../components/preView';
import uploadJs from '../components/uploadJs';
import chart from '../components/chart';
import edit from '../components/edit';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/admin',
        name: 'admin',
        component: admin,
        redirect: '/admin/preView',
        children: [{
            path: '/admin/addJs',
            name: 'addJs',
            component: addJs
        }, {
            path: '/admin/delJs',
            name: 'delJs',
            component: delJs
        }, {
            path: '/admin/addPhoto',
            name: 'addPhoto',
            component: addPhoto
        }, {
            path: '/admin/delPhoto',
            name: 'delPhoto',
            component: delPhoto
        }, {
            path: '/admin/preView',
            name: 'preView',
            component: preView
        }, {
            path: '/admin/uploadJs',
            name: 'uploadJs',
            component: uploadJs
        }, {
            path: '/admin/chart',
            name: 'chart',
            component: chart
        }, {
            path: '/admin/edit',
            name: 'edit',
            component: edit
        }]
    }]
});