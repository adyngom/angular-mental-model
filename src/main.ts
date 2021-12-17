import 'reflect-metadata';
import "./style.css";
import Person from '../docs/decorators/custom/species';

(async function (document) {
    let person = new Person("John");
})(document);

