<template>
  <div class="home-container">
    <div class="header">
        <img src="../assets/logo.png">
      <h1>Bine ați venit la Portalul de Matematică!</h1>
      <p>Explorați lumea fascinantă a matematicii și dezvoltați-vă abilitățile.</p>
      <button v-if="!user" @click="login">{{ loginMessage }}</button>
    </div>
     <div v-if="user" class="widget-container">
      <div v-for="(item, index) in items" :key="index" 
           class="content-container" v-show="currentItem === index">
        <img :src="item.image" alt="Descriere Imagine" class="item-image">
        <div class="text-container">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <button @click="goToPage(item.route)">Mai multe</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import image1 from '@/assets/a10a.png';
import image2 from '@/assets/a9a.png';
import image3 from '@/assets/a11a.png';
import image4 from '@/assets/a12a.png';
import image5 from '@/assets/bac.png';
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const loginMessage = ref('Intra in cont');
    const router = useRouter();
    const img=image1;
    const img2=image2;
    const img3=image3;
    const img4=image4;
    const img5=image5;
    const items = ref([
      { title: 'Clasa a 9-a', description: ' clasa a 9-a', route: '/a9', image: img },
      { title: 'Clasa a 10-a', description: 'Detalii despre materiale pentru clasa a 10-a', route: '/a10', image:img2  },
      { title: 'Clasa a 11-a', description: 'Resurse educaționale pentru clasa a 11-a', route: '/a11', image: img3 },
      { title: 'Clasa a 12-a', description: 'Pregătire pentru bacalaureat și clasa a 12-a', route: '/a12', image: img4 },
      { title: 'Bacalaureat', description: 'Tot ce trebuie să știi pentru bac', route: '/bac', image: img5 }
    ]);
    const currentItem = ref(0);

    setInterval(() => {
      currentItem.value = (currentItem.value + 1) % items.value.length;
    }, 1500);

    const login = () => {
      router.push('/login');
    };

    const goToPage = (route) => {
      router.push(route);
    };

    return { user, login, loginMessage, items, currentItem, goToPage };
  }
}
</script>



