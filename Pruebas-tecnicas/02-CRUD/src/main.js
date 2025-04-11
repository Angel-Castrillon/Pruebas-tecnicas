const modal = document.getElementById('modal');
const createItemForm = document.getElementById('create-item-form');
const objectList = document.getElementById('object-list');


let objects = JSON.parse(localStorage.getItem("objects")) || [];

function modalCreateItem() {
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
    createItemForm.reset();
}

createItemForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const  item = createItemForm.item.value;
    const  brand = createItemForm.brand.value;
    const  stock = createItemForm.stock.value;
    const  description = createItemForm.description.value;

    const newObject = {item, brand, stock, description};
    objects.push(newObject);
    localStorage.setItem("objects", JSON.stringify(objects));

    closeModal();

    updateTable();

});


const updateTable = () =>{
    objects = JSON.parse(localStorage.getItem("objects")) || [];
    objectList.innerHTML = '';
    objects.forEach((object, index)  =>{
        const row = `<tr>
            <td>${object.item}</td>
            <td>${object.brand}</td>
            <td>${object.stock}</td>
            <td>${object.description}</td>
            <td>
                <button onclick="editObject(${index})">Editar</button>
                <button onclick="deleteObject(${index})">Eliminar</button>
            </td>
        </tr>`;
        objectList.innerHTML += row;
    });
};

function deleteObject(index){
    if (confirm("¿Seguro que quiere eliminar este objeto?")){
        objects.splice(index, 1);
        localStorage.setItem("objects", JSON.stringify(objects)); // <- aquí
        updateTable();
    }
};

function editObject(index){
    localStorage.setItem('editIndex', index);
    window.location.href = 'edit.html';
};

window.onload = () => {
    updateTable(); // Cargar los datos desde localStorage al abrir la página
  };