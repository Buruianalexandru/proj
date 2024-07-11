import { createStore } from 'vuex';
import { auth, db } from '../services/firebase';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged,getAuth
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection,query,where, getDocs} from 'firebase/firestore';
import profilePic from '../assets/user_149071.png';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    quizzes:[],
    lessons:[],
    courses:[],
    exams:[],
    exercises:[],
    score:null,
    searchResults:[]
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('User state changed:', state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    clearOtherUserData(state) {
      console.log('Other user data cleared');
    },
    logoutUser(state) {
      state.user = null;
    },
    setCourses(state, courses)
    {
      state.courses=courses;
    },
    setLessons(state,lessons)
    {
      state.lessons=lessons;
    },
    setExams(state,exams){
      state.exams=exams;
    }, 
    setQuizzes(state,quizzes)
    {
      state.quizzes=quizzes;
    },
    setExercises(state,  exercises ) {
    
    state.exercises=exercises;  
    },
    setScore(state, score) {
      state.score = score;
    },
    updateLessonProgress(state, { lessonId, isCorrect }) {
  
      let lesson = state.lessons.find(l => l.id === lessonId);
      if (lesson) {
        lesson.score = isCorrect ? lesson.score + 20 : lesson.score; 
     
      }
    },
    updateCourseProgress(state, { courseID, progress }) {
      let course = state.courses.find(c => c.id === courseID);
      if (course) {
        course.progress = progress;
      }
    },
    updateExamScore(state, { examID, score }) {
      const exam = state.exams.find(ex => ex.id === examID);
      if (exam) {
        exam.score = score;
      }
    },
    updateUserLevel(state, level) {
      if (state.user) {
        state.user.level = level;
      }
    },
    setExamScore(state, { examID, score }) {
      const exam = state.exams.find(exam => exam.id === examID);
      if (exam) {
        exam.score = score;
      }
    },
    setSearchResults(state, results) {
      state.searchResults = results;
    },
 
  },
  actions: {
    async signup(context, { firstname, lastname, email, password, level }) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, 'users', res.user.uid);
        await setDoc(userRef, {
          firstname, lastname, level: 0,
          profilePic 
        });
        context.commit('setUser', { ...res.user, firstname, lastname, email, level: 0, profilePic });
      } catch (error) {
        console.error('Signup failed:', error);
        throw error;
      }
    },

    async login(context, { email, password }) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, 'users', res.user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          context.commit('setUser', { ...res.user, ...userData });
        }
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    async logout(context) {
      try {
        await signOut(auth);
        context.commit('setUser', null);
        context.commit('clearOtherUserData');
      } catch (error) {
        console.error('Logout failed:', error);
        throw error;
      }
    },
    async updateUserProfilePic({ commit }, imageUrl) {
      const userAuth = getAuth().currentUser;
      const userRef = doc(db, 'users', userAuth.uid);
      await setDoc(userRef, { profilePic: imageUrl }, { merge: true });
      commit('setUser', { ...userAuth, profilePic: imageUrl });
    },
    async fetchCoursesByClass({ commit }, classID) {
      const coursesCollection = collection(db, "courses");
      const q = query(coursesCollection, where("classID", "==", classID));
      const querySnapshot = await getDocs(q);
      let courses = [];
      querySnapshot.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
      });
      commit('setCourses', courses); 
    },
    async fetchLessonsByCourses({ commit }, courseID) {
      const coursesCollection = collection(db, "lessons");
      const q = query(coursesCollection, where("courseID", "==", courseID));
      const querySnapshot = await getDocs(q);
      let lessons = [];
      querySnapshot.forEach((doc) => {
        lessons.push({ id: doc.id, ...doc.data() });
      });
      commit('setLessons', lessons); 
    },
    async fetchExamsByBac({ commit }, bacID) {
      const coursesCollection = collection(db, "exams");
      const q = query(coursesCollection, where("bacID", "==", bacID));
      const querySnapshot = await getDocs(q);
      let exams = [];
      querySnapshot.forEach((doc) => {
        exams.push({ id: doc.id, ...doc.data() });
      });
      commit('setExams', exams);
    },
    async fetchExercisesByExam({ commit }, examID) {
      const coursesCollection = collection(db, "exercises");
      const q = query(coursesCollection, where("examID", "==", examID));
      const querySnapshot = await getDocs(q);
      let exercises = [];
      querySnapshot.forEach((doc) => {
        exercises.push({ id: doc.id, ...doc.data() });
      });
      commit('setExercises', exercises);
    },
    async submitExam({ state, commit, dispatch }, { examID, answers }) {
      let totalScore = 10; 
      try {
        const exercises = state.exercises.filter((ex) => ex.examID === examID);
        for (const exercise of exercises) {
          if (answers[exercise.id] === exercise.correctAnsw) {
            totalScore += exercise.points; 
          }
        }
        console.log('Final score:', totalScore);

        await dispatch('updateExamScore', { examID, score: totalScore });

        commit('setScore', totalScore); 
        commit('updateExamScore', { examID, score: totalScore });

        return totalScore;
      } catch (error) {
        console.error('Error submitting exam:', error);
        throw error;
      }
    },
    async updateExamScore({ commit }, { examID, score }) {
      try {
        const examRef = doc(db, 'exams', examID);
        await setDoc(examRef, { score }, { merge: true });
        commit('setExamScore', { examID, score });
        console.log(`Exam ${examID} score updated to ${score}`);
      } catch (error) {
        console.error('Error updating exam score:', error);
        throw error;
      }
    },
    async fetchQuizzesByLessons({ commit }, lessonID) {
      try{
        const coursesCollection = collection(db, "quizzes");
      const q = query(coursesCollection, where("lessonID", "==", lessonID));
      const querySnapshot = await getDocs(q);
      let quizzes = [];
      querySnapshot.forEach((doc) => {
        quizzes.push({ id: doc.id, ...doc.data() });
      });
      commit('setQuizzes', quizzes);
    }
      catch (error) {
        console.error("Error fetching quizzes: ", error);
      }
  },
    async submitQuizAnswer({ commit, state }, { questionId, answer, lessonID }) {
      const quiz = state.quizzes.find(q => q.id === questionId);
      if (!quiz) {
        console.error(`Quiz with ID ${questionId} not found`);
        return;
      }
      const isCorrect = quiz.correctAnsw === answer;
      let lesson = state.lessons.find(l => l.id === lessonID);
      if (lesson) {
        let progress = lesson.progress || 0;
        progress = isCorrect ? progress + quiz.score : progress;
        if (progress > 100) progress = 100;
        commit('updateLessonProgress', { lessonID: lessonID, isCorrect });
        const lessonRef = doc(db, 'lessons', lessonID);
        await setDoc(lessonRef, { progress }, { merge: true });
      }
    },

    async updateLessonProgress({ commit, state }, { lessonID, progress }) {
      const lessonRef = doc(db, 'lessons', lessonID);

      const lessonSnap = await getDoc(lessonRef);
      if (lessonSnap.exists()) {
        const currentProgress = lessonSnap.data().progress || 0;
        const newProgress = Math.min(currentProgress + progress, 100); 

        await setDoc(lessonRef, { progress: newProgress }, { merge: true });

        commit('updateLessonProgress', { lessonID, progress: newProgress });
      } else {
        console.error('Lesson does not exist');
      }
    },

    async updateCourseProgress({ commit, state }, { courseID, progress }) {
      const courseRef = doc(db, 'courses', courseID);

      const courseSnap = await getDoc(courseRef);
      if (courseSnap.exists()) {
        const currentProgress = courseSnap.data().progress || 0;
        const newProgress = Math.min(currentProgress + progress, 100);

        await setDoc(courseRef, { progress: newProgress }, { merge: true });

        commit('updateCourseProgress', { courseID, progress: newProgress });
        this.dispatch('checkAndUpdateUserLevel');
      } else {
        console.error('Lesson does not exist');
      }
    },
    async checkAndUpdateUserLevel({ commit, state }) {
      let totalProgress = 0;

      state.courses.forEach(course => {
        totalProgress += course.progress || 0;
      });

      let newLevel = Math.floor(totalProgress / 70);

      if (state.user && newLevel > state.user.level) {
        commit('updateUserLevel', newLevel);
        const userRef = doc(db, 'users', state.user.uid);
        await setDoc(userRef, { level: newLevel }, { merge: true });
      }
    },
    async searchTitles({ commit }, searchText) {
      console.log('Search text received:', searchText);  
      if (!searchText.trim()) {
        commit('setSearchResults', []);
        return;
      }

      try {
        const collections = ['exams', 'courses', 'lessons'];
        const queries = collections.map(col => query(collection(db, col), where('title', '>=', searchText), where('title', '<=', searchText + '\uf8ff')));

        const results = await Promise.all(queries.map(q => getDocs(q)));

        console.log('Firestore results:', results);  
        const searchResults = [];

        results.forEach((querySnapshot, index) => {
          console.log(`QuerySnapshot for ${collections[index]}:`, querySnapshot);
          querySnapshot.forEach(doc => {
            console.log('Document data:', doc.data());
            searchResults.push({
              id: doc.id,
              title: doc.data().title,
              route: doc.data().route
            });
          });
        });

        console.log('Processed search results:', searchResults);
        commit('setSearchResults', searchResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    },
  },
  getters: {
    searchResults: state => state.searchResults
  }
});

let unsubscribed = false;
const unsub = onAuthStateChanged(auth, async (user) => {
  if (!unsubscribed) {
    store.commit('setAuthIsReady', true);
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.exists() ? userSnap.data() : null;
      store.commit('setUser', { ...user, ...userData });
    } else {
      store.commit('setUser', null);
    }
    unsub();
    unsubscribed = true;
  }
});

export default store;
