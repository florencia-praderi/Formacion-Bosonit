//Ejercicio 1
//Dado un array ordenado de números enteros, escriba una función que devuelva true cuando el array tenga valores duplicados.

function arrSinDuplicados (arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i + 1] === arr[i]){
            return true
        }
        else{
            return false
        }
    }
}
console.log('Ejercicio 1:')
console.log(arrSinDuplicados([1, 1, 2, 2, 3, 5, 9, 9]))
console.log(arrSinDuplicados([95, 114]))

//Ejercicio 2
//Escriba una función que agregue o elimine un elemento en la primera o última posición de un array.

function addOrDeleteElement(arr, action, element){
    if(action === 'add_first'){
        arr.unshift(element)
        return arr
    }
    else if(action === 'remove_first'){
        arr.shift(element)
        return arr
    }
    else if(action === 'add_last'){
        arr.push(element)
        return arr
    }
    else if(action === 'remove_last'){
        newArr = arr.pop(element)
        return arr
    }
    else{
        return 'Debe seleccionar una de las siguientes acciones: add_first, remove_first, add_last o remove_last'
    }
}
console.log('Ejercicio 2:')
console.log(addOrDeleteElement([1, 6, 9, 7], 'add_first', 5))
console.log(addOrDeleteElement([1, 6, 9], 'remove_first'))
console.log(addOrDeleteElement([1, 6, 9], 'add_last', 7))
console.log(addOrDeleteElement([1, 6, 9], 'remove_last'))

//Ejercicio 3
//Agregue un nuevo campo llamado year a todos los clientes y devuelva el nuevo array.

const clients = [
    { id: '1', name: 'Solid Snake' },
    { id: '2', name: 'Liquid Snake' },
    { id: '3', name: 'Solidus Snake' },
];

let clientsYear = clients
.map(client=>{
    return {
        id: client.id,
        name: client.name,
        year: ""
    }
})
console.log('Ejercicio 4:')
console.log(clientsYear)

//Ejercicio 5
//Dado un array de usuarios, escriba una función para actualizar el nombre de un usuario pasando su id.
//Esta función debería devolver la nueva matriz modificada y la matriz original.
//Nota: Suponga que cada objeto de usuario siempre tiene los atributos id (que es único), firstname y lastname, y ningún otro atributo.

const users = [
    { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
    { id: '2', firstname: 'Morty', lastname: 'Smith' },
];

function updateUsername (users, id, name){
    let newArr;
    for(let i= 0; i < users.length; i++){
        if(users.firstname === name){
            return {
                id: users.id,
                firstname: users.firstname,
                lastname: users.lastname
        }}
        else if(users.firstname !== name){
            return {
                id: id,
                firstname: name,
                lastname: users.lastname,
        }
    }
}}
console.log('Ejercicio 5:')
console.log(updateUsername(users, '2', 'Morty'))
console.log(updateUsername(users, '1', 'Tiny Rick'))

//Ejercicio 6
//Escriba una función para saber si todos los productos de nuestra cesta o al menos uno tiene gastos de envío superiores a 0.

const basket = [
    { id: '1', name: 'PokeBall', shippingCost: 0 },
    { id: '2', name: 'SuperBall', shippingCost: 3 },
    { id: '3', name: 'UltraBall', shippingCost: 5 },
];

function check (basket){
    const checkCost = (shippingCost) => {shippingCost > 0};
    return basket.some(checkCost);   
}

console.log('Ejercicio 6:')
console.log(check(basket))

//Ejercicio 7
//Dado un array de humanos, escriba una función que devuelva un ciempiés humano (como string) y que puede elegir el símbolo del conector. 
//Si no se envía ningún símbolo, la función devuelve los un cienpiés humano sin conector.

function convert (arr, connector){
    let result = arr.join(connector)
    return result
}
console.log('Ejercicio 7:')
console.log(convert(['mother', 'son', 'father'], '-'))
console.log(convert(['aunt', 'grandma', 'uncle'], '**'))


//Ejercicio 9
//Ordenar un array por una propiedad: sort. Dado un array de productos, escriba una función para ordenarla por una propiedad variable. 
//Suponga que cada producto tendrá las propiedades name y category.

const products = [
    { name: 'roomba', category: 'home' },
    { name: 'iPad', category: 'electronics' },
    { name: 'lego Star Wars', category: 'toys' },
];

function order(arr, prop){
    let result;
    if(prop=='name'){
        result = arr.sort((a, b)=>{
        if(a.name > b.name){
            return 1
        }
        else if(a.name < b.name){
            return -1
        }
        return 0
    })
    return result
    }
    if(prop=='category'){
        result = arr.sort((a, b)=>{
            if(a.category > b.category){
                return 1
            }
            else if(a.category < b.category){
                return -1
            }
            return 0
        })
    return result        
    }
}
console.log('Ejercicio 9:')
console.log(order(products, 'name'))
console.log(order(products,'category'))

//Ejercicio 10
//Dado un array de números, escriba una función que devuelva 
//un subarray dependiendo de la posición inicial y final que queramos. La posición final es un parámetro opcional.

function subarray(arr, position1, position2){
    let newArr = arr.slice(position1, position2)
    return newArr
}
console.log('Ejercicio 10:')
console.log(subarray([1, 2, 3], 0, 1))
console.log(subarray([1, 2, 3], 1, 2))
console.log(subarray([1, 2, 3], 1))

//Ejercicio 12
//Dado un array de números, escriba una función que devuelva la suma total. 

function sumaTotal(arr){
    let result = arr.reduce((a, b)=> {return a + b} )
    return result
}
console.log('Ejercicio 12:')
//console.log(sumaTotal([5, 11, 4, 18]))
