import { Route, Routes } from 'react-router-dom';
import './App.css';
import WholeBlogContainer from './WholeBlogContainer';
import DetailedBlog from './DetailedBlog';
import TagBasedNews from './TagBasedNews.';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WholeBlogContainer></WholeBlogContainer>}></Route>
        <Route path="/expand_blog" element={<DetailedBlog></DetailedBlog>}></Route>
        <Route path='/tag' element={<TagBasedNews></TagBasedNews>}></Route>
      </Routes>
    </div>



  );
}

export default App;
