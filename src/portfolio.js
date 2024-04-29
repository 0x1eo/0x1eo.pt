const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://0x1eo.pt',
  title: 'LA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Leandro Afonso',
  role: 'cybersecurity student and tech enthusiast',
  social: {
    linkedin: 'https://linkedin.com/in/ldagaf',
    github: 'https://github.com/0x1eo',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pinch Zoom for Linux',
    description:
      'Browser pinch zoom in Linux',
    stack: ['Javascript'],
    sourceCode: 'https://github.com/0x1eo/pinch_zoom',
  },
  {
    name: 'Personal Website',
    description:
      'This website :)',
    stack: ['Javascript', 'React', 'CSS', 'Material UI'],
    sourceCode: 'https://github.com/0x1eo/0x1eo.pt'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '0x1eo@protonmail.ch',
}

export { header, about, projects, skills, contact }
