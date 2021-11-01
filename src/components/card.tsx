import React from 'react';

const Card = () => {
  return (
    <div className="App xl:container flex justify-center  p-5">
      <div className="single-content p-4">
        <div className="image">
          <img
            src="https://picsum.photos/250/300?grayscale"
            className="w-full"
            alt="pic"
          />
        </div>
        <div className="details text-center">
          <h3 className="colors.blue">Title One</h3>
          <p>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit
            amet dui.
          </p>
        </div>
      </div>
      <div className="single-content p-4">
        <div className="image">
          <img
            src="https://picsum.photos/250/300?grayscale"
            className="w-full"
            alt="pic"
          />
        </div>
        <div className="details text-center">
          <h3 className="colors.blue">Title Two</h3>
          <p className="text-opacity-0 text-purple-700">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit
            amet dui.
          </p>
        </div>
      </div>
      <div className="single-content p-4">
        <div className="image">
          <img
            src="https://picsum.photos/250/300?grayscale"
            className="w-full"
            alt="pic"
          />
        </div>
        <div className="details text-center">
          <h3 className="colors.blue">Title Three</h3>
          <p>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit
            amet dui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
