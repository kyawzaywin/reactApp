import React, { Component } from 'react';
class Test extends Component {
    state = { 
        count:1,
        names : ['Mg Mg','Aung Aung','Tun Tun','Su Su','Ma Ma']
     }
    render() { 
     let classes= "ml-5 btn btn-";
     classes += this.state.count === 0 ? "primary" : 
                  this.state.count === 1 ? "danger":
                  this.state.count === 2 ? "warning":
                  this.state.count ===3 ? "dark text-white": "light btn-lg"




    return (
        <div>
<h1 style={{margin:20}} className="text-primary">{this.formatCount()}</h1>
<button className={classes} >click</button>
<div>{this.state.names.map(name=> <p key={name}>{name}</p>)}</div>
        </div>
    
    
    );
    }

    formatCount(){
        const {count}=this.state;
      return count===0 ? <h1>hi</h1>:<h1>hello</h1>
    }
}
 
export default Test;