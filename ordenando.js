// Funções de ordenação já implementadas
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const shuffle = (arr, num_swaps) => {
    for (let i = 0; i < num_swaps; i++) {
        let [i, j] = [Math.floor(Math.random() * arr.length), Math.floor(Math.random() * arr.length)];
        swap(arr, i, j);
    }
};

const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
};

const selection_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx]) min_idx = j;
        }
        swap(arr, i, min_idx);
    }
};

const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
};

// Funções de interação com DOM
function add() {
    const valor = document.getElementById('valor').value;
    if (valor !== '') {
        const lista = document.getElementById('valores');
        const node = document.createElement('li');
        node.innerHTML = valor;
        lista.appendChild(node);
    }
}

function ordenar() {
    const lista = document.getElementById('valores');
    const algSelect = document.getElementById('algoritmo');
    const nodes = lista.children;
    let valores = Array.from(nodes).map(node => parseInt(node.innerHTML));

    switch (algSelect.selectedIndex) {
        case 0: // Bubble Sort
            bubble_sort(valores);
            break;
        case 1: // Selection Sort
            selection_sort(valores);
            break;
        case 2: // Quick Sort
            quick_sort(valores, 0, valores.length - 1);
            break;
    }

    lista.innerHTML = valores.map(val => `<li>${val}</li>`).join('');
}

function misturar() {
    const lista = document.getElementById('valores');
    const nodes = lista.children;
    let valores = Array.from(nodes).map(node => parseInt(node.innerHTML));
    
    shuffle(valores, valores.length);

    lista.innerHTML = valores.map(val => `<li>${val}</li>`).join('');
}
