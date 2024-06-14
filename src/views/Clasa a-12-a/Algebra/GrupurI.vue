<template>
    <div v-if="user">
    <div class="continut">
          <h1>Grupuri</h1>
    
    <h2>Definiție</h2>
    <p>Un grup este o structură algebrică formată dintr-o mulțime nevidă G și o operație binară * definită pe G, care satisface următoarele patru axiome:</p>
    <ul>
        <li><strong>Închiderea:</strong> Pentru toate a, b din G, a * b este tot în G.</li>
        <li><strong>Asociativitatea:</strong> Pentru toate a, b, c din G, (a * b) * c = a * (b * c).</li>
        <li><strong>Elementul neutru:</strong> Există un element e în G astfel încât pentru orice element a din G, e * a = a * e = a.</li>
        <li><strong>Elementul invers:</strong> Pentru fiecare element a din G, există un element b în G astfel încât a * b = b * a = e, unde e este elementul neutru.</li>
    </ul>
    
    <h2>Exemple de Grupuri</h2>
    <p>1. Mulțimea numerelor întregi Z cu operația de adunare (+).</p>
    <p>2. Mulțimea numerelor reale nenule R\{0} cu operația de înmulțire (*).</p>
    <p>3. Mulțimea permutărilor unei mulțimi finite cu operația de compunere a funcțiilor.</p>
    
    <h2>Tipuri de Grupuri</h2>
    <ul>
        <li><strong>Grup abelian (comutativ):</strong> Un grup în care operația este comutativă, adică a * b = b * a pentru toate a, b din G.</li>
        <li><strong>Grup finit:</strong> Un grup care are un număr finit de elemente.</li>
        <li><strong>Grup infinit:</strong> Un grup care are un număr infinit de elemente.</li>
    </ul>
    
    <h2>Proprietăți ale Grupurilor</h2>
    <ul>
        <li>Într-un grup, elementul neutru este unic.</li>
        <li>Într-un grup, elementul invers al fiecărui element este unic.</li>
    </ul>
    
    <h2>Subgrupuri</h2>
    <p>O submulțime H a unui grup G se numește subgrup al lui G dacă H însăși este un grup cu operația definită pe G. Pentru a fi subgrup, H trebuie să satisfacă următoarele condiții:</p>
    <ul>
        <li>H este nevidă.</li>
        <li>H este închisă sub operația grupului.</li>
        <li>Pentru fiecare element a din H, inversul lui a în G este și în H.</li>
    </ul>
    
    <h2>Exemplu de Grup</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Fie mulțimea G = {1, -1, i, -i} cu operația de înmulțire a numerelor complexe. Să arătăm că G este un grup.</p>
        <p><strong>Închidere:</strong> Produsul oricăror două elemente din G este tot un element din G.</p>
        <p><strong>Asociativitate:</strong> Operația de înmulțire a numerelor complexe este asociativă.</p>
        <p><strong>Element neutru:</strong> Elementul 1 este elementul neutru, deoarece 1 * a = a * 1 = a pentru orice a din G.</p>
        <p><strong>Element invers:</strong> Fiecare element din G are un invers în G: inversul lui 1 este 1, inversul lui -1 este -1, inversul lui i este -i, și inversul lui -i este i.</p>
        <p>Deci, G este un grup.</p>
    </div>
    </div>
    </div>
    <div v-else>
      <p>Please log in to view this page.</p>
    </div>
</template>
<script>
import {computed} from 'vue';
import { useStore } from 'vuex';
export default({
  setup() {
     const user = computed(() => store.state.user);
     const store = useStore();
         return{user}
  },
})
</script>