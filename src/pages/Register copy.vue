<template>
  <div class="sub-container">
    <div >
      <h1
      >
        Register
      </h1>
      <p >
        Fill fields below to register
      </p>
      <div >
        <label for="firstname" 
          >Firstname</label
        >
        <input
          type="text"
          name="firstname"
          
        />
      </div>
      <div >
        <label for="lastname" 
          >Lastname</label
        >
        <input
          type="text"
          name="lastname"
        >
      </div>
      <div >
        <label for="email"
          >Username</label
        >
        <input
          type="text"
          name="username"
          
          v-model="userData.username"
        />
      </div>
      <div >
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          
          v-model="userData.email"
        />
      </div>
      <div >
        <label for="password" 
          >Password</label
        >
        <input
          type="password"
          name="email"
          
          v-model="userData.password"
        />
      </div>
      <button
        @click="registerUser()"
        
      >
        Register
      </button>
      <p >
        Laoreet magna curae; maecenas magnis et sed.
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import db from "../firestore";

export default {
  name: "Register",
  data() {
    return {
      userData: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.userData.email,
          this.userData.password
        )
        .then(() => {
          alert("registration ok!");
          db.collection("users")
            .add({
              firstname: this.userData.firstname,
              lastname: this.userData.lastname,
              username: this.userData.username,
              email: this.userData.email,
            })
            .then(() => {
              alert("pushing home");
              this.$router.push("/home")
            })
            .catch((err) => {
              alert("collection error!");
              this.errorMessage = err.message;
            })
          alert("pushing login");
          this.$router.push("/login");
        })
        .catch((err) => {
          alert("registration error1!");
          this.errorMessage = err.message;
          alert("pushing login");
          this.$router.push("/login");
        });
    },
  },
};
</script>
<style ></style>
