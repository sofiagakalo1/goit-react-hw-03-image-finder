// import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({items}){
    const images = items.map(({id, webformatURL, largeImageURL})=><li key={id} url={webformatURL}>{largeImageURL}</li>)
    return(
        <ul>
        {images}
        </ul>
    )
}

export default ImageGallery;