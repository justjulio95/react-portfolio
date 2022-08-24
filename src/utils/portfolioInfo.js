import homebrew from '../images/homebrew.png'
import readITready from '../images/readITready.png'
import budget_tracker from '../images/budget_tracker.png'
import musicfind from '../images/musicfind.png'
import weather_dashboard from '../images/weather-dashboard.png'

const portfolioInfo = [
  {
    image: homebrew,
    link: 'https://radiant-thicket-52137.herokuapp.com/',
    github: 'https://github.com/elfsvet/homebrew',
    title: 'Homebrew',
    summary: 'An all-in-one Dungeons & Dragons applications where users can create an account and proceed to creating their own custom characters, free from rules or restrictions, and share those characters with friends online.',
    tech: 'MERN SPA'
  },
  {
    image: readITready,
    link: 'https://fast-island-78974.herokuapp.com/',
    github: 'https://github.com/justjulio95/read-IT-ready',
    title: 'Read-IT-Ready',
    summary: 'This is essentially a reddit/Stack Overflow clone. The concept was to allow users to be able to post any and all questions that they may have regarding programming. Primarily targeted at beginners in the field, the application allows for users to create an account and then create posts of their own and comment on others',
    tech: 'MongoDB'
  },
  {
    image: budget_tracker,
    link: 'https://salty-mesa-13745.herokuapp.com/',
    github: 'https://github.com/justjulio95/budget-tracker',
    title: 'Budget Tracker',
    summary: 'This is my first Progressive Web Application that allows any user to manage their income and spending habits. No access to the internet? No worries, note whatever you need to note and the application will worry about making sure your info is safe and secure for when you do get internet connection back.',
    tech: 'JavaScript, Node.JS, MongoDB'
  },
  {
    image: musicfind,
    link: 'https://justjulio95.github.io/music-find/',
    github: 'https://github.com/justjulio95/music-find',
    title: 'MusicFind',
    summary: 'This application was built with music lovers in mind - particularly those who may have just found their next music obsession. MusicFind provides a spot where users can search up an artist, a summary is provided along with the artists top 3 albums, and a link to Ticketmaster to see if the artist is coming to a venue near you!',
    tech: 'JavaScript, jQuery, Bulma, RESTful APIs from LastFM and Ticketmaster'
  },
  {
    image: weather_dashboard,
    link: 'https://justjulio95.github.io/weather-dashboard/',
    github: 'https://github.com/justjulio95/weather-dashboard',
    title: 'Weather Dashboard',
    summary: 'The Weather Dashboard application allows for users to search up any city in the world and get a brief weather summary for the day as well as the following 5 days.',
    tech: 'JavaScript'
  }
]

export default portfolioInfo;