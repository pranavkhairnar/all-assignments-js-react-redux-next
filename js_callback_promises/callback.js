const posts = [
    {
        title: "Post-1",
        body: "This is post one"
    },
    {
        title: "Post-2",
        body: "This is post two"
    }
];

function getPosts() {
    setTimeout( () => {
        let output = '';
        posts.forEach( (post) => {
            output += `<li> ${post.title} -> ${post.body} </li>`;
        } );
        document.body.innerHTML = output;
    }, 3000);
}

function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post);
        callback();
    }, 2000 )
}


// getPosts();

createPost({title: "Post-3", body: "This is post three"}, getPosts);

