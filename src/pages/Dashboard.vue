<template>
  <div class="dashboard-container">
    <div class="dashboard-header-authenticated">
      <header
        data-thq="thq-navbar"
        class="navbarContainer dashboard-navbar-interactive"
      >
        <span class="logo">electriblog</span>
        <div data-thq="thq-navbar-nav" class="dashboard-desktop-menu">
          <nav class="dashboard-links"></nav>
          <div class="dashboard-buttons">
            <router-link to="/dashboard" class="dashboard-login buttonFlat">
              Dashboard
            </router-link>
            <router-link to="/insert" class="dashboard-login1 buttonFlat">
              New Post
            </router-link>
            <router-link to="/posts" class="dashboard-login2 buttonFlat">
              Posts
            </router-link>
            <router-link to="/account" class="dashboard-login3 buttonFlat">
              Account
            </router-link>
            <button class="dashboard-login4 buttonFlat" @click.prevent.stop="logout">Logout</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="dashboard-burger-menu">
          <svg viewBox="0 0 1024 1024" class="dashboard-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="dashboard-mobile-menu1 mobileMenu">
          <div class="dashboard-nav">
            <div class="dashboard-top">
              <span class="logo">LOGINO</span>
              <div data-thq="thq-close-menu" class="dashboard-close-menu">
                <svg viewBox="0 0 1024 1024" class="dashboard-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="dashboard-links1">
              <span class="dashboard-nav12 bodySmall">Home</span>
              <span class="dashboard-nav22 bodySmall">Login</span>
              <span class="dashboard-nav32 bodySmall">Sign Up</span>
            </nav>
            <div class="dashboard-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="dashboard-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg           ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="dashboard-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="dashboard-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="dashboard-hero">
      <div class="heroContainer dashboard-hero1">
        <div class="dashboard-container1">
          <h1 class="dashboard-hero-heading heading1">
            Benventuto nella tua Dashboard, enzonav
          </h1>
          <span class="dashboard-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Simplify your login and registration processes</span>
                <span><span v-html="rawkzik"></span></span>
              </span>
              <span>
                <span><span v-html="rawzik1"></span></span>
                <span><span v-html="rawj16y"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="rawppb6"></span></span>
                <span><span v-html="rawfn7u"></span></span>
              </span>
              <span>
                <span><span v-html="rawrott"></span></span>
                <span><span v-html="rawax9o"></span></span>
              </span>
            </span>
          </span>
        </div>
        <div class="dashboard-stats">
          <div class="dashboard-stat">
            <svg viewBox="0 0 1152 1024" class="dashboard-icon10">
              <path
                d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
              ></path>
              <path
                d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"
              ></path>
            </svg>
            <span class="dashboard-text14">Utenti Totali</span>
            <span class="dashboard-text15">Lorem ipsum dolor sit amet.</span>
            <h1 class="dashboard-text16"><span>{{numberUsers}}</span></h1>
          </div>
          <div class="dashboard-stat1">
            <svg viewBox="0 0 1024 1024" class="dashboard-icon13">
              <path
                d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"
              ></path>
            </svg>
            <span class="dashboard-text18">Posts Totali</span>
            <span class="dashboard-text19">Lorem ipsum dolor sit amet.</span>
            <h1 class="dashboard-text20"><span>{{count}}</span></h1>
          </div>
          <div class="dashboard-stat2">
            <svg viewBox="0 0 1024 1024" class="dashboard-icon15">
              <path
                d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"
              ></path>
            </svg>
            <span class="dashboard-text22">Post per Users</span>
            <span class="dashboard-text23">Lorem ipsum dolor sit amet.</span>
            <h1 class="dashboard-text24"><span>{{averagePostsPerUser}}</span></h1>
          </div>
        </div>
        <div class="dashboard-stats1">
          <div class="dashboard-stat3">
            <h1 class="dashboard-text26">
              <span>{{randomNumber(numberUsers)}}</span>
              <span>+</span>
            </h1>
            <span class="dashboard-text29">Utenti</span>
            <span class="dashboard-text30">
              Numero utenti per numero casual da 4 a 23
            </span>
          </div>
          <div class="dashboard-stat4">
            <h1 class="dashboard-text31"><span>{{randomNumber(count)}}</span></h1>
            <span class="dashboard-text33">Posts</span>
            <span class="dashboard-text34">
              Numero post per numero casuale da 4 a 23
            </span>
          </div>
          <div class="dashboard-stat5">
            <h1 class="dashboard-text35">
              <span>{{randomNumber(count)}}</span>
              <span>+</span>
            </h1>
            <span class="dashboard-text38">Hours</span>
            <span class="dashboard-text39">
              Numero post per utente per numero casuale da 4 a 23
            </span>
          </div>
          <div class="dashboard-stat6">
            <h1 class="dashboard-text40"><span>24/7</span></h1>
            <span class="dashboard-text42">Support</span>
            <span class="dashboard-text43">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
        </div>
        <div class="dashboard-container2">
          <router-link to="/insert" class="dashboard-hero-button1 buttonFilled">
            Nuovo Post
          </router-link>
          <router-link to="/posts" class="dashboard-hero-button11 buttonFilled">
            User&apos;s Posts
          </router-link>
          <router-link to="/posts" class="dashboard-hero-button12 buttonFilled">
            I tuoi Post
          </router-link>
        </div>
      </div>
    </div>
    <div class="dashboard-gallery"></div>
    <div class="dashboard-features">
      <div class="featuresContainer">
        <div class="dashboard-features1">
          <div class="dashboard-container3">
            <span class="overline">
              <span>features</span>
              <br />
            </span>
            <h2 class="dashboard-features-heading heading2">
              Explore Our Features
            </h2>
            <span class="dashboard-features-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Discover the functionalities that make user authentication and
                    account management a breeze
                  </span>
                  <span><span v-html="raw0nkx"></span></span>
                </span>
                <span>
                  <span><span v-html="rawv3fr"></span></span>
                  <span><span v-html="rawuq3n"></span></span>
                </span>
              </span>
              <span>
                <span>
                  <span><span v-html="raw24xa"></span></span>
                  <span><span v-html="raw5s2h"></span></span>
                </span>
                <span>
                  <span><span v-html="rawtxsd"></span></span>
                  <span><span v-html="rawx9st"></span></span>
                </span>
              </span>
            </span>
          </div>
          <div class="dashboard-container4">
            <feature-card2
              heading="Secure User Authentication"
              subHeading="Protect your account with robust authentication methods"
            ></feature-card2>
            <feature-card2
              heading="Effortless Registration Process"
              subHeading="Quick and easy registration to get you started in no time"
            ></feature-card2>
            <feature-card2
              heading="Customizable Account Settings"
              subHeading="Tailor your account preferences to suit your needs"
            ></feature-card2>
            <feature-card2
              heading="Password Recovery Options"
              subHeading="Regain access to your account with various recovery methods"
            ></feature-card2>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-banner">
      <div class="bannerContainer dashboard-banner1">
        <h1 class="dashboard-banner-heading heading2">
          Secure User Authentication and Account Management
        </h1>
        <span class="dashboard-banner-sub-heading bodySmall">
          <span>
            <span>
              <span>
                Welcome to our platform dedicated to providing secure and reliable
                user authentication and account management solutions. Whether you
                are a business looking to enhance your security measures or an
                individual seeking a seamless login experience, we have you
                covered. Our advanced features ensure your data remains protected
                while offering a user-friendly interface for a hassle-free
                experience.
              </span>
              <span><span v-html="rawp8ya"></span></span>
            </span>
            <span>
              <span><span v-html="raw2kzk"></span></span>
              <span><span v-html="rawfxya"></span></span>
            </span>
          </span>
          <span>
            <span>
              <span><span v-html="rawsswr"></span></span>
              <span><span v-html="rawljnd"></span></span>
            </span>
            <span>
              <span><span v-html="raw36es"></span></span>
              <span><span v-html="raw8g43"></span></span>
            </span>
          </span>
        </span>
        <button class="buttonFilled">Get Started</button>
      </div>
    </div>
    <!-- test code -->
    <div>
    
      <h2>Lista Utenti:</h2>
    <ul>
      <li v-for="user in userList" :key="user.userId">
        {{ user.userId }} - {{ user.name }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Lista Utenti e Post:</h2>
    <ul>
      <li v-for="user in userListWithPost" :key="user.userId">
        {{ user.name }} ({{ user.postCount }} post)
      </li>
    </ul>
  </div>
    <!-- end of test code -->
    <div class="dashboard-faq">
      <div class="dashboard-faq-container faqContainer"></div>
    </div>
    <footer class="footerContainer dashboard-footer">
      <div class="dashboard-separator"></div>
      <div class="dashboard-container5">
        <span class="bodySmall dashboard-text75">
          © 2023 myCompany, All Rights Reserved.
        </span>
        <div class="dashboard-icon-group1">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            class="dashboard-icon17 socialIcons"
          >
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="dashboard-icon19 socialIcons"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="dashboard-icon21 socialIcons"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import axios from 'axios'
import firebase from 'firebase/compat/app'
import { mapGetters } from 'vuex'

import FeatureCard2 from '../components/feature-card2'

export default {
  name: 'Dashboard',
  props: {},
  components: {
    FeatureCard2,
  },
  data() {
    return {
      posts: [],
      rawkzik: ' ',
      rawzik1: ' ',
      rawj16y: ' ',
      rawppb6: ' ',
      rawfn7u: ' ',
      rawrott: ' ',
      rawax9o: ' ',
      raw0nkx: ' ',
      rawv3fr: ' ',
      rawuq3n: ' ',
      raw24xa: ' ',
      raw5s2h: ' ',
      rawtxsd: ' ',
      rawx9st: ' ',
      rawp8ya: ' ',
      raw2kzk: ' ',
      rawfxya: ' ',
      rawsswr: ' ',
      rawljnd: ' ',
      raw36es: ' ',
      raw8g43: ' ',
    }
  },
  metaInfo: {
    title: 'Dashboard - Handmade Sane Eland',
    meta: [
      {
        property: 'og:title',
        content: 'Dashboard - Handmade Sane Eland',
      },
    ],
  },
  async created() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    count() {
      return this.posts.length;
    },
    userList() {
      const userMap = this.posts.reduce((map, obj) => {
        if (!map[obj.userId]) {
          map[obj.userId] = { userId: obj.userId, name: `User ${obj.userId}` }
        }
        return map
      }, {})
      //console.log(Object.values(userMap))
      return Object.values(userMap)
    },
    numberUsers: function() {
      return this.userList.length
    },
    userListWithPost() {
      const userMap = this.posts.reduce((map, obj) => {
        if (!map[obj.userId]) {
          map[obj.userId] = { 
            userId: obj.userId, 
            name: `User ${obj.userId}`, 
            postCount: 0 
          };
        }
        map[obj.userId].postCount++;
        return map;
      }, {})
      return Object.values(userMap);
    },
    averagePostsPerUser: function() {
      const totalPosts = this.count
      const totalUsers = this.numberUsers
      return totalUsers > 0 ? totalPosts / totalUsers : 0
    },
  },
  methods: {
    randomNumber: function(value) {
      const numUsers = value // Call the method to get the number of users
      const randomNum = Math.floor(Math.random() * (23 - 4 + 1)) + 4; // Generate random number
      return randomNum * numUsers; // Multiply the random number by the number of users
    },
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login')
        })
    }    
  }
}
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.dashboard-header-authenticated {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.dashboard-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.dashboard-links {
  flex: 1;
  display: flex;
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: row;
  justify-content: center;
}
.dashboard-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.dashboard-login {
  margin-right: 32px;
  text-decoration: none;
}
.dashboard-login1 {
  margin-right: 32px;
  text-decoration: none;
}
.dashboard-login2 {
  margin-right: 32px;
  text-decoration: none;
}
.dashboard-login3 {
  margin-right: 32px;
  text-decoration: none;
}
.dashboard-login4 {
  margin-right: 32px;
}
.dashboard-burger-menu {
  display: none;
}
.dashboard-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.dashboard-mobile-menu1 {
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
.dashboard-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dashboard-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.dashboard-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.dashboard-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.dashboard-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.dashboard-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.dashboard-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.dashboard-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.dashboard-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.dashboard-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.dashboard-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.dashboard-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.dashboard-hero-heading {
  max-width: 800px;
  text-align: center;
}
.dashboard-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.dashboard-stats {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  justify-content: center;
}
.dashboard-stat {
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.dashboard-icon10 {
  fill: var(--dl-color-gray-700);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.dashboard-text14 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text15 {
  color: var(--dl-color-gray-700);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text16 {
  font-size: 3rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 300;
}
.dashboard-stat1 {
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.dashboard-icon13 {
  fill: var(--dl-color-gray-700);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.dashboard-text18 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text19 {
  color: var(--dl-color-gray-700);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text20 {
  font-size: 3rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 300;
}
.dashboard-stat2 {
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.dashboard-icon15 {
  fill: var(--dl-color-gray-700);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.dashboard-text22 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text23 {
  color: var(--dl-color-gray-700);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text24 {
  font-size: 3rem;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 300;
}
.dashboard-stats1 {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.dashboard-stat3 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dashboard-text26 {
  color: #FF7C4C;
  font-size: 3rem;
}
.dashboard-text29 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text30 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-stat4 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dashboard-text31 {
  color: #FF7C4C;
  font-size: 3rem;
}
.dashboard-text33 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text34 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-stat5 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dashboard-text35 {
  color: #FF7C4C;
  font-size: 3rem;
}
.dashboard-text38 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text39 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-stat6 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dashboard-text40 {
  color: #FF7C4C;
  font-size: 3rem;
}
.dashboard-text42 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-text43 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.dashboard-container2 {
  flex: 1;
  height: 100px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;
}
.dashboard-hero-button1 {
  align-self: flex-end;
  margin-top: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.dashboard-hero-button11 {
  align-self: flex-end;
  margin-top: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.dashboard-hero-button12 {
  margin-top: var(--dl-space-space-twounits);
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.dashboard-gallery {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-features {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-features1 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fourunits);
  justify-content: flex-start;
}
.dashboard-container3 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.dashboard-features-heading {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.dashboard-features-sub-heading {
  font-size: 18px;
  text-align: center;
}
.dashboard-container4 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-oneandhalfunits);
  grid-template-columns: 1fr 1fr;
}
.dashboard-banner {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-banner-heading {
  text-align: center;
}
.dashboard-banner-sub-heading {
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.dashboard-faq {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-faq-container {
  border: 2px dashed rgba(120, 120, 120, 0.4);
}
.dashboard-separator {
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
.dashboard-container5 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.dashboard-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.dashboard-icon17 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.dashboard-icon19 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.dashboard-icon21 {
  width: 24px;
  height: 24px;
}
@media(max-width: 991px) {
  .dashboard-hero1 {
    flex-direction: column;
  }
  .dashboard-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .dashboard-hero-heading {
    text-align: center;
  }
  .dashboard-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .dashboard-text26 {
    text-align: center;
  }
  .dashboard-text31 {
    text-align: center;
  }
  .dashboard-text35 {
    text-align: center;
  }
  .dashboard-text40 {
    text-align: center;
  }
  .dashboard-features-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .dashboard-banner-sub-heading {
    max-width: 100%;
  }
}
@media(max-width: 767px) {
  .dashboard-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .dashboard-desktop-menu {
    display: none;
  }
  .dashboard-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dashboard-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .dashboard-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .dashboard-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .dashboard-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .dashboard-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .dashboard-stats {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .dashboard-stat {
    padding: var(--dl-space-space-unit);
  }
  .dashboard-text14 {
    text-align: center;
  }
  .dashboard-stat1 {
    padding: var(--dl-space-space-unit);
  }
  .dashboard-text18 {
    text-align: center;
  }
  .dashboard-stat2 {
    padding: var(--dl-space-space-unit);
  }
  .dashboard-text22 {
    text-align: center;
  }
  .dashboard-stats1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr;
  }
  .dashboard-text29 {
    text-align: center;
  }
  .dashboard-text33 {
    text-align: center;
  }
  .dashboard-text38 {
    text-align: center;
  }
  .dashboard-text42 {
    text-align: center;
  }
  .dashboard-features1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .dashboard-features-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .dashboard-container4 {
    grid-template-columns: 1fr;
  }
  .dashboard-banner1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .dashboard-banner-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .dashboard-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .dashboard-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .dashboard-container5 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .dashboard-text75 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .dashboard-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .dashboard-mobile-menu1 {
    padding: 16px;
  }
  .dashboard-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .dashboard-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .dashboard-stats {
    align-items: center;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .dashboard-stats1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
    grid-template-columns: 1fr;
  }
  .dashboard-features1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .dashboard-banner1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .dashboard-footer {
    padding: var(--dl-space-space-unit);
  }
  .dashboard-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .dashboard-container5 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .dashboard-text75 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
