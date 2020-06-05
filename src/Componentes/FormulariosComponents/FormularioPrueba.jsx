import React,{ useState } from 'react';
import { Table } from 'react-bootstrap';


 
const List1 = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
 
  const handleChange = (evt) => {
    setValue(evt.target.value);
    
  };
 
  const handleSubmit = (evt) => {
    if (value) {
      setList(list.concat(value));
      
    }
 
    setValue('');
 
    evt.preventDefault();
   

  };
 
  return (
    <>
   <Table striped bordered hover variant="Pink" >
   <thead >
   <tr>
   <td>informacion ingresada </td>

    </tr>
     </thead>
     <tbody  >

     {list.map(item => (
       <tr key={item}>
            <td> {item}</td>
        </tr>
        
        ))}   
    						
                
                    </tbody>
      </Table>

 
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">ingresa la informacion</button>
      </form>
    </>
  );
};
 
export default List1;