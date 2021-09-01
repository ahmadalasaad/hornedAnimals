import React,{Component} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './assest/data.json';
import SelectedBeast from './components/SelectedBeast ';
import HornedForm from './components/HornedForm';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:data,
      show:false,
      title:'',
      description:'',
      image_url:'',
    }
  }
  handleClose=(title,description,image_url)=>{
    this.setState({
      show:!this.state.show ,
      title:title,
      description:description,
      image_url:image_url
    })
  }
  getHorns=(h)=>{
    let newData=data.filter(item=>{
      if(h==='All'){
        return true
      }else{
      return (JSON.stringify(item.horns)===h);
    }
    })
    this.setState({
      data:newData
    })
   console.log(this.state.data);
  }
  render(){
  return (
    <div className="App">
      <Header/>
      <HornedForm getHorns={this.getHorns} />
      <Main beasts={this.state.data} handleClose={this.handleClose}/>
      <Footer/>
      <SelectedBeast handleClose={this.handleClose} show={this.state.show}  title={this.state.title} description={this.state.description}  image_url={this.state.image_url} />
    </div>
  );
}
}
export default App;
