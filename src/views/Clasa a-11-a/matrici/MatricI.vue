<template>
    <div v-if="user">
    <div class="continut">
          <h1>Matrici</h1>
    
    <h2>Definiție</h2>
    <p>O matrice este un aranjament dreptunghiular de numere, simboluri sau expresii, dispuse în rânduri și coloane. Fiecare element al unei matrici este identificat prin poziția sa în rând și coloană.</p>
    
    <h2>Notație</h2>
    <p>O matrice se notează de obicei cu litere majuscule, de exemplu, A. Elementele unei matrici sunt notate cu litere mici, de exemplu, a<sub>ij</sub>, unde i reprezintă rândul, iar j reprezintă coloana.</p>
    
    <h2>Tipuri de Matrici</h2>
    <ul>
        <li><strong>Matrice pătratică:</strong> O matrice cu același număr de rânduri și coloane.</li>
        <li><strong>Matrice diagonală:</strong> O matrice pătratică în care toate elementele din afara diagonalei principale sunt zero.</li>
        <li><strong>Matrice identitate:</strong> O matrice diagonală în care toate elementele de pe diagonala principală sunt egale cu 1.</li>
        <li><strong>Matrice nulă:</strong> O matrice în care toate elementele sunt zero.</li>
    </ul>
    
    <h2>Operații cu Matrici</h2>
    
    <h3>Adunarea Matricilor</h3>
    <p>Două matrici pot fi adunate doar dacă au aceeași dimensiune. Adunarea matricilor se face element cu element:</p>
    <p class="formula">(A + B)<sub>ij</sub> = a<sub>ij</sub> + b<sub>ij</sub></p>
    
    <h3>Înmulțirea Matricilor</h3>
    <p>Două matrici pot fi înmulțite doar dacă numărul de coloane al primei matrici este egal cu numărul de rânduri al celei de-a doua matrice. Elementul de pe poziția (i, j) din produsul matricilor A și B se calculează astfel:</p>
    <p class="formula">(A * B)<sub>ij</sub> = a<sub>i1</sub> * b<sub>1j</sub> + a<sub>i2</sub> * b<sub>2j</sub> + ... + a<sub>in</sub> * b<sub>nj</sub></p>
    
    <h3>Înmulțirea cu un Scalar</h3>
    <p>Înmulțirea unei matrici cu un scalar se face prin înmulțirea fiecărui element al matricii cu acel scalar:</p>
    <p class="formula">(k * A)<sub>ij</sub> = k * a<sub>ij</sub></p>
    
    <h2>Determinantul unei Matrici</h2>
    <p>Determinantul unei matrici pătratice este un număr asociat matricei, care are multe aplicații în matematică. Determinantul unei matrici 2x2 se calculează astfel:</p>
    <p class="formula">det(A) = a<sub>11</sub> * a<sub>22</sub> - a<sub>12</sub> * a<sub>21</sub></p>
    
    <h2>Exemple</h2>
    <div class="example">
        <p><strong>Exemplu 1:</strong></p>
        <p>Fie matricile A și B:</p>
        <table>
            <tr>
                <th>A</th>
                <th>B</th>
            </tr>
            <tr>
                <td>
                    <table>
                        <tr><td>1</td><td>2</td></tr>
                        <tr><td>3</td><td>4</td></tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr><td>5</td><td>6</td></tr>
                        <tr><td>7</td><td>8</td></tr>
                    </table>
                </td>
            </tr>
        </table>
        <p>Adunarea matricilor A și B este:</p>
        <table>
            <tr><td>6</td><td>8</td></tr>
            <tr><td>10</td><td>12</td></tr>
        </table>
    </div>
    
    <div class="example">
        <p><strong>Exemplu 2:</strong></p>
        <p>Fie matricile A și B:</p>
        <table>
            <tr>
                <th>A</th>
                <th>B</th>
            </tr>
            <tr>
                <td>
                    <table>
                        <tr><td>1</td><td>2</td></tr>
                        <tr><td>3</td><td>4</td></tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr><td>2</td></tr>
                        <tr><td>0</td></tr>
                    </table>
                </td>
            </tr>
        </table>
        <p>Înmulțirea matricilor A și B este:</p>
        <table>
            <tr><td>1*2 + 2*0</td></tr>
            <tr><td>3*2 + 4*0</td></tr>
        </table>
        <p>Rezultat:</p>
        <table>
            <tr><td>2</td></tr>
            <tr><td>6</td></tr>
        </table>
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