exports.getPosts = (req, res, next) =>{
    res.status(200).json({
        posts:[{
            title:'First Post',
            content:'This is the very first Post!'
        }]
    })
}

exports.createPost = (req, res, next) =>{
    //create post in db
    const title = req.body.title;
    const content  = req.body.content;

    res.status(201).json({
        message:'Post created Successfully',
        post:{
            id: new Date().toISOString(),
            title:title,
            content:content
        }
    })
}
