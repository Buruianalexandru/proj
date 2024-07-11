<template>
 <div class="profile-container">
    <div v-if="user" @mouseover="showChange = true" @mouseleave="showChange = false" class="profile-image-container">

      <img :src="user?.profilePic || '@/assets/user_149071.png'" alt="Profile Image" class="profile-header-image" />
      <div v-if="showChange" class="change-image-overlay">
        <input type="file" @change="uploadNewProfilePic" style="display: none" ref="fileInput">
        <button @click="triggerFileInput" class="triggerFileInput">+</button>
      </div>
    </div>
    <div v-if="user" class="profile-content">
      <h1></h1>
      <h1>{{ user?.firstname }} {{ user?.lastname }}</h1>
      <p>Email: {{ user?.email }}</p>
      <p>Nivel: {{ user?.level }}</p>
      <router-link to="/changepass" class="change-password-button">Change Password</router-link>
    </div>
   <div v-else>
      <p>Please log in to view this page.</p>
    </div> 
  </div>
</template>


<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const showChange = ref(false);
    const fileInput = ref(null);

    const triggerFileInput = () => {
      fileInput.value.click(); 
    };

    const uploadNewProfilePic = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const storage = getStorage();
      const storageReference = storageRef(storage, `profilePics/${user.value.uid}/${file.name}`);
      await uploadBytes(storageReference, file);
      const imageUrl = await getDownloadURL(storageReference);

      window.location.reload();
      await store.dispatch('updateUserProfilePic', imageUrl);
      
    };

    return { user, showChange, triggerFileInput, uploadNewProfilePic, fileInput };
  }
}
</script>

