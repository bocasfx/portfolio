import colors from '../utils/colors';

let projects = [
  {
    id: 0,
    transition: 'fadeIn',
    active: false,
    'title': 'The Tree Whithin',
    description: 'Series of B&W illustrations for The Tree Within.',
    info: ['Series of B&W illustrations for The Tree Within.'],
    images: [
      '/img/projects/the-tree-within/01.jpg',
      '/img/projects/the-tree-within/02.jpg',
      '/img/projects/the-tree-within/03.jpg',
      '/img/projects/the-tree-within/04.jpg',
      '/img/projects/the-tree-within/05.jpg',
      '/img/projects/the-tree-within/06.jpg',
      '/img/projects/the-tree-within/07.jpg',
      '/img/projects/the-tree-within/08.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 1,
    transition: 'fadeIn',
    active: false,
    'title': 'Non-Violence Festival',
    description: 'Poster proposal for the Non-Violence Festival.',
    info: ['Poster proposal for the Non-Violence Festival.'],
    images: [
      '/img/projects/non-violence-festival/01.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 2,
    transition: 'fadeIn',
    active: false,
    'title': 'The Rambler',
    description: 'Web design proposals for The Rambler.',
    info: ['Web design proposals for The Rambler.'],
    images: [
      '/img/projects/the-rambler/01.jpg',
      '/img/projects/the-rambler/02.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 3,
    transition: 'fadeIn',
    active: false,
    'title': 'Give & Get Network',
    description: 'Logo design for the Give and Get Network of Kitchener-Waterloo.',
    info: ['Logo design for the Give and Get Network of Kitchener-Waterloo.'],
    images: [
      '/img/projects/give-n-get-network/01.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 4,
    transition: 'fadeIn',
    active: false,
    'title': 'Rhino Works',
    description: 'Logo proposal for Rhino Works.',
    info: ['Logo proposal for Rhino Works.'],
    images: [
      '/img/projects/rhino-works/01.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 5,
    transition: 'fadeIn',
    active: false,
    'title': 'Savvy Green',
    description: 'Web design proposal for soap manufacturer Savvy Green.',
    info: ['Web design proposal for soap manufacturer Savvy Green.'],
    images: [
      '/img/projects/savvy-green/01.jpg',
      '/img/projects/savvy-green/02.jpg',
      '/img/projects/savvy-green/03.jpg',
      '/img/projects/savvy-green/04.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'laptop'
  }, {
    id: 6,
    transition: 'fadeIn',
    active: false,
    'title': 'Vital Response',
    description: 'Web design for first aid training company Vital Response.',
    info: ['Web design for first aid training company Vital Response.'],
    images: [
      '/img/projects/vital-response/01.jpg',
      '/img/projects/vital-response/02.jpg',
      '/img/projects/vital-response/03.jpg'
    ],
    'links': [{
      'href': 'http://vitalresponse.ca/',
      'label': 'http://vitalresponse.ca/'
    }],
    'videos': [],
    icon: 'laptop'
  }, {
    id: 7,
    transition: 'fadeIn',
    active: false,
    'title': 'Agfa Deploy',
    description: 'Logo design for Agfa\'s software delivery solution.',
    info: ['Logo design for Agfa\'s, now defunct, software delivery solution for clustered applications'],
    images: [
      '/img/projects/agfa-deploy/01.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 8,
    transition: 'fadeIn',
    active: false,
    'title': 'Bloom',
    description: '3D animation based on computer simulations of natural systems.',
    info: ['3D animation based on computer simulations of natural systems. Created using Processing, Blender and Ableton Live. Licensed under Creative Commons – Attribution Share Alike. Music and animation by Six...'],
    images: [
      '/img/projects/bloom/01.png',
      '/img/projects/bloom/02.png',
      '/img/projects/bloom/03.png'
    ],
    'links': [],
    'videos': [
      'https://player.vimeo.com/video/97927320'
    ],
    icon: 'video-camera'
  }, {
    id: 9,
    transition: 'fadeIn',
    active: false,
    'title': 'Pink Chipotle',
    description: 'My traditional Mexican and Pre-hispanic food blog.',
    info: ['My traditional Mexican and Pre-hispanic food blog.'],
    images: [
      '/img/projects/pink-chipotle/01.jpg'
    ],
    'links': [{
      'href': 'http://pinkchipotle.com/',
      'label': 'http://pinkchipotle.com/'
    }],
    'videos': [],
    icon: 'cutlery'
  }, {
    id: 10,
    transition: 'fadeIn',
    active: false,
    'title': 'The Sofa Kings',
    description: 'The Sofa Kings are the next generation of psychedelic jam music.',
    info: ['The Sofa Kings are the next generation of psychedelic jam music. Taking inspiration from classic Funk and Jazz as well as modern improvisational and jam bands, they weave deceptively fluid bass lines with funky and hypnotic drum beats into atmospheric keys and guitar lines that bubble and simmer with rhythm and melody, until they erupt into a soaring celebration of music!'],
    images: [
      '/img/projects/the-sofa-kings/01.jpg',
      '/img/projects/the-sofa-kings/02.jpg',
      '/img/projects/the-sofa-kings/03.jpg',
      '/img/projects/the-sofa-kings/04.jpg'
    ],
    'links': [{
      'href': 'https://thesofakings.bandcamp.com/',
      'label': 'https://thesofakings.bandcamp.com/'
    }],
    'videos': [],
    icon: 'music'
  }, {
    id: 11,
    transition: 'fadeIn',
    active: false,
    'title': 'Q',
    description: 'Q is a soft MIDI controller.',
    info: ['Q is a soft MIDI controller that uses particle streams and note nodes to generate MIDI messages. When a particle comes in contact with a node it generates a MIDI message depending on the node’s act...'],
    images: [
      '/img/projects/q/01.png'
    ],
    'links': [],
    'videos': [
      'https://player.vimeo.com/video/105199076',
      'https://player.vimeo.com/video/70220681'
    ],
    icon: 'laptop'
  }, {
    id: 12,
    transition: 'fadeIn',
    active: false,
    'title': 'eSpire',
    description: 'Logo design for eSpire.',
    info: ['Logo design for eSpire, an all-in-one eCommerce platform that allows you to sell your goods online. Espire is a Canadian product crafted with love in Waterloo, Ontario.'],
    images: [
      '/img/projects/espire/01.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 13,
    transition: 'fadeIn',
    active: false,
    'title': 'GeeBee Pedals',
    description: 'Miscelaneous design work for GeeBee Pedals.',
    info: ['Miscelaneous design work for GeeBee Pedals.'],
    images: [
      '/img/projects/geebee-pedals-2/01.jpg',
      '/img/projects/geebee-pedals-2/02.jpg',
      '/img/projects/geebee-pedals-2/03.jpg',
      '/img/projects/geebee-pedals-2/04.jpg',
      '/img/projects/geebee-pedals-2/05.jpg',
      '/img/projects/geebee-pedals-2/06.jpg',
      '/img/projects/geebee-pedals-2/07.jpg',
      '/img/projects/geebee-pedals-2/08.jpg',
      '/img/projects/geebee-pedals-2/09.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 14,
    transition: 'fadeIn',
    active: false,
    'title': 'The Sofa Kings',
    description: 'Cover proposal for The Sofa Kings',
    info: ['Cover proposal for The Sofa Kings'],
    images: [
      '/img/projects/the-sofa-kings-2/01.jpg',
      '/img/projects/the-sofa-kings-2/02.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 15,
    transition: 'fadeIn',
    active: false,
    'title': 'Your Time Boutique',
    description: 'Website design for Your Time Boutique.',
    info: ['Inspired by Nature and centuries past Your Time Boutique is an umbrella shop for select traditional handmade products we have come across on our journey to a simpler, wholesome lifestyle.'],
    images: [
      '/img/projects/your-time-boutique/01.jpg',
      '/img/projects/your-time-boutique/02.jpg',
      '/img/projects/your-time-boutique/03.jpg'
    ],
    'links': [{
      'href': 'https://www.yourtimeboutique.com/',
      'label': 'https://www.yourtimeboutique.com/'
    }],
    'videos': [],
    icon: 'laptop'
  }, {
    id: 16,
    transition: 'fadeIn',
    active: false,
    'title': 'MIDIWorm',
    description: 'MidiWorm is yet another soft MIDI controller.',
    info: ['MidiWorm is yet another soft MIDI controller. The worm is composed of 10 nodes. Each node is a MIDI message generator. Whether a message is generated depends on a probability calculated by the node...'],
    images: [
      '/img/projects/midiworm/01.png'
    ],
    'links': [],
    'videos': [
      'https://player.vimeo.com/video/70220903'
    ],
    icon: 'laptop'
  }, {
    id: 17,
    transition: 'fadeIn',
    active: false,
    'title': 'Tape',
    description: 'Four track virtual tape machine.',
    info: ['Tape pretends to be a tribute to the musicians that experimented with tape machines and tape loops in the 50s and 60s. It consists of four tracks where audio loops can be loaded. Each track is comp...'],
    images: [
      '/img/projects/tape/01.jpg',
      '/img/projects/tape/02.png'
    ],
    'links': [],
    'videos': [
      'https://player.vimeo.com/video/116488656'
    ],
    icon: 'laptop'
  }, {
    id: 18,
    transition: 'fadeIn',
    active: false,
    'title': 'Bubbles',
    description: 'Bubbles is a soft MIDI controller.',
    info: ['Bubbles is a soft MIDI controller that receives MIDI messages from other MIDI controlers, e.g. keyboards. When a MIDI message is received a bubble is created based on the parameters of the message. Bu...'],
    images: [
      '/img/projects/bubbles/01.png'
    ],
    'links': [],
    'videos': [
      'https://player.vimeo.com/video/70220869'
    ],
    icon: 'laptop'
  }, {
    id: 19,
    transition: 'fadeIn',
    active: false,
    'title': 'Marvin',
    description: 'Marvin is a three-dimensional image visualization tool.',
    info: ['Marvin is a three-dimensional image visualization and processing tool developed in C++. It utilizes VTK and ITK to render and manipulate the images. It provides a user friendly plugin interface tha...'],
    images: [
      '/img/projects/marvin/01.png'
    ],
    'links': [],
    'videos': [
      'https://player.vimeo.com/video/70109509',
      'https://player.vimeo.com/video/70109442',
      'https://player.vimeo.com/video/70109393',
      'https://player.vimeo.com/video/70108784',
      'https://player.vimeo.com/video/70108783'
    ],
    icon: 'laptop'
  }, {
    id: 20,
    transition: 'fadeIn',
    active: false,
    'title': 'The Vinyl Revival',
    description: 'Poster illustration for The Vinyl Revival.',
    info: ['Poster illustration for The Vinyl Revival.'],
    images: [
      '/img/projects/the-vinyl-revival/01.jpg',
      '/img/projects/the-vinyl-revival/02.jpg',
      '/img/projects/the-vinyl-revival/03.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 21,
    transition: 'fadeIn',
    active: false,
    'title': 'Spanish Solutions',
    description: 'Web design for Toronto based company Spanish Solutions.',
    info: ['Web design for Toronto based company Spanish Solutions.'],
    images: [
      '/img/projects/spanish-solutions/01.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 22,
    transition: 'fadeIn',
    active: false,
    'title': 'Smarter Resources',
    description: 'Logo proposal for Smarter Resources.',
    info: ['Market research consultancy firm offering bespoke, high-quality services to international companies seeking to access the fast-growing Latin American and Hispanic USA markets.',
      'Smarter Resources offers a wide range of services including:',
      'Design and implementation of different methodologies and tech tools to help researchers achieve their research goals. ',
      'Moderation for studies that required strong bilingual skills and / or specialist knowledge. ',
      'Transcription and translation, video subtitling and dubbing.',
      'Video and audio production of ethnography projects, deliverables, and corporate videos.'],
    images: [
      '/img/projects/smarter-resources/01.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 23,
    transition: 'fadeIn',
    active: false,
    'title': 'Druidas',
    description: 'Graphic design for Druidas‘ self titled album.',
    info: ['Graphic design for Druidas‘ self titled album.'],
    images: [
      '/img/projects/druidas/01.jpg',
      '/img/projects/druidas/02.jpg',
      '/img/projects/druidas/03.jpg'
    ],
    'links': [{
      'href': 'https://www.facebook.com/Druidas7/',
      'label': 'https://www.facebook.com/Druidas7/'
    }],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 24,
    transition: 'fadeIn',
    active: false,
    'title': 'GeeBee Pedals',
    description: 'Web design for Geebee Pedals.',
    info: ['Web design for Geebee. Makers of some of the best analog guitar and bass pedals.'],
    images: [
      '/img/projects/geebee-pedals/01.jpg',
      '/img/projects/geebee-pedals/02.jpg',
      '/img/projects/geebee-pedals/03.jpg'
    ],
    'links': [{
      'href': 'http://geebeepedals.com/',
      'label': 'http://geebeepedals.com/'
    }],
    'videos': [],
    icon: 'paint-brush'
  }, {
    id: 25,
    transition: 'fadeIn',
    active: false,
    'title': 'Drone 1',
    description: '3D visual and auditory navigation.',
    info: ['Drone is a 3D web application that allows the user to enjoy visual and auditory experiences by freely navigating within its environment. By getting closer to a three-dimensional body the user enters its aural radio of influence triggering the body’s atmospheric sounds. Each three-dimensional body generates a different sound which is a combination of individual sound loops which try to be representative of the geometry of the body. The body’s individual loops are completely independent of each other and mixed in real-time depending on the three-dimensional position of the user in the environment.'],
    images: [
      '/img/projects/drone/01.png',
      '/img/projects/drone/02.png'
    ],
    'links': [],
    'videos': [
      'https://player.vimeo.com/video/118287841'
    ],
    icon: 'laptop'
  }, {
    id: 26,
    transition: 'fadeIn',
    active: false,
    'title': 'Crane Service Systems',
    description: 'Icon design Crane Service Systems.',
    info: ['Icon design for a mobile application implemented for Crane Service Systems to help them automate their crane inspection and repair workflows.'],
    images: [
      '/img/projects/crane-service-systems/01.jpg',
      '/img/projects/crane-service-systems/02.jpg'
    ],
    'links': [],
    'videos': [],
    icon: 'laptop'
  }, {
    id: 27,
    transition: 'fadeIn',
    active: false,
    'title': 'Drone 2',
    description: 'TBD',
    info: ['TBD'],
    images: [
      '/img/projects/drone-2/01.png'
    ],
    'links': [{
      'href': 'http://sixtycycles.ca:3000/',
      'label': 'http://sixtycycles.ca:3000/'
    }],
    'videos': [],
    icon: 'laptop'
  }, {
    id: 28,
    transition: 'fadeIn',
    active: false,
    'title': 'SixtyCycles EP01',
    description: 'TBD',
    info: ['TBD'],
    images: [],
    'links': [{
      'href': 'https://soundcloud.com/sixtycycles/sets/ep01',
      'label': 'https://soundcloud.com/sixtycycles/sets/ep01'
    }],
    'videos': [],
    icon: 'music'
  }, {
    id: 29,
    transition: 'fadeIn',
    active: false,
    'title': 'Bass Rack',
    description: 'TBD',
    info: ['TBD'],
    images: [
      '/img/projects/bass-rack/01.png'
    ],
    'links': [{
      'href': '/img/projects/bass-rack/bass-rack.skp',
      'label': 'Download Sketchup File'
    }],
    'videos': [],
    icon: 'wrench'
  }
];

const assignColors = (state) => {
  return state.map((project, idx) => {
    let color = colors[idx % colors.length];
    project.color = color;
    return project;
  });
};

export default assignColors(projects);