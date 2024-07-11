<template>
  <div class="container-page">
    <div class="container-row">
      <div class="content-box">
    <h1>Quiz Report</h1>
    <h3>Your Score: {{ score }}%</h3>
    <button @click="retryQuiz" class="btn-test">Retry Quiz</button>
    <button @click="goToCourses" class="btn-test">Go to Courses</button> 
      </div>
    </div>
    
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const score = route.query.score;


    
    const retryQuiz = () => {
      router.push({ name: route.query.name, params: { lessonID: route.query.lessonID} }); // Adjust the route name and params as needed
    };

    const goToCourses = () => {
      router.push({ name: route.query.courseID, params: { courseID:route.query.courseID } }); // Adjust the route name and params as needed
    };

    return {
      score,
      retryQuiz,
      goToCourses
    };
  }
};
</script>
