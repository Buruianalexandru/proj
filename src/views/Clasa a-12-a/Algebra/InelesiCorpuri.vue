<template>
    <div v-if="user">
    <div class="continut">
       <h1>Inele și Corpuri</h1>
    
    <h2>Inele</h2>
    
    <h3>Definiție</h3>
    <p>Un inel este o structură algebrică formată dintr-o mulțime nevidă R și două operații binare, notate de obicei cu + (adunare) și * (înmulțire), care satisfac următoarele proprietăți:</p>
    <ul>
        <li><strong>Închidere:</strong> Pentru toate a, b din R, a + b și a * b sunt în R.</li>
        <li><strong>Asociativitatea adunării:</strong> Pentru toate a, b, c din R, (a + b) + c = a + (b + c).</li>
        <li><strong>Există un element neutru pentru adunare:</strong> Există un element 0 în R astfel încât pentru orice a din R, a + 0 = 0 + a = a.</li>
        <li><strong>Există elemente opuse pentru adunare:</strong> Pentru fiecare a din R, există un element -a în R astfel încât a + (-a) = (-a) + a = 0.</li>
        <li><strong>Asociativitatea înmulțirii:</strong> Pentru toate a, b, c din R, (a * b) * c = a * (b * c).</li>
        <li><strong>Distributivitatea:</strong> Pentru toate a, b, c din R, a * (b + c) = (a * b) + (a * c) și (a + b) * c = (a * c) + (b * c).</li>
    </ul>
    
    <h3>Exemple de Inele</h3>
    <p>1. Mulțimea numerelor întregi Z cu operațiile de adunare și înmulțire.</p>
    <p>2. Mulțimea numerelor reale R cu operațiile de adunare și înmulțire.</p>
    <p>3. Mulțimea matricilor pătratice de dimensiune n x n cu elemente reale și operațiile de adunare și înmulțire a matricilor.</p>
    
    <h2>Corpul</h2>
    
    <h3>Definiție</h3>
    <p>Un corp este un inel comutativ în care fiecare element nenul are un invers multiplicativ. Mai formal, un corp este o structură algebrică formată dintr-o mulțime nevidă F și două operații binare, notate de obicei cu + (adunare) și * (înmulțire), care satisfac următoarele proprietăți:</p>
    <ul>
        <li>Toate proprietățile unui inel (enumerate mai sus).</li>
        <li><strong>Comutativitatea înmulțirii:</strong> Pentru toate a, b din F, a * b = b * a.</li>
        <li><strong>Există un element neutru pentru înmulțire:</strong> Există un element 1 în F, 1 ≠ 0, astfel încât pentru orice a din F, a * 1 = 1 * a = a.</li>
        <li><strong>Există elemente inverse pentru înmulțire:</strong> Pentru fiecare a ≠ 0 din F, există un element a<sup>-1</sup> în F astfel încât a * a<sup>-1</sup> = a<sup>-1</sup> * a = 1.</li>
    </ul>
    
    <h3>Exemple de Corpuri</h3>
    <p>1. Mulțimea numerelor raționale Q cu operațiile de adunare și înmulțire.</p>
    <p>2. Mulțimea numerelor reale R cu operațiile de adunare și înmulțire.</p>
    <p>3. Mulțimea numerelor complexe C cu operațiile de adunare și înmulțire.</p>
    
    <h2>Proprietăți ale Inelelor și Corpurilor</h2>
    <ul>
        <li>Într-un inel, elementul neutru pentru adunare este unic.</li>
        <li>Într-un inel, elementul neutru pentru înmulțire (dacă există) este unic.</li>
        <li>Într-un corp, fiecare element nenul are un invers multiplicativ unic.</li>
    </ul>
    
    <h2>Subinele și Subcorpurile</h2>
    
    <h3>Subinele</h3>
    <p>O submulțime S a unui inel R se numește subinel al lui R dacă S este un inel cu operațiile restricționate din R. Pentru a fi subinel, S trebuie să satisfacă următoarele condiții:</p>
    <ul>
        <li>S este nevidă.</li>
        <li>S este închisă sub adunare și înmulțire.</li>
        <li>Pentru fiecare element a din S, -a este și în S.</li>
    </ul>
    
    <h3>Subcorpurile</h3>
    <p>O submulțime S a unui corp F se numește subcorp al lui F dacă S este un corp cu operațiile restricționate din F. Pentru a fi subcorp, S trebuie să satisfacă următoarele condiții:</p>
    <ul>
        <li>S este nevidă.</li>
        <li>S este închisă sub adunare și înmulțire.</li>
        <li>Pentru fiecare element a din S, -a și a<sup>-1</sup> (dacă a ≠ 0) sunt și în S.</li>
    </ul>
    
    <h2>Exemplu de Inel și Corp</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Fie mulțimea Z<sub>5</sub> = {0, 1, 2, 3, 4} cu operațiile de adunare și înmulțire modulo 5. Să arătăm că Z<sub>5</sub> este un corp.</p>
        <p><strong>Adunare:</strong> Z<sub>5</sub> este închisă sub adunare modulo 5, asociativă, comutativă, cu element neutru 0 și fiecare element are un opus (de exemplu, opusul lui 3 este 2, deoarece 3 + 2 = 5 ≡ 0 mod 5).</p>
        <p><strong>Înmulțire:</strong> Z<sub>5</sub> este închisă sub înmulțire modulo 5, asociativă, comutativă, cu element neutru 1 și fiecare element nenul are un invers (de exemplu, inversul lui 3 este 2, deoarece 3 * 2 = 6 ≡ 1 mod 5).</p>
        <p>Deci, Z<sub>5</sub> este un corp.</p>
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