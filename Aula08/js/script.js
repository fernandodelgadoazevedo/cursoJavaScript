const soma = function (array) {
    let rs = 0;
    for(let i=0; i<array.length;i++){
        rs += array[i];
    }
    return rs;
}

const media = function (array){
    let rs = 0;
    for(let i=0; i<array.length;i++) {
        rs += array[i];}

    return rs / array.length;
};