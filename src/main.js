import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import router from './router';
import { createPinia } from "pinia";

import i18n from "./i18n.js"

import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';

import SpeedDial from "primevue/speeddial";
import Tooltip from "primevue/tooltip";
import Badge from "primevue/badge";
import Panel from "primevue/panel";
import MultiSelect from "primevue/multiselect";
import Fieldset from "primevue/fieldset";
import Textarea from "primevue/textarea";
import Steps from "primevue/steps";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
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
import Calendar from "primevue/calendar";
import AutoComplete from "primevue/autocomplete";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Menu from "primevue/menu";
import SplitButton from "primevue/splitbutton";
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Inplace from 'primevue/inplace';
import CascadeSelect from 'primevue/cascadeselect';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from "primevue/toastservice";

//PrimeVue Styles
import "primevue/resources/themes/md-light-indigo/theme.css";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
//PrimeFlex Companion
import "primeflex/primeflex.css";

const pinia = createPinia()


const app = createApp(App)
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
    .component("pv-sidebar", Sidebar)
    .component("pv-row", Row)
    .component("pv-dialog", Dialog)
    .component("pv-toast", Toast)
    .component("pv-dropdown", Dropdown)
    .component("pv-tag", Tag)
    .component("pv-card", Card)
    .component("pv-img", Image)
    .component("pv-data-view", DataView)
    .component("pv-rating", Rating)
    .component("pv-password", Password)
    .component("pv-divider", Divider)
    .component("pv-input-mask", InputMask)
    .component("pv-calendar", Calendar)
    .component("pv-autocomplete", AutoComplete)
    .component("pv-chip", Chip)
    .component("pv-upload", FileUpload)
    .component("pv-data-view-layout-options", DataViewLayoutOptions)
    .component("pv-avatar", Avatar)
    .component("pv-avatar-group", AvatarGroup)
    .component("pv-inplace", Inplace)
    .component("pv-cascade", CascadeSelect)
    .component("pv-confirm-dialog", ConfirmDialog)
    .use(i18n)
    .use(router)
    .use(vuetify)
    .mount('#app')
