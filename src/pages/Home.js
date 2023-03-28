import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="Home-section">
      <h1 className="fw-bold display-6">Welcome to Math Magician</h1>
      <article className="fs-5 mt-3 mt-sm-3 mt-md-5 mt-lg-5">
        <h2>The best way to learn Mathematics is to do Mathematics!!</h2>
        <p className="w-100 w-sm-100 w-md-50">Start learning mathematics with our free leassons and discover new career paths</p>
        <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row align-items-center gap-3">
          <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('calculator')}>Get Started</button>
          <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => navigate('quote')}>Get Motivated with Quotes</button>
        </div>
      </article>

      <article className="fs-5 mt-4 d-none d-sm-none d-md-block d-lg-block">
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
