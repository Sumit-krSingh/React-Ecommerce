import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
   <Wrapper>
    <div className="container">
        <h3>Trusted by many companies</h3>
        <div className="brand-section-slider">
            <div className="slide">
                <img 
                src="https://w0.peakpx.com/wallpaper/1010/675/HD-wallpaper-stark-industries-iron-man-marvel.jpg" 
                alt="brandlogo" />
            </div>
            <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.pinimg.com/736x/f8/69/50/f869503e0cbae4783008a8361c46f6e8.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.redwolf.in/image/catalog/stickers/superman-classic-logo-sticker-india.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1966.png"
              alt="trusted-brands"
            />
          </div>

        </div>
    </div>

   </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted
