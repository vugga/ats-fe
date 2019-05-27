import React from "react";
import Head from "next/head";
import GitHubButton from "react-github-btn";
import styled from "styled-components";
// import './styles.scss'; // inject scss

// styling with styled components
const GitHubContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50px;
`;

export const AtsScreen = () => {
  return (
    <div>
      {/* Inject CSS files */}
      <Head>
        <link href="/static/css/app.css" rel="stylesheet" />
        <link href="/static/css/moving-stars.css" rel="stylesheet" />
        <link href="/static/css/shooting-stars.css" rel="stylesheet" />
        <link href="/static/css/unlaunched-rocket.css" rel="stylesheet" />
        <link href="/static/css/count.css" rel="stylesheet" />
        <link href="/static/css/moon.css" rel="stylesheet" />
      </Head>
      <GitHubContainer>
        <GitHubButton
          href="https://github.com/vugga/ats-fe"
          data-size="large"
          data-show-count="true"
          aria-label="Star vugga/ats-fe on GitHub"
        >
          Star
        </GitHubButton>
      </GitHubContainer>
      <div className="sky">
        <div className="bg-stars" />
        <div className="bg-stars1" />
        <div className="bg-stars2" />
        <div className="shooting-bg-stars" />
        <span className="shooting-star" />
      </div>
      <div className="moon-wrapper layer" data-depth="0.30">
        <div id="rotation" className="moon" />
      </div>
      <span className="shooting-star pink" />
      <span className="shooting-star blue" />
      <span className="shooting-star yellow" />
      <div>
        <div className="central-body">
          <img src="/static/img/vuga_words_white.svg" width="300px" />
          <br />
          <div className="count-down">
            <div className="count-down-block" id="hoursTens">
              <div className="container-text-outer">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="container-text-outer bottom">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="count-down-content">
                <span>0</span>
              </div>
              <div className="count-down-content bottom">
                <span>0</span>
              </div>
            </div>
            <div className="count-down-block" id="hoursSingles">
              <div className="container-text-outer">
                <div className="shadow-gradient" />
                <span className="container-text">7</span>
              </div>
              <div className="container-text-outer bottom">
                <div className="shadow-gradient" />
                <span className="container-text">7</span>
              </div>
              <div className="count-down-content">
                <span>7</span>
              </div>
              <div className="count-down-content bottom">
                <span>7</span>
              </div>
            </div>
            <div className="count-down-block" id="minutesTens">
              <div className="container-text-outer">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="container-text-outer bottom">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="count-down-content">
                <span>0</span>
              </div>
              <div className="count-down-content bottom">
                <span>0</span>
              </div>
            </div>
            <div className="count-down-block" id="minutesSingles">
              <div className="container-text-outer">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="container-text-outer bottom">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="count-down-content">
                <span>0</span>
              </div>
              <div className="count-down-content bottom">
                <span>0</span>
              </div>
            </div>
            <div className="count-down-block" id="secondsTens">
              <div className="container-text-outer">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="container-text-outer bottom">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="count-down-content">
                <span>0</span>
              </div>
              <div className="count-down-content bottom">
                <span>0</span>
              </div>
            </div>
            <div className="count-down-block" id="secondsSingles">
              <div className="container-text-outer">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="container-text-outer bottom">
                <div className="shadow-gradient" />
                <span className="container-text">0</span>
              </div>
              <div className="count-down-content">
                <span>0</span>
              </div>
              <div className="count-down-content bottom">
                <span>0</span>
              </div>
            </div>
          </div>
          <h1 className="alien-typer-shit glitch"> 🛰 ALIEN TYPER SHIT 📡</h1>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="/static/img/rocket.svg"
            width="40px"
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              id="rotation"
              src="/static/img/earth.svg"
              width="100px"
            />
            <img
              className="object_moon"
              src="/static/img/moon.svg"
              width="80px"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="/static/img/astronaut.svg"
              width="140px"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
        <div className="rocket">
          <div className="rocket-body">
            <div className="body" />
            <div className="fin fin-left" />
            <div className="fin fin-right" />
            <div className="window" />
          </div>
          <div className="exhaust-flame" />
          <ul className="exhaust-fumes">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <ul className="star">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </div>
  );
};
