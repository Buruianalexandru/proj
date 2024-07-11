<template>
  <div v-if="user">
    <div class="subject-container">
      <div v-for="exercise in exercises" :key="exercise.id">
        <h3>{{ exercise.question }}</h3>
        <input type="text" v-model="answers[exercise.id]" placeholder="Enter your answer">
      </div>
      <button @click="submitExamAnswers">Submit Exam</button>
      <div v-if="score !== null">
        <h2>Your score is: {{ score }}</h2>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>login</h1>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const exercises = computed(() => store.state.exercises);
    const answers = ref({});
    const score = ref(null); // Local state for the score
    const examID = 'v1';
    const examDocID = 'KEgPN5Dpf2l0tATaNqJq'; // Document ID for the exam

    onMounted(async () => {
      await store.dispatch('fetchExercisesByExam', examID);
      exercises.value.forEach(exercise => {
        answers.value[exercise.id] = ''; // Initialize each answer entry
      });
    });

    const submitExamAnswers = async () => {
      const finalScore = await store.dispatch('submitExam', { examID, answers: answers.value });
      await store.dispatch('updateExamScore', { examID: examDocID, score: finalScore });
      score.value = finalScore; // Update the local state with the score
    };

    return { user, exercises, answers, score, submitExamAnswers };
  }
}
</script>

<style>
.subject-container {
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 10px;
}
input[type="text"] {
  display: block;
  margin-top: 5px;
}
</style>
