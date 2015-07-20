module.exports = [
  {
    displayName: 'science',
    content: 'The study of science content, the scientific method, and social science.'
  },
  {
    displayName: 'physical science',
    content: 'A branch of science that studies non-living systems.',
    meta: ['science']
  },
  {
    displayName: 'chemistry',
    content: 'The study of the composition, structure, and change of matter.',
    meta: ['physical science', 'science']
  },
  {
    displayName: 'physics',
    content: 'The study of matter and its motion through space and time.',
    meta: ['physical science', 'science']
  },
  {
    displayName: 'earth science',
    content: 'The study of all fields of science dealing with the Earth.',
    meta: ['physical science', 'science']
  },
  {
    displayName: 'space science',
    content: 'The study of stars, galaxies, planets, moon, asteroids, comets, and nebulae.',
    tags: ['astronomy'],
    meta: ['physical science', 'science']
  },
  {
    displayName: 'life science',
    content: 'A branch of science that studies living organisms.',
    meta: ['science']
  },
  {
    displayName: 'biology',
    content: 'The study of life and living organsisms, including their structure, function, growth, evolution, distribution, and taxonomy.',
    meta: ['life science', 'science']
  },
  {
    displayName: 'medicine',
    content: 'An applied science, that studies diagnosing, treating, and preventing disease.',
    meta: ['applied science', 'life science', 'science']
  },
  {
    displayName: 'applied science',
    content: 'A branch of science that studies the application of scientific knowledge.',
    tags: ['application of science'],
    meta: ['science']
  },
  {
    displayName: 'engineering',
    content: 'The application of scientific, economic, social and practical knowledge in order to invent, design, build, maintain, and research.',
    meta: ['applied science', 'science']
  },
  {
    displayName: 'technology',
    content: 'The study of the interdependence of science and technology.',
    meta: ['applied science', 'science']
  },
  {
    displayName: 'computer science',
    tags: ['coding', 'programming'],
    content: 'The scientific and practical approach to computation and its applications.',
    meta: ['applied science', 'science']
  }
]
