import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json'
import './styles/App.css'
function App() {
  const [searchValue, setsearchValue] = useState('');
  const searchedDatas= JSONDATA.filter((val)=>{
    if(searchValue===""){
      return val
     }
    else if(val.first_name.toLowerCase().includes(searchValue.toLowerCase())){
        return val;
    }
})

  return (
    <div className="App">
        <input type="text" 
           value={searchValue}
           onChange={(e)=>{setsearchValue(e.target.value)}}
        />
       {
        searchedDatas.map((val,key)=>{
        return(
            <h4 key={val.id}>{val.first_name}</h4>
        )
    })
       }
    </div>
  );
}

export default App;
