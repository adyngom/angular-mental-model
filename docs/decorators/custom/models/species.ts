export interface commonBehavior {
    isDomestic?: boolean;
    isWild?: boolean;
    isPredator?: boolean;
    isPrey?: boolean;
    isHerbivore?: boolean;
    isCarnivore?: boolean;
    isOmnivore?: boolean;
    isApexPredator?: boolean;
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
}

export interface classification extends commonBehavior {
    kingdom: 'Animalia';
    phylum: 'Chordata' | 'Vertabrea';
    class: 'Mammalia' | 'Aves' | 'Reptilia' | 'Amphibia';
    order: 'Carnivora' | 'Herbivora' | 'Omnivora';
    family: 'Canidae' | 'Hominidae' | 'Aves' | 'Reptilia' | 'Amphibia';
    genus: 'Canis' | 'Felidae' | 'Crocodilia' | 'Aves';
    species: 'Canis lupus' | 'Felis catus' | 'Crocodylus porosus' | 'Aves';
}

export const Canine: classification = {
    class: 'Mammalia',
    phylum: 'Chordata',
    kingdom: 'Animalia',
    order: 'Carnivora',
    family: 'Canidae',
    genus: 'Canis',
    species: 'Canis lupus'
}

export interface Feline extends commonBehavior {
    phylum: 'Chordata';
    kingdom: 'Animalia';
    order: 'Carnivora';
    family: 'Felidae';
    genus: 'Felis';
    species: 'Felis catus';
}

export interface Ape extends commonBehavior {
    phylum: 'Chordata';
    kingdom: 'Animalia';
    order: 'Primates';
    family: 'Hominidae';
    genus: 'Hominoidea';
    species: 'Hominidae';
}

export interface Ursidae extends commonBehavior {
    phylum: 'Chordata';
    kingdom: 'Animalia';
    order: 'Omnivora';
    family: 'Ursidae';
    genus: 'Ursus';
    species: 'Ursus arctos';
}









