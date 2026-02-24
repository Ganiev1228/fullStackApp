import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
  getArticleDeatailStart,
  getArticleDetailFailure,
  getArticleDetailSuccess,
} from '../slice/article-slice';
import { useDispatch, useSelector } from 'react-redux';
import articleService from '../service/articles';
import { useEffect } from 'react';
import { Loader } from '../ui';

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const {articleDetail,isLoading} = useSelector(state=>state.articles)

  const getArticleDetail = async () => {
    dispatch(getArticleDeatailStart());
    try {
      const { data } = await articleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(data.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
      console.log('errrorro' + error);
    }
  };
  useEffect(() => {
    getArticleDetail();
  }, [slug]);
  return (
    isLoading?<Loader/>:
    articleDetail&&(
        <div>
          <div className=' p-5 mt-5 rounded text-body-emphasis bg-body-secondary'>
            <div className='col-lg-6 px-0'>
              <h1 className='display-4 fst-italic'>{articleDetail.title}</h1>{' '}
              <p className='lead my-3'>
               {articleDetail.description}
              </p>
              <p className='opacity-50'>
                <span className='fw-bold'>Created data: </span> {moment(articleDetail.createdAt).format('DD MMM YYYY')}
              </p>
              <p className='text-capitalize opacity-50'>
               <span className='fw-bold'>Author</span> : {articleDetail.author.username}
              </p>
              <p className='lead mb-0'>
                {/* <a href='#' className='text-body-emphasis fw-bold'>
                  Continue reading...
                </a> */}
              </p>
            </div>
          </div>
        </div>
        
  )
  );
};

export default ArticleDetail;
