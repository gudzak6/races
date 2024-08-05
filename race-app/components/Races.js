import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import race1 from '../assets/race1.jpg';
import race2 from '../assets/race2.jpg';
import race3 from '../assets/race3.jpg';

const races = [
  { name: 'Marathon', place: 'New York', people: 5000, image: race1 },
  { name: 'Half Marathon', place: 'Boston', people: 3000, image: race2 },
  { name: '5K Run', place: 'San Francisco', people: 2000, image: race3 },
];

const Races = () => {
  return (
    <div>
      <h1>Races</h1>
      <Carousel>
        {races.map((race, index) => (
          <div key={index}>
            <img src={race.image} alt={race.name} />
            <p className="legend">
              {race.name} - {race.place} ({race.people} people signed up)
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Races;
