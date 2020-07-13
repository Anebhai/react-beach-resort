import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free sharbet',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.',
      },
      {
        icon: <FaBeer />,
        title: 'natures Best Juices',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span key={index}>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
