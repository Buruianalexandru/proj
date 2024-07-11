<template>
  <nav class="navbar">
    <template v-if="authIsReady">
      <router-link to="/" class="nav-logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
      </router-link> 
       <!-- <div class="search-container">
      <input v-model="searchText" @input="searchTitles" type="search" placeholder="Search...">
      <div v-if="searchResults.length" class="search-results">
        <div v-for="result in searchResults" :key="result.id" class="search-item">
          <router-link :to="result.route">{{ result.title }}</router-link>
        </div>
      </div>
    </div> -->
      <div class="nav-right">
        <div v-if="user" class="user-nav">
           <button class="user-button" @click="goToPage('/profile')">{{ user.firstname }}</button>
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
          <button @click="handleClick" class="nav-link logout-button">Logout</button>
        </div>
        <div v-if="!user" class="auth-links">
          <router-link to="/login" class="nav-link">Login</router-link>
          <router-link to="/signup" class="nav-link">Signup</router-link>
        </div>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed,ref } from 'vue'
import { useRouter } from 'vue-router' 
export default {
  setup() {
    const store = useStore();
    const router = useRouter(); 
    const user=computed(() => store.state.user);
    const  authIsReady=computed(() => store.state.authIsReady);
    const handleClick = async () => {
 
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.trim().split("=")[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      });

      
      await store.dispatch('logout');
 
      router.push('/login');
    }
     const searchText = ref('');
    const searchResults = computed(() => store.getters.searchResults);

    const searchTitles = () => {
       console.log('Searching for:', searchText.value);
      store.dispatch('searchTitles', searchText.value);
    };
      const goToPage = (route) => {
      router.push(route);
    };
    return {
      handleClick,
      user,
      authIsReady,
      searchText,
      searchTitles,
      searchResults,
      goToPage
    }
  }
}
</script>


<style scoped>
</style>
