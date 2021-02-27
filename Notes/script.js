function addNumbers(num1,num2){
    return num1+num2;
}
//console.log(addNumbers(2,5));

function convertMinutesToSeconds(minute){
    return minute * 60;
}
//console.log(convertMinutesToSeconds(5));

function yourAgeInSeconds(age){
    return age * 12 * 30 * 24 * 60 * 60;
}
//console.log(yourAgeInSeconds(20));

function getFirstItem(items){
    return items[0];
}
let items=[
    'inception', 'shawshank', 'godfather','pickle'
]
//console.log(getFirstItem(items));

// function badOrGoodMovie(movie_rating){
//     if(movie_rating>=7){
//         console.log('Good')
//     }else{
//         console.log('Bad');
//     }
// }
// console.log(badOrGoodMovie(6));

function isEmptyString(string){
    if(string==''){
        return true;
    }else{
        return false;
    }
}
//console.log(isEmptyString(''));
//console.log(isEmptyString('Anmol'));

function findMin(numbers){
    let minimum=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]<minimum){
            minimum=numbers[i];
        }
    }
    return minimum;
}
// console.log(findMin([5, 2, 9, 8, 7, 3]))
// console.log(findMin([5, 8, 9, 8, 7, 3]))

function findMax(numbers){
    let maximum=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]>maximum){
            maximum=numbers[i];
        }
    }
    return maximum;
}
// console.log(findMax([5, 2, 9, 8, 7, 13]))
// console.log(findMax([5, 8, 9, 8, 7, 3]))

function sortBestRatingsFirst(numbers){
    for(let j=0;j<numbers.length-1;j++){

    let max_num=numbers[j];
    let max_location =j;

    for(let i=j;i<numbers.length;i++){
        if(numbers[i]>max_num){
            max_num=numbers[i]
            max_location=i
        }
    }
    numbers[max_location]=numbers[j]
    numbers[j]=max_num
}
    return numbers
}

//console.log(sortBestRatingsFirst([5, 2, 9, 8, 7, 13]))

function findMaxHelper(numbers,start){
    let maximum=numbers[start];
    max_location=start
    for(let i=start;i<numbers.length;i++){
        if(numbers[i]>maximum){
            maximum=numbers[i];
            max_location=i
        }
    }
    return {max_number: maximum, max_index: max_location}
}
// console.log(findMax([5, 2, 9, 8, 7, 13]))
// console.log(findMax([5, 8, 9, 8, 7, 3]))

function sortBestWithHelper(numbers){
    for(let j=0;j<numbers.length-1;j++){

    //max 
    max=findMaxHelper(numbers, j);
    max_num=max['max_number']
    max_location=max['max_index']

    //swap
    numbers[max_location]=numbers[j]
    numbers[j]=max_num
}
    return numbers
}

console.log(sortBestWithHelper([5, 2, 9, 8, 7, 13]))