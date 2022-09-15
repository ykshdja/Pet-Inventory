import React from 'react';
import API from "../API.js";
import PetTable from './Pertable';
import InventoryForm from './InventoryForm';

class EditPage extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {
        searchTerms:"",
        showAddDialog: false,
        id: null,
        animal:"",
        description: "",
        age:0,
        price:0,
        dialogMode:'add',
        inventory:[] ,
        
      }
      this.handleEditClicked = this.handleEditClicked.bind(this);
      this.handleAddClicked = this.handleAddClicked.bind(this);
    }
    async componentDidMount(){
      document.title = "Edit";
      let inventoryManager = new API();
      let inventory = await API.getAll();
      this.setState({inventory: inventory});
      console.log(inventory);
    }
    handleEditClicked(evt, id){
      let animal= evt.target.parentNode.parentNode.getAttribute('data-animal');                     
      let description= evt.target.parentNode.parentNode.getAttribute('data-description');
      let age= evt.target.parentNode.parentNode.getAttribute('data-age');
      let price= evt.target.parentNode.parentNode.getAttribute('data-price');
      this.setState({dialogMode:'edit',showAddDialog:true, id: id, animal:animal,description:description,age:age,price:price})
    }
    async handleDeleteClicked(evt, id){
      let rowClicked = evt.target.parentNode.parentNode.getAttribute('data-row');
      console.log('delete row clicked:', rowClicked);
      if(window.confirm('Are You sure you want to delete the Pet?'))
      {
        API.deletePet(rowClicked);
        console.log(rowClicked);
        let inventory = await API.getAll();
        this.setState({inventory:inventory})
      }
    }
  
    handleAddClicked(evt){this.setState({dialogMode:'add',showAddDialog:true,animal:"",description:"",age:0,price:0.0});}
                  handleAnimalChanged(evt){this.setState({animal: evt.target.value});}
                  handleDescriptionChanged(evt){this.setState({description: evt.target.value});}
                  handleAgeChanged(evt){this.setState({age: evt.target.value});}
                  handlePriceChanged(evt){this.setState({price: evt.target.value});}
                  handleDialogCloseClicked(evt){this.setState({showAddDialog:false});}
  
  
  
  
  
                  async handleDialogAddClicked(evt){
                    if(window.confirm("Are yousure you want to add this pet")){
                      await API.add(this.state.animal,this.state.description,this.state.age,this.state.price);
                      let inventory = await API.getAll();
                      this.setState({showAddDialog:false,inventory:inventory});
                    }
                  }
  
                 async handleDialogSaveClicked(evt){
                    if(window.confirm("Are yousure you want to update this pet")){
                      await API.update(this.state.id, this.state.animal,this.state.description,this.state.age,this.state.price);
                      let inventory = await API.getAll();
                      this.setState({showAddDialog:false,inventory:inventory});
                    }
                  }
  
                  handleDialogCloseClicked(evt){
                    this.setState({showAddDialog:false});
                  }
  
  
  
    deleteInventory(petId)
    {
  
      fetch(`http://localhost:3001/api?act=delete&id=$(petId)`)
      .then(function(res){
  console.log(res);
      })
      .catch(function(err){
  console.log(err);
      });
  
  
      
    }
    render() {
      let addDialog = [];
      if(this.state.showAddDialog) {addDialog = 
           <InventoryForm mode={this.state.dialogMode}
                id={this.state.id}
                animal = {this.state.animal} onAnimalChanged={this.handleAnimalChanged.bind(this)}
                description={this.state.description} onDescriptionChanged={this.handleDescriptionChanged.bind(this)}
                age={this.state.age} onAgeChanged={this.handleAgeChanged.bind(this)}
                price={this.state.price} onPriceChanged={this.handlePriceChanged.bind(this)}
                onSaveButtonClicked={this.handleDialogSaveClicked.bind(this)}
                onAddButtonClicked={this.handleDialogAddClicked.bind(this)}
                onCloseButtonClicked={this.handleDialogCloseClicked.bind(this)}
           />;
      }
      return(
        <div>
          <div className="page-content">
            <h2>Edit</h2>
            <PetTable inventory={this.state.inventory} editMode="true" onEditClicked={this.handleEditClicked} onDeleteClicked={this.handleDeleteClicked}/>
            <input type="button" value="Add Inventory" onClick={this.handleAddClicked}/>
          </div>
          {addDialog}
      </div>
      );
    }
    async componentDidMount() {
      document.title="Edit";
      let inventory=await API.getAll();
      this.setState({inventory: inventory});
    }
    
  }

  export default EditPage;