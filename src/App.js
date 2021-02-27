import './App.css';
import {useState} from 'react'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'


function App() {
  const [data, settstate] = useState({
    nav:'',
    content:''
  })

  const getClicked=(mehu)=>{
      settstate({
        nav:mehu.nav,
        content:mehu.content
      })
  }


  return (
  <>
  <button onClick={()=>getClicked({nav:'sarah',content:'jamila'})}>btn1</button>
  <button onClick={()=>getClicked({nav:'mita',content:'akhi'})}>btn2</button>

  {
    data.nav==='sarah' && <MyComponent data={data}/>
  }
  {
    data.nav==='mita' && <MyComponent2/>
  }
  </>
  );
}

export default App;
