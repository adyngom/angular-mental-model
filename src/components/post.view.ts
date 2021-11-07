export const PostView = (post: Post) => {
    return `<article class="post"> 
                <header class="post-header">
                <h2>${post.title}</h2>
                </header>
                <main>
                <p>${post.body}</p>
                </main>
            </article>`;
};