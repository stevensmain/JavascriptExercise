 getGift = async() => {
    
    const imgUrl = `http://api.giphy.com/v1/gifs/random?api_key=LdJCBTRkYlhxnLQT5A9GmjkghDMcQrpN`;
    const resp = await fetch( imgUrl );
    const { data } = await resp.json();

    const image = data.images.original.url
    const title = data.title

    return {image,title}

}



    