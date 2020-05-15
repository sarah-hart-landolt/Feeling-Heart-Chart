import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import "./Login.css"



export const CarouselPage = () => {
  return (
    <>
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="testing"
              src="https://images.squarespace-cdn.com/content/v1/53d8799de4b0873b56402a1e/1556572586641-69XORV3GFONOVG2HH1G7/ke17ZwdGBToddI8pDm48kLIj3bb_uLOihttx7hjsPSV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lqfkVpRp1g_2L-WsTQRP4IUeQvxhQLxDj0GQzUQT21mzi2feheXFTkax-QWHoTYtA/lonely+1.jpeg?format=1000w"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Step #1</h3>
            <p>Create a New Chart, choose your a painting per emotion.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="testing"
              src="https://images.squarespace-cdn.com/content/v1/53d8799de4b0873b56402a1e/1556304745458-HGQN1LRC35GFTKSV9553/ke17ZwdGBToddI8pDm48kI80qm1VP3MotkgZsPbKwGt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pTKqSDRwmMK43IUI3HojJUVge8BrwvPCY77xcyf6fWsuoUppc97ts30cxpUZSwHZA/hopeful+2.jpeg?format=1500w"
              alt="Second slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Step #2</h3>
            <p>Save your newly created chart to your account.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="testing"
              src="https://images.squarespace-cdn.com/content/v1/53d8799de4b0873b56402a1e/1579662656968-55MNXYR9D3WNPYILVXZ3/ke17ZwdGBToddI8pDm48kEqrFDBYgmHfEuR9EsYWcjt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hGaawTDWlunVGEFKwsEdnGj562O3wwokqdtHg-YD7YJmqM2NsdblZWRQAHWB2JHBw/courage+1.jpeg?format=1500w"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Step #3</h3>
            <p>Add to Cart, checkout and your chart will be shipped as soon as printed.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </>
  );
}

