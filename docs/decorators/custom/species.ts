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

function Species(config: Animal) {
    const _config = { ...SpeciesConfig, ...config };
    console.table(_config);
    if (!_config.name) {
        throw new Error('Species name is required');
    }
    return function (target: any) {
        console.log(`Here is the ${_config.name} species class definition: \n\n${target}`);
    }
}

@Species({
    name: 'Human',
    family: 'Hominidae'
})
class Person {
    firstName!: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

export default Person;
