import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="Home-section">
      <h1 className="fw-bold display-6">Welcome to Math Magician</h1>
      <article className="fs-5 mt-5">
        <h2>The best way to learn Mathematics is to do Mathematics!!</h2>
        <p className="w-50">Start learning mathematics with our free leassons and discover new career paths</p>
        <div className="d-flex align-items-center gap-3">
          <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('calculator')}>Get Started</button>
          <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => navigate('quote')}>Get Motivated with Quotes</button>
        </div>
      </article>

      <article className="fs-5 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolore
        facilis ratione porro, officia placeat repudiandae vero tempore facere
        quae dolorum voluptate possimus quos sequi incidunt assumenda molestias.
        Odio nesciunt voluptatibus maxime autem nihil, delectus quaerat
        necessitatibus possimus id voluptates enim velit aspernatur error expedita
        neque recusandae odit dolores accusantium illo ea cupiditate voluptatem,
        quae.
      </article>
    </div>
  );
};

export default Home;
