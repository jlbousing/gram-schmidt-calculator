
var entry = [];

var u1 = {
    x: 1,
    y: 1,
    z: 1
};

console.log(u1);

var u2 = {
    x: -1,
    y: 0,
    z: -1
};

console.log(u2)

var u3 = {
    x: -1,
    y: 2,
    z: 3
};

entry.push(u1);
entry.push(u2);
entry.push(u3);



console.log("gram")
gramSchmidt();

function gramSchmidt(){

    var ortoVec = entry[0];

    for(let i = 1; i < entry.length; i++){

        let auxVec = [];

        for(let j = 0; j < ortoVec.length; j++){

            console.log("entra ",entry[i]);
            console.log("sale ",vecPositionOperator(entry[i],ortoVec[j]));
            auxVec.push(vecPositionOperator(entry[i],ortoVec[j]));
        }
    }
}

function scalarProduct(vector1, vector2) {

    return (vector1.x * vector2.x) + (vector1.y * vector2.y) + (vector1.z* vector2.z);
}

function scalarXVector(alfa, vector){

    vector.x = vector.x * alfa;
    vector.y = vector.y * alfa;
    vector.z = vector.z * alfa;

    return vector;
}

function lessVectors(vector,vector2){

    console.log("-------------------------------------------------------------------");
    console.log(vector);
    console.log("menos")
    console.log(vector2);

    let obj = {
        i: vector.x - vector2.x,
        j: vector.y - vector2.y,
        k: vector.z - vector2.z
    };

    console.log("resulta ",obj);

    return obj;
}

function vecPositionOperator(vector1, vector2){

    // (vector1 point vector2/vector2 point vector2) * vector2

    let alfa = scalarProduct(vector1,vector2) / scalarProduct(vector2,vector2);
    return scalarXVector(alfa,vector2);
}

function getVectorModule(vector){

    return ((vector.x)^(2) + (vector.y)^(2) + (vector.z)^(2))^(1/2);
}

function getUnitaryVector(vector){

    vector.x = vector.x / getVectorModule(vector);
    vector.y = vector.y / getVectorModule(vector);
    vector.z = vector.z / getVectorModule(vector);

    return vector;
}