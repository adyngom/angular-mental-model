import { PostsService } from "./posts.service";
import { Service, Container } from 'typedi';
import { PostView} from './post.view';

@Service()
export class PostsComponent {
    posts!: Post[];

    constructor(private postsService: PostsService) {
      this.postsService = Container.get(PostsService);
    }

    async init() {
        this.posts = await this.postsService.getPosts();
        return this.renderPosts(this.posts);
    }

    private renderPosts(posts: Post[]): string {
        return `${posts.map(PostView).join("\n")}`; 
    }
}

