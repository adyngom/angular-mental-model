interface Animal {
    name?: 'Humanidae' | 'Canidae' | 'Felidae' | 'Carnivora' | 'Piscivora' | 'Cetacea' | 'Aves' | 'Mammalia' | 'Reptilia' | 'Amphibia' | 'Arachnida' | 'Insecta' | 'Arthropoda' | 'Plantae' | 'Fungi' | 'Protozoa' | 'Chromista' | 'Bacteria' | 'Viruses' | 'Plasmids' | 'Eukaryota' | 'Archaea' | 'Euarchaea' | 'Euryarchaea' | 'Euryalialia' | 'Euryale' | 'Euryalea' | 'Euryalea_cinerea' | 'Euryalea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea_cinerea' | 'Euryalea_c
    family?: 'Mammal' | 'Bird' | 'Reptile' | 'Fish' | 'Amphibian' | 'Insect' | 'Arachnid' | 'Mollusc' | 'Crustacean' | 'Invertebrate' | 'Plant';
    isEndangered?: boolean;
    isExtinct?: boolean;
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

        Object.defineProperty(target.prototype, 'type', {
            get: function () {
                return _config.name;
            }
        });

        Object.defineProperty(target.prototype, 'model', {
            value: Object.freeze(_config),
            writable: false,
            enumerable: false,
            configurable: false
        });

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
