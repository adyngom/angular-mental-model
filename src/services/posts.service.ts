import HttpClient  from "../Http/http-client";
import { Service, Container } from "typedi";

@Service({ global: true})  
export class PostsService {
    constructor(private readonly http: HttpClient) {
        this.http = Container.get(HttpClient);
    }

    async getPosts() {
        return await this.http.get("http://jsonplaceholder.typicode.com/posts");
    }
}

