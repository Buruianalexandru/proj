<template>
  <div class="quiz-container"> <!-- Add a container for styling or logical grouping -->
    <div v-if="quizzes.length">
      <div v-for="quiz in quizzes" :key="quiz.id" class="quiz-block">
        <h3>{{ quiz.question }}</h3>
        <ul>
          <li v-for="answer in quiz.answers" :key="answer">
            <button
              :class="{ selected: selectedAnswers[quiz.id] === answer }"
              @click="toggleAnswer(quiz.id, answer)"
            >
              {{ answer }}
            </button>
          </li>
        </ul>
      </div>
      <div>
        <button @click="calculateResult">Termina testul</button>
      </div>
    </div>
    <div v-else>
      <p>Nu sunt quiz-uri disponibile.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      showResult: false,
      score: 0,
      selectedAnswers: {} 
    };
  },
  computed: {
    ...mapState(['quizzes'])
  },
  methods: {
    ...mapActions(['fetchQuizzesByLessons', 'submitQuizAnswer','updateLessonProgress','updateCourseProgress','checkAndUpdateUserLevel']),
    toggleAnswer(questionId,answer) {
      if (this.selectedAnswers[questionId] === answer) {
        this.$delete(this.selectedAnswers, questionId);
      } else {
        this.selectedAnswers = { ...this.selectedAnswers, [questionId]: answer };
      }
    },
    submitAnswer(questionId, answer) {
      this.submitQuizAnswer({ questionId, answer, lessonID: '6UiAuOPnNi2dOyNhxwgm' }); 
    
      
    },
  calculateResult() {
      let totalScore = 0;


      for (let i = 0; i < this.quizzes.length; i++) {
        const quiz = this.quizzes[i];
        if (quiz.correctAnsw === this.selectedAnswers[quiz.id]) {
          totalScore += quiz.score;
        }
      }
      const lessonID = '6UiAuOPnNi2dOyNhxwgm';
            const courseID='5TWk9qk7svyXyB9uf5wE';
      const newProgress=totalScore/2;
      const courseprogress=newProgress/3;
       this.updateLessonProgress({ lessonID, progress: newProgress });
       this.updateCourseProgress({ courseID, progress: courseprogress });
       this.checkAndUpdateUserLevel();
      this.score =totalScore;
      this.$router.push({ name: 'qrep',query:{ score: this.score, lessonID:'exqp1' , courseID:'progresii',name:'qp1'} });
    },
        retryQuiz() {
      this.showResult = false;
      this.score = 0;
      this.selectedAnswers = {};
    }
  },
  created() {
    this.fetchQuizzesByLessons('exqp1'); 
  }
}
</script>

<style scoped>


</style>


