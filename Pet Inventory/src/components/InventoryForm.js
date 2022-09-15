import React from 'react';

function InventoryForm(props){
    let dialogTitle = "Add New Inventory";
    let dialogError = [];
    if(props.mode == "edit"){
      dialogTitle = "Edit Inventory";
    }
  
    if(props.dialogError){
      dialogError =(<div className="error">{props.errorMessage}</div>);
    }
    return(
      <div className="add-inventory-form">
        <div className="dialog-content">
          <div className="close-Button">
          <input type="button" value="X" onClick={props.onCloseButtonClicked}/></div>
       <h3>{dialogTitle}</h3>
       <table width="100%">
               <tbody>
                      <tr>
                          <td colSpan="2">
                              <lable>Animal Name</lable>
                              <input type="text" placeholder="Animal" onChange={props.onAnimalChanged} value={props.animal}/>
                          </td>
                      </tr>
                      <tr>
                          <td colSpan="2">
                              <lable>Description</lable>
                              <textarea  placeholder="Description" onChange={props.onDescriptionChanged} value={props.description} />
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <lable>Age</lable>
                              <input type="number" from="1" to="30" placeholder="Age" onChange={props.onAgeChanged} value={props.age}/>
                          </td>
                          <td>
                              <lable>Price</lable>
                              <input type="number" step="0.01" from="0" placeholder="Price" onChange={props.onPriceChanged} value={props.price}/>
                          </td>
                      </tr>
                      <tr>
                        { props.mode == "edit" && (
                          <td colSpan="2">
                              <input type="button" value="Save" onClick={props.onSaveButtonClicked} />
                          </td>
                        )}
                        { props.mode == "add" && (
                          <td colSpan="2">
                              <input type="button" value="Add" onClick={props.onAddButtonClicked}/>
                          </td>
                        )}
                      </tr>
               </tbody>
       </table>
       {dialogError}
       </div>
       </div>
    )
  }
   
  export default InventoryForm;