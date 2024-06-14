<template>
    <div v-if="user">
    <div class="continut">
          <h1>Sisteme de Ecuații Liniare</h1>
    
    <h2>Definiție</h2>
    <p>Un sistem de ecuații liniare este un set de două sau mai multe ecuații liniare cu două sau mai multe variabile. Soluția unui sistem de ecuații liniare este ansamblul valorilor variabilelor care satisfac simultan toate ecuațiile sistemului.</p>
    
    <h2>Forma Generală</h2>
    <p>Forma generală a unui sistem de ecuații liniare cu două variabile este:</p>
    <p class="formula">
        a<sub>1</sub>x + b<sub>1</sub>y = c<sub>1</sub> <br>
        a<sub>2</sub>x + b<sub>2</sub>y = c<sub>2</sub>
    </p>
    
    <h2>Metode de Rezolvare</h2>
    
    <h3>Metoda Substituției</h3>
    <p>1. Se rezolvă una dintre ecuații pentru una dintre variabile.</p>
    <p>2. Se înlocuiește această expresie în cealaltă ecuație.</p>
    <p>3. Se rezolvă ecuația rezultată pentru cealaltă variabilă.</p>
    <p>4. Se înlocuiește valoarea obținută în expresia găsită la pasul 1 pentru a găsi valoarea celeilalte variabile.</p>
    
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Rezolvați sistemul:</p>
        <p class="formula">
            2x + 3y = 5 <br>
            x - y = 1
        </p>
        <p>Pasul 1: Rezolvăm a doua ecuație pentru x:</p>
        <p class="formula">x = y + 1</p>
        <p>Pasul 2: Înlocuim x în prima ecuație:</p>
        <p class="formula">2(y + 1) + 3y = 5</p>
        <p>Pasul 3: Rezolvăm pentru y:</p>
        <p class="formula">2y + 2 + 3y = 5</p>
        <p>5y + 2 = 5</p>
        <p>5y = 3</p>
        <p>y = 3/5</p>
        <p>Pasul 4: Înlocuim y în expresia x = y + 1:</p>
        <p class="formula">x = 3/5 + 1 = 8/5</p>
        <p>Deci, soluția sistemului este x = 8/5 și y = 3/5.</p>
    </div>
    
    <h3>Metoda Eliminării</h3>
    <p>1. Se aduc cele două ecuații la forme în care o variabilă are același coeficient în ambele ecuații.</p>
    <p>2. Se adună sau se scad ecuațiile pentru a elimina acea variabilă.</p>
    <p>3. Se rezolvă ecuația rezultată pentru variabila rămasă.</p>
    <p>4. Se înlocuiește valoarea obținută în una dintre ecuațiile originale pentru a găsi valoarea celeilalte variabile.</p>
    
    <div class="example">
        <p><strong>Exemplu:</strong></p>
        <p>Rezolvați sistemul:</p>
        <p class="formula">
            2x + 3y = 5 <br>
            4x + 6y = 10
        </p>
        <p>Observăm că a doua ecuație este de două ori prima ecuație, deci ecuațiile sunt echivalente și sistemul are o infinitate de soluții:</p>
        <p>Orice soluție a formei (x, y) = (t, (5 - 2t) / 3), unde t este un număr real.</p>
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