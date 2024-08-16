<template>
  <div>
    <div class="header">
      <div class="logo_div">
        
        <!-- HOME -->
        <router-link to="/">
          <img class="logo" src="./assets/logo_copy.png" alt="logo pic" />
        </router-link>

      </div>
      <div class="topnav">
        <ul>
          <li>
            <router-link to="/signup" class="sign_up">Sign Up</router-link>
            <!-- <router-link to="/baselayout" class="sign_up">Sign Up</router-link> -->
          </li>
          <li>
            <router-link to="/login" class="log_in">Log In</router-link>
          </li>
          <li>
            <a class="nav_item" href="#home">
              <img
              class="search_icon"
              src="./assets/search.png"
              alt="search icon"
              />
            </a>
          </li>
          <li><a class="nav_item" href="#home">Organizations</a></li>
          <li><a class="nav_item" href="#news">Resources</a></li>
          <li><a class="nav_item" href="#contact">Pricing</a></li>
          <li><a class="nav_item" href="#about">LinkedIn</a></li>
          <li><a class="nav_item" href="#about">Cover Letter</a></li>
          <li><a class="nav_item" href="#about">ATS Resume</a></li>
          <li><a class="nav_item" href="#about">Products</a></li>
        </ul>
      </div>
    </div>

    <!-- ROUTER VIEW -->
    <router-view />

  </div>
</template>

<script></script>

<style>
.header {
  height: 90px;
  width: 100vw;
  display: flex;
  background-color: #006edc;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, segoe ui, roboto,
    oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, sans-serif;
}

.logo_div {
  width: 230px;
  height: 90px;
  margin-left: 120px;
}

.logo {
  float: right;
  width: 170px;
  height: 70px;
  margin: 10px;
}

.topnav {
  height: 90px;
  width: 1100px;
  margin: auto;
}

.topnav > ul > li {
  display: flex;
  float: right;
}

.topnav > ul > li > .nav_item {
  text-decoration: none;
  margin-top: 25px;
  margin-left: 15px;
  color: #fff;
  font-size: 16px;
  font-weight: 500px;
  padding: 10px;
}

.topnav > ul > li > .nav_item:hover {
  background-color: #fff;
  color: #006edc;
}

.sign_up,
.log_in {
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 10.5px 0;
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 16px;
  line-height: 21px;
  width: 105px;
  font-weight: 500;
  border-radius: 9px;
  background-color: rgba(21, 21, 196, 0.933);
  color: #fff;
  margin-top: 20px;
  margin-left: 10px;
}

.sign_up {
  background-color: #fff;
  color: #006edc;
}
</style>
