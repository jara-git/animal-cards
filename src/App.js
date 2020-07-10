import React from 'react';
import './App.css';
import { generate as id } from 'shortid';
import Card from './components/Card.jsx';


function App() {
  const cards = [
    {
    id: id(),
    title: "Card 1",
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Eurasian_wolf.JPG',
    author: 'Jara',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'
        ],
    views: 23,
    description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
    id: id(),
    title: "Card 2",
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Eurasian_wolf.JPG',
    author: 'jara',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'
        ],
    views: 23,
    description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
    id: id(),
    title: "Card 3",
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Eurasian_wolf.JPG',
    author: 'jara',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'
        ],
    views: 23,
    description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    }
]
  return (
    <div className= 'App'>
      {
        cards.map(card => (
          <Card 
          author = {card.author}
          title = {card.title}
          date = {card.date}
          tags = {card.tags}
          views = {card.views}
          img = {card.image}
          key = {card.id}
          >
          {card.description}
          </Card>
        ))

    }

      
    </div>
  );
}

export default App;
