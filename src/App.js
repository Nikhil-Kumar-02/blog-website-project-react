import { Route, Routes } from 'react-router-dom';
import './App.css';
import WholeBlogContainer from './WholeBlogContainer';
import DetailedBlog from './DetailedBlog';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WholeBlogContainer></WholeBlogContainer>}></Route>
        <Route path="/expand_blog" element={<DetailedBlog></DetailedBlog>}></Route>
      </Routes>
    </div>



  );
}

export default App;
