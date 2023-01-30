import axios from 'axios';

const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params:{
        key:'33165693-8ffaea86f27c750d6f2d82040',
        image_type: 'photo',
        orientation: 'horizontal',
        _limit: 12,
    }
})

export const getGalleryItems = async(q, page=1, per_page)=>{
    const {data} = await instance.get('/',
    {params:{
        q,
        page,
        per_page,
    }}
    );
    return data;
}