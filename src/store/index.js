import { createStore } from 'vuex';
import { auth, db } from '../services/firebase';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged,getAuth
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection,query,where, getDocs} from 'firebase/firestore';
import profilePic from '../assets/user_149071.png'; // Asigură-te că calea este corectă
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const store = createStore({
  state: {
    user: null,
    authIsReady: false
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
      // Completează cu alte curățări necesare
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
    }
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
    }
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
  