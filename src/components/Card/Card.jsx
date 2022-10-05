import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import whats from '../../assets/images/whatsapp.png'
import "../../assets/styles/cards/cards.css"
// <div className='card'>
//     <img className='championImage' src={props.obj.imagemDoHero} alt="foto do campeão" />
//     <p className='championName stats'>Campeão: {props.obj.hero}</p>
//     <p className='championClass stats'>Classe: {props.obj.classe}</p>
//     <p className='championPrice stats'>preço: {props.obj.preco}</p>
//     <p className='championSkills stats'>Skills: {props.obj.skillUm}, {props.obj.skillDois} </p>
//     <p className='championSkills stats'>Skill passiva: {props.obj.skillPassiva}</p>
// </div>

export default function MultiActionAreaCard(props) {

  function redirectTime() {
    window.location = "https://wa.me/21983589756"
  }

  return (
    <>
      <div class="wrapper">
        <div class="overviewInfo">
          <div class="actions">
            <div class="backbutton ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
            </div>
          </div>
        </div>
        <img className='championImage' src={props.obj.foto  } alt="foto do campeão" />
        <div class="productSpecifications">
          <h1> Dual Sense </h1>
          <p> DualSense also adds a build-in microphone array, which will enable players to easily chat with friends without a headset... </p>

          <div class="productFeatures">
            <div class="feature">
              <div class="featureIcon">
              </div>
              <div class="featureText">
                <p> <strong>Futuristic</strong></p>
                <p>Design</p>
              </div>
            </div>
            <div class="feature">
              <div class="featureIcon">
              </div>
              <div class="featureText">
                <p> <strong>Built-in</strong></p>
                <p>Microphone</p>
              </div>
            </div>
            <div class="feature">
              <div class="featureIcon">
              </div>
              <div class="featureText">
                <p> <strong>Haptic</strong></p>
                <p>Feedback</p>
              </div>
            </div>
            <div class="feature">
              <div class="featureIcon">
              </div>
              <div class="featureText">
                <p> <strong>Fast charge</strong></p>
                <p>USB-C port</p>
              </div>
            </div>
          </div>

          <div class="checkoutButton">
            <div class="priceTag">
              <span>$</span>50
            </div>
            <button class="preorder">
              <p>Preorder</p>
              <div class="buttonaction">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );

}