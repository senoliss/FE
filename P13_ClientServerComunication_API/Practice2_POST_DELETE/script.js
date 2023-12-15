window.onload = () => {
    const url = "https://my-json-server.typicode.com/typicode/demo/posts";
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => {
        return response.json()}
        )
    .then(result => {
        console.log(result);
        const postsContainer = document.getElementById('posts');

        for (let i=0; i< result.length; i++){
        let postContainer = document.createElement('div');
        let postParagraph = document.createElement('span'); 
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'X';
        deleteButton.setAttribute('onclick', `deletePost(${result[i].id})`);
        let updateButton = document.createElement('button');
        updateButton.innerHTML = 'update';
        updateButton.setAttribute('onclick', `updatePost(${result[i].id})`);
        postParagraph.innerHTML = result[i].title;
        postContainer.append(postParagraph);
        postsContainer.append(postContainer);
        postContainer.append(updateButton);
        postContainer.append(deleteButton);
        };
    })
    .catch(error => console.log(error));

    document.getElementById('crate_post_btn').addEventListener('click', () => {
        const postToCreate = {
            title: "new post"
        }
        
        fetch(url + "/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(postToCreate)
        })
        .then(response => {
            return response.json()}
            )
        .then(result => {
            console.log('Post was created successfully');
        })
        .catch(error => console.log(error));
    });
};

populatePosts = (obj) => {
    const posts_div = document.querySelector('#posts');
    
    obj.forEach(post => {
        posts_div.innerHTML += `
        <h2>${post.title}</h2>
        <p>Id of the post: ${post.id}</p>`;
    })
};

function deletePost(id){
    console.log('deleting post with id ' + id);

    const url = "https://my-json-server.typicode.com/typicode/demo/posts";
    fetch(url + "/" + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => {
        return response.json()}
        )
    .then(result => {
        console.log('Post was deleted successfully');
        location.reload();
    })
    .catch(error => console.log(error));
};

function updatePost(id){
    console.log('updating post ' + id);

    const url = "https://my-json-server.typicode.com/typicode/demo/posts";
    
    const postToUpdate = {
        id: id,
        title: "Updated post title " + id
    }
    
    fetch(url + "/" + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postToUpdate)
    })
    .then(response => {
        return response.json()}
        )
    .then(result => {
        console.log(`Post ${id} was updated successfully`);
        location.reload();
    })
    .catch(error => console.log(error));
};