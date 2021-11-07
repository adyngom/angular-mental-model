import { PostsService } from "../services/posts.service";
import { Service, Container } from 'typedi';

@Service({ global: true })
export class Posts {
    posts!: Post[];

    constructor(private postsService: PostsService) {
      this.postsService = Container.get(PostsService);
    }

    async init() {
        this.posts = await this.postsService.getPosts();
        return this.renderPosts(this.posts);
    }

    private renderPosts(posts: Post[]): string {
        return `${posts
        .map((post: Post) => {
            return `
              <article class="post"> 
                <header class="post-header">
                  <h2>${post.title}</h2>
                </header>
                <main>
                  <p>${post.body}</p>
                </main>
              </article>`;
        })
        .join("\n")
      }` 
    }
}

