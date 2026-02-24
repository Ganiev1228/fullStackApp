import { useNavigate, useParams } from 'react-router-dom';
import InputField from './inputField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArticlesFailure, getArticlesStart, getArticlesSuccess, postArticleStart } from '../slice/article-slice';
import articleService from '../service/articles';

const EditArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch()
  const { slug } = useParams();
  const navigate = useNavigate()
  
  const getArticle = async () => {
    dispatch(getArticlesStart())
    try {
      const {data} = await articleService.getArticleDetail(slug);
        // console.log(data.article);
        dispatch(getArticlesSuccess())
        const article = data?.article
        if(article){
          setTitle(article.title);
          setDescription(article.description);
          setBody(article.body)
        }else{console.log('error while getting data for editing')}
      } catch (error) {
      dispatch(getArticlesFailure())
      console.log('errrorro');
    }
  };
  useEffect(()=>{
    getArticle()
  },[slug])
  
  const formsubmit = async (e)=>{
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart())
    try {
      const response = await articleService.editArticle(slug,article);
      dispatch(getArticlesSuccess())
      navigate('/');
      console.log(response);
    } catch (error) {
      dispatch(getArticlesFailure(error))
      console.log('error while editing article');
    }
  };
  
  
  const proplar= {title,setTitle,description,setDescription,body,setBody,formsubmit,tag:'Edit'}

  return (
    <div className='text-center'>
      <h1 className=''>Edit Article</h1>
      <InputField {...proplar}></InputField>
    </div>
  );
};

export default EditArticle;
