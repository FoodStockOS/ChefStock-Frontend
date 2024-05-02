<template>
  <pv-toast position="top-left"/>
  <div class="h-screen grid grid-nogutter surface-section text-800">
    <div
        class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center justify-content-center"
    >
      <section class="">
        <div class="text-center mb-3 ">
          <pv-img src="https://i.postimg.cc/mrsLXChs/e-Rent-Car-removebg-preview.png" height="50" class=""/>
        </div>
        <div>
          <form @submit.prevent="handleSubmit(!v$.$error)">
            <div class="p-inputgroup mb-3">
                  <span class="p-inputgroup-addon ">
                    <i class="pi pi-user"></i>
                  </span>
              <pv-input-text id="loginEmail" v-model="email" placeholder="Email" :class="{ 'p-invalid': v$.email.$error && submitted }" v-tooltip.right="'Put your email'" />
            </div>
            <div class="p-inputgroup">
                  <span class="p-inputgroup-addon ">
                    <i class="pi pi-key"></i>
                  </span>
              <pv-password id="loginPassword" v-model="password" :class="{ 'p-invalid': v$.password.$error && submitted }" :feedback="false" toggleMask placeholder="Password" v-tooltip.right="'Put your password'"/>
            </div>
            <div class = "flex  justify-content-between mt-3">
              <pv-button icon="pi pi-car" type="submit" class="p-button  "  label="Login"/>
              <pv-button icon="pi pi-arrow-right" iconPos="right" @click="$router.push('/register')" class = "p-button-secondary button" label="Register" />
            </div>
          </form>
        </div>
      </section>
    </div>
    <div class=" md:col-6  ">
      <img
          src="https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image"
          class="md:ml-auto   md:h-full"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
      />
    </div>
  </div>
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { userStore } from "@/user/login/stores/user-store.js";

export default {
  name: "login.component",
  setup() {
    const v$ = useVuelidate();
    return { v$ };
  },
  userStore: null,
  data() {
    return {
      submitted: false,
      email: "",
      password: "",
      wrongEmailOrPassword: false,
    };
  },
  validations() {
    return {
      email: {
        required,
      },
      password: {
        required,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      if (!this.v$.$invalid) {
        this.$toast.add({
          severity: "success",
          summary: "Login success",
          detail: "Welcome to FoodStockOS",
          life: 3000,
        });
        userStore()
            .getEmailAndPassword(this.email, this.password)
            .then((response) => {
              userStore().setUser(response.data);
              console.log("DATA: ", response.data);
              if (response.data.typeOfUser === "Gerente") {
                this.$router.push("/");
              } else {
                this.$router.push("/rents");
              }
            })
            .catch((e) => {
              console.log(e);
            });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Verify fields to login.",
          life: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>

</style>