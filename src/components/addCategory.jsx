import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('one Punch');


const onChangeText = (event) => {
setInputValue(event.target.value);

}

const onSubmitF = (event) =>{
event.preventDefault();

if(inputValue.trim().length <=1){
    return
}

//setCategories((categories)=>[inputValue,...categories]);
onNewCategory(inputValue.trim());
setInputValue('');
}

  return (
    <form onSubmit={onSubmitF}>
   <input type="text" 
   placeholder='Buscar gits'
   value={inputValue}
   onChange={onChangeText}/>
   </form>
  )
}

