import React, { Component } from 'react';
class Mydata extends Component {
 
    constructor(props){
        super(props);
        this.state = { 
            items:[],
            isLoaded:false,
         }
    }

   componentDidMount(){
       fetch('https://kyawzaywin.herokuapp.com/usersinfo')
       .then (res=>res.json())
       .then (json=>{
           this.setState({
               isLoaded:true,
               items:json.msg,
           })
       });
   }
    
 render(){
    const {isLoaded,items}=this.state
     if( !isLoaded ){
         return <div>Loading.....</div>;
     }
     else{
         return (
             <div className="Hello">
                 <ul>
                     {items.map(item=>(
                         <li key={item.name}>
                             Name: {item.name}
                         </li>
                     ))}
                 </ul>
             </div>
         )
     }

 }

}
 
export default Mydata;