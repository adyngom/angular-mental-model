# A beginner's guide to using TypeScript and decorators - Understanding Angular
Angular has full typescript support and even though you could technically write your entire app with only JavaScript, you will be missing out a lot if you do not take full advantage of a strongly typed language. 

Now I don't know about you but I personally only got exposed to decorators when Angular introduced it as part of the core framework, so for the most part I just rolled with it and learned as I went. 

I highly advise against that though and that's why in this article we will focus on getting a solid understanding of what they are by creating a few and look at the high level how there are spread and used within Angular.

## The what and why of decorators
Per the Typescript documentation:

"Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members. "

In simpler terms , you can think of decorators as way to make the intention of the code you attach it to a bit more explicit. By providing that intent and having it clearly marked as a certain type, additional capabilities or restrictions will be attached without having to explicitly make those changes inside the element using the decorator. 

If it is still not clear, the different types of decorators and some relevant examples in building each type will probably help you in getting a good grasp of the concept

## Class Decorators
Let's first look at class decorators.  They allow us to modify the behavior of a class and its members. More specifically it targets the constructor of a class and can be used  to add or remove properties, modify method calls or replace class definitions.

Let's look at an example of a custom class decorator to help us in our journey to understanding the concept.

First let's imagine that we need to create an application that will allow us to create different objects of Animal species.

Let's first create an Animal interface:

```typescript class:"lineNo"
interface Animal {
    name?: string;
    family?: string;
    isEndangered?: boolean;
    isExtinct?: boolean;
    isMammal?: boolean;
    isReptile?: boolean;
    isAmphibian?: boolean;
    isBird?: boolean;
    isFish?: boolean;
    isInsect?: boolean;
    isArthropod?: boolean;
    isMollusk?: boolean;
    isCrustacean?: boolean;
    isInvertebrate?: boolean;
    isVertebrate?: boolean;
    hasHorns?: boolean;
    hasTail?: boolean;
    hasLegs?: boolean;
    hasWings?: boolean;
    canFly?: boolean;
    canSwim?: boolean;
    canWalk?: boolean;
    canClimb?: boolean;
};
```

Let's also create a `Species` config object that will be used to create the Animal objects.

```typescript
const SpeciesConfig: Animal = {
    name: undefined,
    isEndangered: undefined,
    isExtinct: undefined,
    isMammal: undefined,
    isReptile: undefined,
    isAmphibian: undefined,
    isBird: undefined,
    isFish: undefined,
    isInsect: undefined,
    isArthropod: undefined,
    isMollusk: undefined,
    isCrustacean: undefined,
    isInvertebrate: undefined,
    isVertebrate: undefined,
    hasHorns: undefined,
    hasTail: undefined,
    hasLegs: undefined,
    hasWings: undefined,
    canFly: undefined,
    canSwim: undefined,
    canWalk: undefined,
    canClimb: undefined
};
```
Now let's create a function that we will use as a decorator to add metadata to a class definition.

```typescript
function Species(config: Animal) {
    const _config = { ...SpeciesConfig, ...config };
    console.table(_config);
    if (!_config.name) {
        throw new Error('Species name is required');
    }
}
```
The `Species` function will take in an `Animal` typed config object. We take in the passed config object and merge it with the default config and make sure that the name is required.

To see this at work let create a `Person` class with a pretty simple constructor.

```typescript
class Person {
    firstName!: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}
```