import axios from 'axios';

export const getGalleryItems = async(search)=>{
    const API_KEY = '33165693-8ffaea86f27c750d6f2d82040';
    const PER_PAGE = 12;
    const searchUrl = `https://pixabay.com/api/?q=${search}page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
    const {data} = await axios.get(searchUrl);
    return data;
}