export default class API{
    constructor(){

    }
    static async getAll(){
        return await fetch("/api?act=getall")
        .then(res => res.json())
        .then(res => {
            return res;
        });
    }

    static async delete(inventoryID){
        return await fetch(`http://localhost:3001/api?act=delete&id=${inventoryID}`)
        .then(res => res.json())
        .then(res => {
            return res;
        });
      
    }
    static async update(inventoryID, animal, description,age,price){
        return await fetch(`http://localhost:3001/api?act=update&id=${inventoryID}&animal=${animal}&description=${description}&age=${age}&price=${price}`)
        .then(res => res.json())
        .then(res => {
            return res;
        });
    }
    static async add(animal,description,age,price){
        return await fetch(`http://localhost:3001/api?act=add&animal=${animal}&description=${description}&age=${age}&price=${price}`)
        .then(res => res.json())
        .then(res => {
            return res;
        });
    }
    static async search(terms){
        return await fetch(`http://localhost:3001/api?act=search&term=${terms}`)
        .then(res => res.json())
        .then(res => {
            return res;
        });
    }
}
