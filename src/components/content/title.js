import React, { useLayoutEffect } from 'react';
import './title.css';

function Title() {
  const getRandomUniqueNumber = (lo, hi, target) => {
    let number = Math.random() * (hi - lo) + lo;

    while (target && Math.abs(target - number) < 100) {
      number = Math.random() * (hi - lo) + lo;
    }
    return number;
  }

  useLayoutEffect(() => {
    const starContainer = document.getElementById('star-container');
    const width = window.innerWidth;
    const height = window.innerHeight;
    let lastStartPoint = null;
    const animateStar = () => {
      let pos_x = getRandomUniqueNumber(0, width, lastStartPoint);
      let velocity = getRandomUniqueNumber(3, 5, null)
      lastStartPoint = pos_x;
      let pos_y = 0;
      let opacity = 1;
      let animation = null;
      var star = document.createElement("div");
      star.style.left = pos_x;
      star.classList.add('shooting-star');
      starContainer.appendChild(star);

      const translateStar = () => {
        const clearAnimation = () => {
          clearInterval(animation);
          starContainer.removeChild(star);
        }
        if (document.hidden) {
          clearAnimation();
        }
        if (opacity < 0) {
          clearAnimation();
        } else {
          pos_y += velocity;
          pos_x -= velocity;
          star.style.left = pos_x + "px";
          star.style.top = pos_y + "px";
          if (pos_y > height - 300) {
            opacity -= 0.01;
            star.style.opacity = opacity;
          }
        }
      }
      animation = setInterval(translateStar, 5);
    }
    setInterval(animateStar, 300);
    function handleVisibilityChange() {
      console.log(document.hidden);
      if (document.hidden) {
        clearInterval(animateStar);
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange, false);


  })
  return (
    <>
      <div id="star-container" class="shooting-stars" />
      <div className="h4">Hi There! My name is Annie and</div>
      <div className="h1">I'm a developer</div>
      <div className="h4">Fully Full-Stack</div>
      <div className="h4">making ideas come to life from design to implemention</div>
    </>
  );
}

export default Title;