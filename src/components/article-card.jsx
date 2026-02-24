import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import articleService from '../service/articles';

const ArticleCard = ({ item, getArticles }) => {
  const { user, loggedIn } = useSelector((state) => state.loginn);
  const navigate = useNavigate();
  const deleteArtikl = async (slug) => {
    try {
      await articleService.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log('error while deleting');
    }
  };

  return (
    <div className='col'>
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
            <button
              type='button'
              className='btn btn-sm btn-outline-success '
              onClick={() => navigate(`/articles/${item.slug}`)}>
              View
            </button>
            {loggedIn && user.username === item.author.username && (
              <>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                  onClick={() => navigate(`/edit-article/${item.slug}`)}>
                  Edit
                </button>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-danger'
                  onClick={() => deleteArtikl(item.slug)}>
                  Delete
                </button>
              </>
            )}
          </div>
          <small className='text-body-secondary text-capitalize fw-bold'>{item.author.username}</small>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
