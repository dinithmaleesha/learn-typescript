// ---------------
// interfaces
// ---------------
interface Author {
    name: string,
    avatar: string
}
const authorOne: Author = {name: 'Dinith', avatar: 'img.png'}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}
const newPost: Post = {
    title: 'First post',
    body: 'body',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne,
}

// ---------------
// as function argument types
// ---------------
function creatPost(post: Post): void {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
creatPost(newPost)



// ---------------
// with arrays
// ---------------
let posts: Post[] = []
posts.push(newPost)