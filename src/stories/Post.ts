import '../../src/style.css'
export interface PostProps {
    post: Post;
    goToPost: (post: Post) => void;
};

export const createPost = ({ post, goToPost }) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    const postWrapper = document.createElement('article');
    postWrapper.className = 'post';

    const postMarkup =` <header class="post-header">
                            <h2>${post.title}</h2>
                        </header>
                        <main>
                            <p>${post.body}</p>
                        </main>`;

    postWrapper.innerHTML = postMarkup;

    wrapper.appendChild(postWrapper);

    wrapper.addEventListener('click', goToPost(post));
    return wrapper;
};