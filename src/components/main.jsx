import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui';
import { getArticlesStart, getArticlesSuccess } from '../slice/article-slice';
import articleService from '../service/articles';
import { useEffect } from 'react';
import ArticleCard from './article-card';

const Main = () => {
  const dispatch = useDispatch();
  const { articles, isLoading } = useSelector((state) => state.articles);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
 

  return (
    <div className='album py-5 bg-body-tertiary'>
      <div>
        {isLoading && <Loader />}
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {articles?.map((item) => (
            <ArticleCard key={item.slug} getArticles={getArticles} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
