<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <strong>VUE-ROUTER-VUEX</strong>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/users">Users</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <router-view/>
    </b-container> 
  </div>
</template>