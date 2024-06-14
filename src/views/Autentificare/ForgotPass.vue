<template>
  <div class="forgot-password-container">
    <div class="forgot-password-content">
      <h1>Resetare Parolă</h1>
      <p>Introduceți adresa de email pentru a primi codul de resetare a parolei.</p>
      <form @submit.prevent="sendResetCode">
        <input type="email" v-model="email" placeholder="Email" required>
        <button class="submit-button">Trimite Codul</button>
      </form>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  setup() {
    const email = ref('');
    const message = ref('');
    const store = useStore();
   
  const sendResetCode = async () => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      message.value = 'Verificați emailul pentru codul de resetare.';
      
    })
    .catch((error) => {
      message.value = error.message;
    });
};
    return { email, sendResetCode, message };
  }
}
</script>
