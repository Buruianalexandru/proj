<template>
  <div class="signup-container">
    <div class="signup-content">
      <img src="@/assets/icon.png" alt="Sign Up Image" class="signup-image" />
      <form @submit.prevent="handleSubmit" class="signup-form">
        <h1>Sign up</h1>
        
        <label for="firstname">First name:</label>
        <input type="text" name="firstname" v-model="firstname" required>
        
        <label for="lastname">Last name:</label>
        <input type="text" name="lastname" v-model="lastname" required>
        
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" required>
        
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" required>
        
        <button class="signup-button">Sign up</button>
        <div v-if="error" class="error-message">{{ error }}</div>
        <router-link to="/login" class="signup-link">Aveți cont? Autentificați-vă</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const firstname= ref('')
    const lastname= ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          firstname:firstname.value,
          lastname:lastname.value,
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { handleSubmit,firstname,lastname, email, password, error }
  }
}
</script>