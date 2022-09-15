import React from 'react';
import API from "../API.js";

function PetTable(props){
    let inventoryRows;
     if(props.inventory.length > 0){
        let action = [];
        
        // if(props.editMode){
        //     action = (
              
        //     );
        //   }
         inventoryRows = props.inventory.map((item,idx) => {
            return <tr key={(item.animal + item.age).toString()} data-row={item.id} data-animal={item.animal} data-description={item.description} data-age={item.age} data-price={item.price}>
                <td>{item.animal}</td>
                <td>{item.description}</td>
                <td>{item.age}</td>
                <td>{item.price}</td>
                <td>
                    <input type="button" onClick={(e)  => props.onEditClicked(e, item.id )} value="Edit" className="edit-Button"/>
                    <input type="button" onClick={(e) => props.onDeleteClicked(e, item.id)} value="Delete" className="Delete-Button"/>
                </td>
                </tr> 
            }                   
         );
       }else{
         inventoryRows =(
           <tr>
              <td colSpan="4">No Result</td>
           </tr>
         )
       }
   
     let actionHeader = [] ;
     if(props.editMode)
           actionHeader = (<th>Actions</th>)
     return(
       <div className="table">
         <table className="table">
             <thead>
               <tr>
                 <th>Animal</th>
                 <th>Description</th>
                 <th>Age</th>
                 <th>Price</th>
                 {actionHeader}
                </tr>
             </thead>
             <tbody>
                {inventoryRows}
             </tbody>
             </table>
       </div>
     );
   }
  
   export default PetTable;