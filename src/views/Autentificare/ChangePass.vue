<template>
  <div class="change-password-container">
    <div class="change-password-content">
    <form @submit.prevent="handlePasswordChange" class="change-password-form">
        <h1>Change Password</h1>
        
        <label for="current-password">Current Password:</label>
        <input type="password" v-model="currentPassword" required />

        <label for="new-password">New Password:</label>
        <input type="password" v-model="newPassword" required />

        <button class="change-password-button">Change Password</button>
        <div v-if="passwordChangeError" class="error-message">{{ passwordChangeError }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';

export default {
  setup() {
    const store = useStore();
    const currentPassword = ref('');
    const newPassword = ref('');
    const passwordChangeError = ref(null);

    const handlePasswordChange = async () => {
      passwordChangeError.value = null;
      try {
        const auth = getAuth();
        const userAuth = auth.currentUser; // Folosește currentUser pentru a obține instanța utilizatorului autentificat
        const credential = EmailAuthProvider.credential(userAuth.email, currentPassword.value);

        await reauthenticateWithCredential(userAuth, credential);
        await updatePassword(userAuth, newPassword.value);
        alert('Password changed successfully');
        currentPassword.value = '';
        newPassword.value = '';
      } catch (error) {
        passwordChangeError.value = error.message;
      }
    };

    return { currentPassword, newPassword, handlePasswordChange, passwordChangeError };
  }
}
</script>


