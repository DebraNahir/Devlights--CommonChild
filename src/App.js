import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function CommonChild(string){
  var res= string.toUpperCase();
  var array= res.split(" ");
  var salida =[];
  var flag=false;
  var n=0;
  var m=0;
  if (array.length === 2){
    var string1 = array[0];
    var string2 = array[1];
    if (string1.length !== string2.length){
      alert("The strings do not have the same length");
    }else{
      for (var i = 0; i < string1.length ; i++){
        flag=false; n=m;
        while ((flag === false) && (n <= string2.length)) {
          if (string1[i] === string2[n]){
            salida.push(string1[i]);
            flag=true;
            n++;m=n;
          } else {n++;};
        }
      };
      return(salida.length);

    }
  } else {alert("Just write two strings")};

}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={value:'',result:''};
    this.handleChange= this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleClick(event){
    let status;
    status = 'Length child string is: ' + CommonChild(this.state.value);
    this.setState({result:status});
  }

  render(){
    let { value , result } = this.state;
    return(
      <div className='App'>
          <h1>Write here the two strings separated by a space</h1>
          <input className="text" value={value} onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Click for validate</button>
          <div> {result && <h2>{result}</h2> } </div>
      </div>
    )
  }
}

export default App;
