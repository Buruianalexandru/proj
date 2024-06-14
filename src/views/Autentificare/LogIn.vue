<template>
  <div class="login-container">
    <div class="login-content">
      <img src="@/assets/icon.png" alt="Login Image" class="login-image" />
      <form @submit.prevent="handleSubmit" class="login-form">
        <h1>Login</h1>

        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" required>

        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" required>

        <button class="login-button">Login</button>
        <div v-if="error" class="error-message">{{ error }}</div>
        <router-link to="/forgotpass" class="signup-link">Ați uitat parola?</router-link>
        <router-link to="/signup" class="signup-link">Nu aveți cont? Creați aici</router-link>

      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { handleSubmit, email, password, error }
  }
}
</script>