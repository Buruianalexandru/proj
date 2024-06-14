<template>
  <div v-if="user">
    <div class="container-page">
      <div class="container-row">
        <div v-for="lesson in lessons" :key="lesson.id" class="content-box">
          <h3>{{ lesson.title }}</h3>
          <p>Progres: {{ lesson.progress }}%</p>
          <button @click="goToPage(lesson.route)">Navighează</button>
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
        const lessons = computed(() => store.state.lessons);
        const courseID='fse';
        onMounted(() => {
      store.dispatch('fetchLessonsByCourses', courseID);
    });
        const goToPage = (route) => {
      router.push(route);
    };
    return{user,lessons, goToPage}
    }
}
</script>
<style scoped>

</style>
