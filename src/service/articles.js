import axios from './api'

const articleService ={
    async getArticles(){
        const articles = await axios.get('/articles')
        return articles
    }
}

export default articleService