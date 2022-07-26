import React from 'react'
import "./ImgCarousel.css"
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from "react-bootstrap";

import eceImg1 from "../../resources/images/departmental image/ist_place_in_project.jpg_backup";
import eceImg2 from "../../resources/images/departmental image/ece_dept.jpg";
import eceImg3 from "../../resources/images/departmental image/cse_dept.jpg";
import eceImg4 from "../../resources/images/departmental image/001.jpg_backup";


export default function ImgCarousel() {
  return <div className="imgCarousel">
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            src={eceImg1}
            className={'d-block w-100'}
            alt={''}
          />
          <Carousel.Caption>
            <p>Receiving prize from the honourable president</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={eceImg2}
            alt={''}
            className={'d-block w-100'}
          />
          <Carousel.Caption>
            <p>Students are working in the electronics lab</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={eceImg3}
            alt={''}
            className={'d-block w-100'}
          />
          <Carousel.Caption>
          <p>Students are working in the computer lab</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={eceImg4}
            alt={''}
            className={'d-block w-100'}
          />
          <Carousel.Caption>
          <p>Winner of Step Skill Competition 2017 from IST</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
}
