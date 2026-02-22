import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ArticleDetail, CreateArticle, Login, Main, Navbar, Register } from './components';
import { getItem } from './helpers/persistance-storage';
import articleService from './service/articles';
import AuthService from './service/auth';
import { getArticlesStart, getArticlesSuccess } from './slice/article-slice';
import { signUserSucces } from './slice/login-slice';
const App = () => {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const resp = await AuthService.getUser();
      dispatch(signUserSucces(resp.user));
    } catch (error) {
      console.log('error with getUser');
    }
  };
  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const { data } = await articleService.getArticles();
      dispatch(getArticlesSuccess(data.articles));
      console.log(data.articles);
    } catch (error) {
      console.log('errrorro');
    }
  };

  useEffect(() => {
    getArticles();

    const token = getItem('token');
    if (token) {
      getUser();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/articles/:slug' element={<ArticleDetail />}></Route>
          <Route path='/create-article' element={<CreateArticle/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
