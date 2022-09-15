import React from 'react';
import PetTable from './Pertable';
import API from "../API.js";


class SearchPage extends React.Component{
    constructor(props){
      super(props)
      {
        this.state = {
          searchValue: "",
          inventory:[]
        }
      }
  
    }
   async componentDidMount(){
      document.title = "Search";
      let inventory = await API.getAll();
      this.setState({inventory:inventory});
    }
    async handleSearchChanged(evt) {
      this.setState({searchValue: evt.target.value});
     let inventory = await API.search(evt.target.value);
      this.setState({inventory:inventory});
    
  }
  
    
    render()
    {
      return(
        <div className="Search">
          <h2>Search</h2>
          <SearchInput onChange={this.handleSearchChanged.bind(this)} value={this.state.searchValue}/>
          <PetTable inventory={this.state.inventory}/>
          </div>
      );
    }
  
  }
  
  
    function SearchInput(props)
  {
    
    return(
      <input id="search-input" type="search" placeholder="" onChange={props.onChange} value={props.value}></input>
    );
  
  }
  
  export default SearchPage;