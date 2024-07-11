
<template>
  <div v-if="user">
    <div class="container-page">
      <div class="container-row">
        <div v-for="exam in exams" :key="exam.id" class="content-box">
          <h3>{{ exam.title }}</h3>
          <p>Progres: {{ exam.score }}%</p>
          <button @click="goToPage(exam.route)">Navighează</button>
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
        const exams = computed(() => store.state.exams);
        const bacID='m1';
        onMounted(() => {
      store.dispatch('fetchExamsByBac', bacID);
    });
        const goToPage = (route) => {
      router.push(route);
    };
    return{user, exams, goToPage}
    }
}
</script>
<style scoped>

</style>
