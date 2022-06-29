// Use the rest countries API URL  https://restcountries.eu/rest/v2/all and display all the country flags in the console

// use the rest countries and print all countries name, sub-regions and population

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    // For 3rd question ans
    for (i = 0; i < data.length; i++)
        console.log(data[i].name.common, " ", data[i].subregion, " ", data[i].population);

    // For 2nd question ans
    for (i = 0; i < data.length; i++) {
        console.log(data[i].flags);
    }
}


//How to compare two JSON have the same properties without order?
const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }

    return true;
}

var obj1 = { name: "person", age: 5 };
var obj2 = { age: 5, name: "person" };

console.log(isEqual(obj1, obj2));