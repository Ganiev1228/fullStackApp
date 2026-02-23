import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui';
import { useNavigate } from 'react-router-dom';
import { getArticlesStart, getArticlesSuccess } from '../slice/article-slice';
import articleService from '../service/articles';
import { useEffect } from 'react';

const Main = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { articles,isLoading } = useSelector((state) => state.articles);

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
  useEffect(()=>{
    getArticles()
  },[])
  
  return (
    <div className='album py-5 bg-body-tertiary'>
      <div>
        {isLoading&&<Loader/>}
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {articles.map((item) => (
            <div className='col' key={item.id}>
              <div className='card shadow-sm h-100'>
                <svg
                  aria-label='Placeholder: Thumbnail'
                  className='bd-placeholder-img card-img-top'
                  height='225'
                  preserveAspectRatio='xMidYMid slice'
                  role='img'
                  width='100%'
                  xmlns='http://www.w3.org/2000/svg'>
                  <rect width='100%' height='100%' fill='#55595c'></rect>
                  <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
                    Thumbnail
                  </text>
                </svg>
                <div className='card-body'>
                  <p className='card-text fw-bold'> {item.title}</p>
                  <p className='card-text'> {item.description}</p>
                </div>
                  <div className=' card-footer d-flex justify-content-between align-items-center '>
                    <div className='btn-group'>
                      <button type='button' className='btn btn-sm btn-outline-success ' onClick={()=>navigate(`/articles/${item.slug}`)}>
                        View
                      </button>
                      <button type='button' className='btn btn-sm btn-outline-secondary'>
                        Edit
                      </button>
                      <button type='button' className='btn btn-sm btn-outline-danger'>
                        Delete
                      </button>
                    </div>
                    <small className='text-body-secondary text-capitalize fw-bold'>
                      {item.author.username}
                    </small>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
