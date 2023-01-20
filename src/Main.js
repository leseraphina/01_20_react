import {BrowserRouter,Routes,Route} from 'react-router-dom';
//  모든 페이지
import App from './components/App';
import Home from './pages/Home';
import Sample01 from './pages/Sample01';
import Sample02 from './pages/Sample02';
import Sample03 from './pages/Sample03';
import NotFind from './pages/NotFind';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';

function Main(){
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path='sample01'>
            <Route index element={<Sample01 />} />;
            <Route path='sub01' element={<Sub01 />} />;
            <Route path='sub02' element={<Sub02 />} />;
          </Route>
          <Route path='sample02' element={<Sample02 />} />
          <Route path='sample03' element={<Sample03 />} />
          <Route path='*' element={<NotFind />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default Main;

