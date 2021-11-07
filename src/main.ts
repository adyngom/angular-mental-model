import 'reflect-metadata';
import { Container } from 'typedi';

import "./style.css";
import { Posts } from './components/posts.component';

import { render } from "./Utils";

(async function(document) {
    const posts = Container.get(Posts);

    let appPosts = await posts.init();

    render(appPosts, document.getElementById("app"));

})(document);

