import 'reflect-metadata';
import "./style.css";
import Person from '../docs/decorators/custom/species';

(async function (document) {
    let person = new Person("John");
    console.log((person as any).model);
    //person.model.canFly = true;
    console.log((person as any).type);

})(document);

