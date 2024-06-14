<template>
  <nav class="navbar">
    <template v-if="authIsReady">
      <router-link to="/" class="nav-logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
      </router-link>

      <div class="nav-center">
        <router-link to="/" class="nav-link">Home</router-link>
        <!-- for logged users-->
        <div v-if="user" class="user-nav">
          <router-link to="/profile" class="nav-link">{{ user.firstname }}</router-link>
          
          <!-- Dropdown menu -->
          <div class="dropdown">
            <button class="dropbtn">Invata</button>
            <div class="dropdown-content">
              <router-link to="/a9" class="dropdown-link">Clasa a 9-a</router-link>
              <router-link to="/a10" class="dropdown-link">Clasa a 10-a</router-link>
              <router-link to="/a11" class="dropdown-link">Clasa a 11-a</router-link>
              <router-link to="/a12" class="dropdown-link">Clasa a 12-a</router-link>
              <router-link to="/bac" class="dropdown-link">Bacalaureat</router-link>
            </div>
          </div>
        </div>
        <!-- for logged out users-->
        <div v-if="!user" class="auth-links">
          <router-link to="/login" class="nav-link">Login</router-link>
          <router-link to="/signup" class="nav-link">Signup</router-link>
        </div>
      </div>
      <div v-if="user">
        <!-- Updated logout button with click event -->
        <button @click="handleClick" class="nav-link logout-button">Logout</button>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router' // Import corect

export default {
  setup() {
    const store = useStore();
    const router = useRouter(); // Aici adaugăm useRouter pentru a accesa $router

    const handleClick = async () => {
      // Clears all cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.trim().split("=")[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      });

      // Dispatch logout action from Vuex store
      await store.dispatch('logout');
      // Redirect to login page
      router.push('/login');
    }

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  }
}
</script>


<style scoped>
</style>
