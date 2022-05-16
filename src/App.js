import logo from './logo.svg';
import './App.css';

function App() {
 
let q=1;
let w = <div></div>;

// Log writung
console.log(Print10());
// call function with parameter regular function
//RunF(Print10);

// call function with parameter Arrow  function
//RunF(()=>{ return 900; });

  if(true)
  {
    let b =2;
    var a=1;
    const c = 3
  }

// dynamit type
let p=12;
p="12";
p = new Object();
p = [1,2,3,3,4,4,4,5,5,9]


// JSON
let j= new Object();
j.id=123;
j.name="Moshe";
j.Phone="0526866565";
console.log(JSON.stringify(j));

let str = JSON.stringify(j);
let fromStr = JSON.parse(str);


console.log(j.name)



let  jsx=<div><List/> <hr/><NewList/><hr/> <NewsImg/> <NewsImg/> <List/> blabla<List/> </div>;

return(jsx);


}

function NewsImg()
{
  return (<p><img src='https://cdn.cnn.com/cnnnext/dam/assets/220515233806-china-covid-test-child-0409-medium-tease.jpg' /></p>)
}
function List()
{
  let r = <div><ol><li>Ball</li><li>Storm</li><li>Bread</li><li>Shoes</li></ol></div>;
  return r;
}
function NewList()
{
  const arr = ['Water','Pen','Cotton','Acamol','Power','TV','Black'];

  let li1 = arr.map((x)=>{return(<li>{x}</li>)});
  console.log(li1);
  let r = <div><ol>{li1}</ol></div>;
  return r;
}

function Print10()
{
  return "10";
}

function RunF(f)
{
  alert(f());
}



export default App;
