import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import sarah from "../auth/sarah.jpeg"
import "./AboutArtist.css"


export const AboutArtist = () => {
  return (
    <article className="aboutArtist">
      <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Meet the Artist Behind "Feeling Heart"
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Sarah Hart Landolt is an abstract, fluid ink 2D artist who specializes in painting emotions based on data. She engages the public and collects their data of which colors/shapes they associate with an emotion and where they feel in their body. She curiously seeks to externalize our inner landscapes and investigate where there is consensus and diversity in how we experience emotion. Her work has been exhibited in The Browsing Room Gallery, The Gallery at Fort Houston, Lab Canna, and Fieldhouse Jones.
          </p>
          <MDBRow>
            <MDBCol>
              <MDBAvatar
                tag="img"
                src={sarah}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Sarah Hart Landolt</h5>
              <p className="text-uppercase blue-text">Software Developer, Artist, Designer</p>
              <p className="grey-text">
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.facebook.com/sarahhartart/" target='_blank' className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="https://www.instagram.com/sarah.hart.landolt" target='_blank' className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </article>
  );
}

