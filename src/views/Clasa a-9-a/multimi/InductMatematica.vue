<template>
    <div v-if="user">
    <div class="continut">
    <h1>Inducția Matematică</h1>
    
    <h2>Definiție</h2>
    <p>Inducția matematică este o metodă de demonstrare a unei proprietăți pentru toate numerele naturale. Metoda presupune două etape esențiale: baza inducției și pasul inductiv.</p>
    
    <h2>Pașii Inducției Matematice</h2>
    <h3>Baza Inducției</h3>
    <p>Se verifică faptul că proprietatea este adevărată pentru primul număr natural, de obicei n = 1.</p>
    
    <h3>Pasul Inductiv</h3>
    <p>Se presupune că proprietatea este adevărată pentru un număr natural k și se demonstrează că este adevărată și pentru k + 1.</p>
    
    <h2>Formularea Inducției Matematice</h2>
    <p>Pentru a demonstra că o propoziție P(n) este adevărată pentru toate numerele naturale n ≥ n0, se procedează astfel:</p>
    <ol>
        <li><strong>Baza:</strong> Se demonstrează că P(n0) este adevărată.</li>
        <li><strong>Pasul inductiv:</strong> Se presupune că P(k) este adevărată pentru un k ≥ n0 și se demonstrează că P(k + 1) este adevărată.</li>
    </ol>
    
    <h2>Exemplu</h2>
    <div class="example">
        <p><strong>Exemplu:</strong> Demonstrați că suma primelor n numere naturale este n(n + 1) / 2.</p>
        <p><strong>Baza:</strong> Pentru n = 1, avem 1 = 1(1 + 1) / 2, ceea ce este adevărat.</p>
        <p><strong>Pasul inductiv:</strong> Presupunem că formula este adevărată pentru n = k, adică 1 + 2 + ... + k = k(k + 1) / 2.</p>
        <p>Trebuie să demonstrăm că formula este adevărată pentru n = k + 1:</p>
        <p>1 + 2 + ... + k + (k + 1) = k(k + 1) / 2 + (k + 1)</p>
        <p>= (k(k + 1) + 2(k + 1)) / 2</p>
        <p>= (k + 1)(k + 2) / 2</p>
        <p>Astfel, formula este adevărată pentru n = k + 1.</p>
    </div>
    </div>
    </div>
    <div v-else>
      <p>Please log in to view this page.</p>
      </div>
</template>
<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
export default ({
    setup() {
         const user = computed(() => store.state.user);
         const store = useStore();
         return{user}
    }
})
</script>
