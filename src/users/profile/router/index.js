import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/users/profile/pages/Profile.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }
    ]
});
