<template>
  <div v-if="user">
    <div class="container-page">
      <div class="container-row">
        <div v-for="course in courses" :key="course.id" class="content-box">
          <h3>{{ course.title }}</h3>
          <p>Progres: {{ course.progress }}%</p>
          <button @click="goToPage(course.route)">Navighează</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Please log in to view this page.</p>
  </div>
</template>

<script>
import { computed} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
export default {
    setup(){
       const user = computed(() => store.state.user);
       const store = useStore();
        const router=useRouter();
        const courses = computed(() => store.state.courses);
        const classID='clasa9a';
        onMounted(() => {
      store.dispatch('fetchCoursesByClass', classID);
    });
        const goToPage = (route) => {
      router.push(route);
    };
    return{user,courses, goToPage}
    }
}
</script>
<style scoped>

</style>
