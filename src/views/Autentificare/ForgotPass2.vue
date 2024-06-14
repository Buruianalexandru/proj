<template>
  <div class="reset-password-container">
    <div class="reset-password-content">
      <form @submit.prevent="resetPassword">
        <input type="password" v-model="newPassword" placeholder="Parolă Nouă" required>
        <input type="password" v-model="confirmPassword" placeholder="Confirmă Parola Nouă" required>
        <button class="submit-button">Resetare Parolă</button>
      </form>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

export default {
  setup() {
    const auth = getAuth();
    const newPassword = ref('');
    const confirmPassword = ref('');
    const message = ref('');

    const resetPassword = async () => {
      if (newPassword.value !== confirmPassword.value) {
        message.value = "Parolele nu se potrivesc.";
        return;
      }

      try {
        // Resetarea parolei cu tokenul din URL (preluat din router)
        await confirmPasswordReset(auth, location.search.split('oobCode=')[1], newPassword.value);
        message.value = 'Parola a fost resetată cu succes.';
      } catch (error) {
        message.value = error.message;
      }
    };

    return { resetPassword, newPassword, confirmPassword, message };
  }
}
</script>
