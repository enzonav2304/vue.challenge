<template>
  <div class="register-container">
    <div class="register-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer register-navbar-interactive"
      >
        <span class="logo">electriblog</span>
        <div data-thq="thq-navbar-nav" class="register-desktop-menu">
          <nav class="register-links"></nav>
          <div class="register-buttons">
            <router-link to="/login"><button class="register-login buttonFlat">Login</button></router-link>
            <router-link to="/register"></router-link><button class="buttonFilled">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="register-burger-menu">
          <svg viewBox="0 0 1024 1024" class="register-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="register-mobile-menu1 mobileMenu">
          <div class="register-nav">
            <div class="register-top">
              <span class="logo">LOGINO</span>
              <div data-thq="thq-close-menu" class="register-close-menu">
                <svg viewBox="0 0 1024 1024" class="register-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="register-links1">
              <span class="register-nav12 bodySmall">Home</span>
              <span class="register-nav22 bodySmall">Login</span>
              <span class="register-nav32 bodySmall">Sign Up</span>
            </nav>
            <div class="register-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="register-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="register-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="register-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="register-hero">
      <div class="heroContainer register-hero1">
        <div class="register-container1">
          <div class="register-feature-card">
            <svg viewBox="0 0 1024 1024" class="register-icon10">
              <path
                d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
              ></path>
            </svg>
            <h2 class="register-text">Registrazione utente</h2>
            <span class="register-text1">I campi con * sono obbligatori</span>
            <form id="validated-form">
              <div class="register-container2">
                <label class="register-text2">Username*</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  class="register-textinput input"                 
                  v-model="userData.username"
                  required
                />
              </div>
              <span 
                class="text-danger" 
                v-if="validationErrors.username" 
                v-text="validationErrors.username">
              </span>
              <div class="register-container3">
                <label class="register-text2">&nbsp; &nbsp; &nbsp;&nbsp;Email*</label>
                <input                
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  class="register-textinput input"                 
                  v-model="userData.email"
                  required
                />
              </div>
              <span 
                class="text-danger" 
                v-if="validationErrors.email" 
                v-text="validationErrors.email">
              </span>
              <div class="register-container3">
                <label class="register-text3">Password*</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  class="register-textinput input"                 
                  v-model="userData.password"
                  required
                />
              </div>
              <span 
                class="text-danger" 
                v-if="validationErrors.password" 
                v-text="validationErrors.password">
              </span>
            </form>
            <button class="register-hero-button1 buttonFilled" @click="registerUser()">Register</button>
          </div>
        </div>
      </div>
    </div>
    <div class="register-footer">
      <footer class="footerContainer register-footer1">
        <div class="register-separator"></div>
        <div class="register-container4">
          <span class="bodySmall register-text4">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div class="register-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="register-icon12 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg><svg
              viewBox="0 0 877.7142857142857 1024"
              class="register-icon14 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg><svg
              viewBox="0 0 602.2582857142856 1024"
              class="register-icon16 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase/compat/app'
import db from '../firestore'
import x from '../scripts/validationForm'

export default {
  name: 'Register',
  props: {},
  metaInfo: {
    title: 'Register - Handmade Sane Eland',
    meta: [
      {
        property: 'og:title',
        content: 'Register - Handmade Sane Eland',
      },
    ],
  },
  data() {
    return {
      userData: {        
        username: "",
        email: "",
        password: "",
      },
      successMessage: "",
      errorMessage: "",
      validationErrors: {
        username: null,
        email: null,
        password: null
      } 
    }
  },
  methods: {
    registerUser: function() {
      if (x.validateForm(this.validationErrors)) {
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
                alert("collection error!")
                this.errorMessage = err.message
              })
            alert("pushing login");
            this.$router.push("/login")
          })
          .catch((err) => {
            alert("server error: registration error!");
            this.errorMessage = err.message;
            alert("pushing home")
            this.$router.push("/")
          })
        }
      }
    },
  validateForm: function(errorObjectName, my_form) {
    if(arguments[1]) {
      if(document.getElementById(my_form)) {
        //console.log('validateForm function')
        var nodes = document.getElementById(my_form).querySelectorAll(':invalid'); 
      }
    } else {
      if(document.getElementById('validated-form')) {
        //console.log('validateForm function')
        var nodes = document.getElementById('validated-form').querySelectorAll(':invalid'); 
      }
    }        
    //console.log(nodes)
    Object.keys(errorObjectName).forEach(key => {
      //console.log(errorObjectName)
      errorObjectName[key] = null
    })
    if (nodes.length > 0) {
      nodes.forEach(node => {
        if (node.title) {
          errorObjectName[node.name] = node.title
        } else {
          errorObjectName[node.name] = node.validationMessage
        }
        node.addEventListener('change', function (e) {
          vm.validateForm(formId, errorObjectName)
        })
      })    
      return false
    }
    else {
      return true
    }
  }
}
</script>

<style scoped>
.text-danger {
  color: #dc3545 !important;
}
.register-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.register-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.register-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.register-links {
  flex: 1;
  display: flex;
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: row;
  justify-content: center;
}
.register-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.register-login {
  margin-right: 32px;
}
.register-burger-menu {
  display: none;
}
.register-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.register-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
}
.register-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.register-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.register-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.register-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.register-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.register-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.register-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.register-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.register-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.register-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.register-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 977px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-feature-card {
  width: 537px;
  height: 490px;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-style: ridge;
  border-width: 1px;
  flex-direction: column;
  background-color: #f7f1f1;
}
.register-icon10 {
  fill: var(--dl-color-gray-500);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.register-text {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.register-text1 {
  color: var(--dl-color-gray-700);
  text-align: center;
}
.register-container2 {
  width: 302px;
  height: 53px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  justify-content: center;
}
.register-text2 {
  font-size: 18px;
  text-align: left;
  font-family: "Inter";
  margin-right: var(--dl-space-space-oneandhalfunits);
}
.register-textinput {
  width: 135px;
  height: 50%;
}
.register-container3 {
  width: 302px;
  height: 53px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  justify-content: center;
}
.register-text3 {
  font-size: 18px;
  text-align: left;
  font-family: "Inter";
  margin-right: var(--dl-space-space-oneandhalfunits);
}
.register-textinput1 {
  width: 135px;
  height: 50%;
}
.register-hero-button1 {
  margin-top: var(--dl-space-space-twounits);
}
.register-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-900);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.register-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.register-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.register-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.register-icon14 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.register-icon16 {
  width: 24px;
  height: 24px;
}
@media(max-width: 991px) {
  .register-hero1 {
    flex-direction: column;
  }
  .register-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
}
@media(max-width: 767px) {
  .register-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-desktop-menu {
    display: none;
  }
  .register-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .register-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .register-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .register-container4 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .register-text4 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .register-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .register-mobile-menu1 {
    padding: 16px;
  }
  .register-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .register-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .register-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .register-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .register-container4 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .register-text4 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
