import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


import i18n from "./i18n.js"

import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';

import SpeedDial from "primevue/speeddial"
import Badge from "primevue/badge";
import Panel from "primevue/panel";
import MultiSelect from "primevue/multiselect";
import Fieldset from "primevue/fieldset";
import Textarea from "primevue/textarea";
import Steps from "primevue/steps";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import InputNumber from 'primevue/inputnumber';
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Image from "primevue/image";
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Password from "primevue/password";
import Divider from "primevue/divider";
import InputMask from "primevue/inputmask";
import AutoComplete from "primevue/autocomplete";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Menu from "primevue/menu";
import SplitButton from "primevue/splitbutton";
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import CascadeSelect from 'primevue/cascadeselect';
import ConfirmDialog from 'primevue/confirmdialog';
import FileUpload from 'primevue/fileupload';

//import ConfirmationService from 'primevue/confirmationservice';
import ToastService from "primevue/toastservice";

//PrimeVue Styles
import "primevue/resources/themes/aura-light-amber/theme.css";
//import "primevue/resources/themes/md-light-indigo/theme.css";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
//PrimeFlex Companion
import "primeflex/primeflex.css";

import ProductsPage from "@/users/products/pages/ProductsPage.vue";
import productsCreateFormComponent from "@/users/products/components/products-create-form.component.vue";
import LoginPage from "@/users/login/pages/LoginPage.vue";
import SignupPage from "@/users/login/pages/SignupPage.vue";
import HomePage from "@/users/homepage/pages/HomePage.vue";
import ProductsUpdateForm from "@/users/products/components/products-update-form.component.vue";
import ProfileComponent from "@/users/profile/components/profile.component.vue";
import Inplace from "primevue/inplace";

const routes = [
    { path: '/homepage', component: HomePage},
    { path: '/', component: HomePage },
    { path: '/products', component: ProductsPage},
    { path: '/createproducts', component: productsCreateFormComponent},
    { path: '/products/update/:productId', name: 'ProductUpdate', component: ProductsUpdateForm },
    { path: '/login', component: LoginPage},
    { path: '/signup', component: SignupPage},
    { path: '/profile', component: ProfileComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(PrimeVue, {ripple:true})
    .component("pv-menu", Menu)
    .component("pv-split-button", SplitButton)
    .component("pv-speed-dial", SpeedDial)
    .component("pv-badge", Badge)
    .component("pv-panel", Panel)
    .component("pv-multi-select", MultiSelect)
    .component("pv-field", Fieldset)
    .component("pv-data-table", DataTable)
    .component("pv-steps", Steps)
    .component("pv-text-area", Textarea)
    .component("pv-checkbox", Checkbox)
    .component("pv-column", Column)
    .component("pv-button", Button)
    .component("pv-toolbar", Toolbar)
    .component("pv-input-text", InputText)
    .component("pv-input-number", InputNumber)
    .component("pv-row", Row)
    .component("pv-dialog", Dialog)
    .component("pv-dropdown", Dropdown)
    .component("pv-tag", Tag)
    .component("pv-card", Card)
    .component("pv-img", Image)
    .component("pv-data-view", DataView)
    .component("pv-rating", Rating)
    .component("pv-password", Password)
    .component("pv-divider", Divider)
    .component("pv-input-mask", InputMask)
    .component("pv-autocomplete", AutoComplete)
    .component("pv-chip", Chip)
    .component("pv-upload", FileUpload)
    .component("pv-avatar", Avatar)
    .component("pv-avatar-group", AvatarGroup)
    .component("pv-inplace", Inplace)
    .component("pv-cascade", CascadeSelect)
    .component("pv-confirm-dialog", ConfirmDialog)
    .component("pv-file-upload", FileUpload)
    .component("pv-toast", Toast)
    .use(ToastService)
    .use(router)
    .use(i18n)
    .mount('#app')
