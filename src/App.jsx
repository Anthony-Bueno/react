import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GitGrid } from "./components/GitGrid";


function App() {


const [categories, setCategories] = useState(['one']);

 const onAddCategory=(newCategory)=>{

setCategories([newCategory,...categories])


 }




  return (
    <>
<h1>App Api</h1>
<AddCategory onNewCategory={(value)=>{onAddCategory(value)}}/>


      {categories.map(c => 
        <GitGrid key={c} categoria={c}/>
      )}


    </>
  );

}




export default App;
