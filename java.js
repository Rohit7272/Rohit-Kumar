let btn = document.querySelector("button");
btn.addEventListener('click' ,msg);
function msg()
{
    alert('hello');
}

let list = document.querySelector('.output ul');
list.innerHTML = '';
let city = ['muMbai','pAtNa','goA'];

for(i=0;i<city.length;i++)
{
    let lowerCity = city[i].toLowerCase();
    let firstAlphabet = city[i].slice(0,1);
     lowerCity = lowerCity.replace(firstAlphabet,firstAlphabet.toUpperCase());
    let listItem = document.createElement('li');
listItem.textContent=lowerCity;
list.appendChild(listItem);
}

let list1=document.querySelector('.output2 ul');
list1.innerHTML='';
let word = ['happy birthday','happy holi guys','happy holi to all family'];

for(let i=0;i<word.length;i++)
{
    if(word[i].indexOf('birthday')!==-1){
    let display = document.createElement('li');
    display.textContent = word[i];
    list1.appendChild(display);
    }
}

const details = [{
    Name: 'Rahul Kumar',
    height: '172',
    mass: '52',
    eye_color: 'black',
    gender: 'male',
},
    {
        Name: 'Manish',
        height: '162',
        mass: '42',
        eye_color: 'black',
        gender: 'male',
    },
    {
        Name: 'manshi',
        height: '152',
        mass: '42',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        Name: 'jessy',
        height: '182',
        mass: '72',
        eye_color: 'black',
        gender: 'male',
    }
];


//Get an array of all names


const name= details.map((details)=>
{
    return details.Name;
})




//get an array of objects with just name and height properties
const a = details.map((b)=>{
    return b.Name
})
console.log(a);

const c = details.map((b)=>{
    return b.height
})
console.log(c); 

//get the total height of all characters

const totalHeight = details.reduce((first,ch)=>{
    return first +Number(ch.height)

},0)

console.log(totalHeight);

//get characters with mass greater than 100

//get all male characters

//sort by gender
//sort by name

//Does every character have mass mare than 40?
// Does every character have blue eyes

// Is there at least one male charater?
// Is there at least one character taller than 200?


