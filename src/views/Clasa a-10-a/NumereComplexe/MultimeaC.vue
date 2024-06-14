<template>
    <div v-if="user">
    <div class="continut">
          <h1>Mulțimea Numerelor Complexe (\(\mathbb{C}\))</h1>
    
    <h2>Definiție</h2>
    <p>Mulțimea numerelor complexe, notată cu \(\mathbb{C}\), este formată din toate numerele de forma <span class="highlight">z = a + bi</span>, unde <span class="highlight">a</span> și <span class="highlight">b</span> sunt numere reale, iar <span class="highlight">i</span> este unitatea imaginară, definită prin proprietatea <span class="highlight">i² = -1</span>.</p>
    
    <h2>Forma algebrică a unui număr complex</h2>
    <p>Un număr complex <span class="highlight">z</span> poate fi scris în forma algebrică:</p>
    <p class="formula">z = a + bi</p>
    <p>unde <span class="highlight">a</span> este partea reală a lui <span class="highlight">z</span>, notată <span class="highlight">\(\Re(z)\)</span>, și <span class="highlight">b</span> este partea imaginară a lui <span class="highlight">z</span>, notată <span class="highlight">\(\Im(z)\)</span>.</p>
    
    <h2>Operații cu numere complexe</h2>
    
    <h3>Adunarea</h3>
    <p>Adunarea a două numere complexe <span class="highlight">z₁ = a₁ + b₁i</span> și <span class="highlight">z₂ = a₂ + b₂i</span> se face componentă cu componentă:</p>
    <p class="formula">z₁ + z₂ = (a₁ + a₂) + (b₁ + b₂)i</p>
    
    <h3>Scăderea</h3>
    <p>Scăderea a două numere complexe <span class="highlight">z₁ = a₁ + b₁i</span> și <span class="highlight">z₂ = a₂ + b₂i</span> se face componentă cu componentă:</p>
    <p class="formula">z₁ - z₂ = (a₁ - a₂) + (b₁ - b₂)i</p>
    
    <h3>Înmulțirea</h3>
    <p>Înmulțirea a două numere complexe <span class="highlight">z₁ = a₁ + b₁i</span> și <span class="highlight">z₂ = a₂ + b₂i</span> se face folosind formula:</p>
    <p class="formula">z₁ * z₂ = (a₁a₂ - b₁b₂) + (a₁b₂ + b₁a₂)i</p>
    
    <h3>Împărțirea</h3>
    <p>Împărțirea a două numere complexe <span class="highlight">z₁ = a₁ + b₁i</span> și <span class="highlight">z₂ = a₂ + b₂i</span> se face folosind formula:</p>
    <p class="formula">z₁ / z₂ = [(a₁a₂ + b₁b₂) + (b₁a₂ - a₁b₂)i] / (a₂² + b₂²)</p>
    
    <h2>Conjugatul unui număr complex</h2>
    <p>Conjugatul unui număr complex <span class="highlight">z = a + bi</span> este notat cu <span class="highlight">\(\overline{z}\)</span> și este definit ca:</p>
    <p class="formula">\(\overline{z} = a - bi\)</p>
    
    <h2>Modulul unui număr complex</h2>
    <p>Modulul unui număr complex <span class="highlight">z = a + bi</span> este notat cu <span class="highlight">|z|</span> și este definit ca:</p>
    <p class="formula">|z| = \(\sqrt{a² + b²}\)</p>
    
    <h2>Exemplu</h2>
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Fie numerele complexe <span class="highlight">z₁ = 3 + 4i</span> și <span class="highlight">z₂ = 1 - 2i</span>.</p>
        <p><strong>Adunarea:</strong> <span class="formula">z₁ + z₂ = (3 + 1) + (4 - 2)i = 4 + 2i</span></p>
        <p><strong>Scăderea:</strong> <span class="formula">z₁ - z₂ = (3 - 1) + (4 + 2)i = 2 + 6i</span></p>
        <p><strong>Înmulțirea:</strong> <span class="formula">z₁ * z₂ = (3 * 1 - 4 * -2) + (3 * -2 + 4 * 1)i = 11 - 2i</span></p>
        <p><strong>Împărțirea:</strong> <span class="formula">z₁ / z₂ = [(3 * 1 + 4 * -2) + (4 * 1 - 3 * -2)i] / (1² + (-2)²) = (-5 + 10i) / 5 = -1 + 2i</span></p>
        <p><strong>Conjugatul lui \(z₁\):</strong> <span class="formula">\(\overline{z₁} = 3 - 4i\)</span></p>
        <p><strong>Modulul lui \(z₁\):</strong> <span class="formula">|z₁| = \(\sqrt{3² + 4²} = \sqrt{9 + 16} = 5\)</span></p>
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