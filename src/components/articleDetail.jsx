import { useParams } from 'react-router-dom';
import {
  getArticleDeatailStart,
  getArticleDetailFailure,
  getArticleDetailSuccess,
} from '../slice/article-slice';
import { useDispatch } from 'react-redux';
import articleService from '../service/articles';
import { useEffect } from 'react';

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const getArticleDetail = async () => {
    dispatch(getArticleDeatailStart());
    try {
        const {data} = await articleService.getArticleDetail(slug);
        console.log(data.article);
      dispatch(getArticleDetailSuccess(data.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
      console.log('errrorro' + error);
    }
  };
  useEffect(() => {
    getArticleDetail();
  }, [slug]);
  console.log(slug);
  return <div>ArticleDetail</div>;
};

export default ArticleDetail;
