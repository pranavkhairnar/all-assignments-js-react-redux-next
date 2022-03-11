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

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            
            const err = false;

            if(!err) {
                resolve();
            }
            else {
                reject("ERROR, something went wrong");
            }

        }, 2000 )
    });

    
}

createPost({title: "Post-3", body: "This is post three"})
    .then(getPosts)
    .catch(err => console.log(err));
