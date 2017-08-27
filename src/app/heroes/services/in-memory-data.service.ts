import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  public createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Beast',
        realname: 'Henry "Hank" P. McCoy',
        image: './assets/img/beast.jpg',
        imagedetail: './assets/img/beast__detail.jpg',
        powers: 'The Beast possesses superhuman strength, agility, endurance, and speed, despite his bulk. '
          + 'He possesses the agility of a great ape and the acrobatic prowess of an accomplished circus aerialist. '
          + 'His physiology is durable enough to allow'
      }, {
        id: 2,
        name: 'Cyclops',
        realname: 'Scott Summers',
        image: './assets/img/cyclops.jpg',
        imagedetail: './assets/img/cyclops__detail.jpg',
        powers: 'Cyclops possesses the mutant ability to project a beam of heatless '
        + 'ruby-colored concussive force from his eyes, '
        + 'which act as inter-dimensional apertures between this universe and another.'
        + 'Cyclops\' body constantly absorbs ambient energy, such as sunlight, from'
      }, {
        id: 3,
        name: 'Jubilee',
        realname: ' Jubilation Lee',
        image: './assets/img/jubilee.jpg',
        imagedetail: './assets/img/jubilee__detail.jpg',
        powers: 'Jubilee once could generate multi-colored globules of energy plasma she calls "fireworks." '
        + 'She could vary their power and intensity, from a '
        + 'multitude of sparkles capable of temporarily blinding others to a powerful detonation capable of much'
      }, {
        id: 4,
        name: 'Rogue',
        realname: 'Anna Marie',
        image: './assets/img/rogue.jpg',
        imagedetail: './assets/img/rogue__detail.jpg',
        powers: 'Rogue is a mutant who formerly possessed the ability to absorb the memories, '
        + 'abilities, personality, and outward physical characteristics of other beings through skin-to-skin contact. '
        + 'Such transfers lasted for 60 times longer than the contact time, with'
      }, {
        id: 5,
        name: 'Gambit',
        realname: 'Remy Etienne LeBeau',
        image: './assets/img/gambit.jpg',
        imagedetail: './assets/img/gambit__detail.jpg',
        powers: 'Gambit has the ability to mentally create, control, and manipulate pure kinetic energy to his desire. '
        + 'He is also incredibly knowledgeable and skilled in card-throwing, '
        + 'hand-to-hand combat, and the use of a bō staff'
      }, {
        id: 6,
        name: 'Storm',
        realname: 'Ororo Monroe',
        image: './assets/img/storm.jpg',
        imagedetail: './assets/img/storm__detail.jpg',
        powers: 'Storm is one of the most powerful mutants on Earth and has demonstrated a plethora of abilities, '
        + 'most of which are facets of her power to manipulate the weather. '
        + 'Storm possesses the psionic ability to control all forms of weather over vast areas. '
        + 'She has been able to control both Earthly and extraterrestrial ecosystems'
      }, {
        id: 7,
        name: 'Wolverine',
        realname: 'James Howlett',
        image: './assets/img/wolverine.jpg',
        imagedetail: './assets/img/wolverine__detail.jpg',
        powers: 'Wolverine is a mutant who possesses the ability to regenerate damaged or destroyed areas '
        + 'of his cellular structure at a rate far greater than that of an ordinary human. '
        + 'The speed at which this healing factor works varies in direct proportion with the severity'
      }, {
        id: 8,
        name: 'Jean Grey',
        realname: 'Jean Grey-Summers',
        image: './assets/img/jean-grey.jpg',
        imagedetail: './assets/img/jean-grey__detail.jpg',
        powers: 'Jean Grey possessed telepathic powers enabling her to read minds, '
        + 'project her thoughts into the minds of others, initiate astral travel, '
        + 'and mentally stun opponents with pure psionic force, among other talents. She also possessed telekinesis'
      }, {
        id: 9,
        name: 'Colossus',
        realname: 'Piotr Nikolaievitch Rasputin',
        image: './assets/img/colossus.jpg',
        imagedetail: './assets/img/colossus__detail.jpg',
        powers: 'Colossus can transform his body tissue into an organic, '
        + 'steel-like substance that grants him superhuman strength enabling him to lift/press up to 75 tons '
        + 'and makes him impervious to most injury. His armored form can withstand ballistic'
      }
    ];
    return { heroes };
  }
}
