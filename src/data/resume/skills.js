// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'mySQL',
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Typescript',
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    category: ['Languages'],
  },
  {
    title: 'Matplotlib',
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
