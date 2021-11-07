import 'reflect-metadata';
import { Container } from 'typedi';
import { PostsComponent } from './components/Posts/posts.component';
import { render } from "./Utils";
import "./style.css";

(async function(document) {
    const posts = Container.get(PostsComponent);

    let appPosts = await posts.init();

    render(appPosts, document.getElementById("app"));

})(document);

