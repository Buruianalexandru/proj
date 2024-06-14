<template>
    <div v-if="user">
    <div class="continut">
         <h1>Mulțimi Finite Ordonate</h1>
    
    <h2>Definiție</h2>
    <p>O mulțime finită ordonată este o colecție de elemente distincte în care elementele sunt aranjate într-o anumită ordine. Ordinea poate fi definită printr-o relație de ordine specifică, cum ar fi mai mic (<) sau mai mare (>).</p>
    
    <h2>Exemple de Mulțimi Finite Ordonate</h2>
    <div class="example">
        <p><strong>Exemplu 1:</strong></p>
        <p>Mulțimea <span class="highlight">{1, 2, 3, 4, 5}</span> este o mulțime finită ordonată în ordine crescătoare.</p>
    </div>
    <div class="example">
        <p><strong>Exemplu 2:</strong></p>
        <p>Mulțimea <span class="highlight">{a, b, c, d}</span> este o mulțime finită ordonată în ordine alfabetică.</p>
    </div>
    
    <h2>Relații de Ordine</h2>
    <p>Relația de ordine este o relație binară care aranjează elementele unei mulțimi într-o anumită secvență. Cele mai comune relații de ordine sunt:</p>
    <ul>
        <li><strong>Ordine crescătoare:</strong> Fiecare element este mai mic sau egal cu următorul. Ex: <span class="highlight">1 < 2 < 3</span></li>
        <li><strong>Ordine descrescătoare:</strong> Fiecare element este mai mare sau egal cu următorul. Ex: <span class="highlight">3 > 2 > 1</span></li>
        <li><strong>Ordine lexicografică:</strong> Similară ordinii alfabetice, utilizată pentru a aranja cuvinte sau secvențe de caractere.</li>
    </ul>
    
    <h2>Proprietăți ale Mulțimilor Finite Ordonate</h2>
    <ul>
        <li><strong>Reflexivitate:</strong> Fiecare element este în relație cu el însuși. Ex: <span class="highlight">a ≤ a</span></li>
        <li><strong>Antisimetrie:</strong> Dacă <span class="highlight">a ≤ b</span> și <span class="highlight">b ≤ a</span>, atunci <span class="highlight">a = b</span></li>
        <li><strong>Transitivitate:</strong> Dacă <span class="highlight">a ≤ b</span> și <span class="highlight">b ≤ c</span>, atunci <span class="highlight">a ≤ c</span></li>
    </ul>
    
    <h2>Reprezentarea Grafică a Mulțimilor Ordonate</h2>
    <p>Mulțimile finite ordonate pot fi reprezentate grafic prin diagrame Hasse. Aceste diagrame sunt grafice simplificate care prezintă elementele și relațiile de ordine dintre ele.</p>
    
    <h3>Exemplu de Diagramă Hasse</h3>
    <div class="example">
        <p>Considerăm mulțimea {1, 2, 3} cu relația de ordine crescătoare:</p>
        <p>
            <pre>
              3
              |
              2
              |
              1
            </pre>
        </p>
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