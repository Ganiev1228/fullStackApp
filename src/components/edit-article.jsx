import { useParams } from 'react-router-dom';
import InputField from './inputField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArticlesFailure, getArticlesStart, getArticlesSuccess } from '../slice/article-slice';
import articleService from '../service/articles';

const EditArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const proplar= {title,description,body,tag:'Edit'}
  const dispatch = useDispatch()
  const { slug } = useParams();
  
  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const {data} = await articleService.getArticleDetail(slug);
        console.log(data.article);
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
    getArticles()
  },[slug])
   
  const editer =()=>{
    
  }
   

  return (
    <div className='text-center'>
      <h1 className=''>Edit Article</h1>
      <InputField {...proplar}></InputField>
    </div>
  );
};

export default EditArticle;
