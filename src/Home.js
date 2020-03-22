import React, { Component } from "react";
import coffee from './assets/pink.coffee.png';
import donut from './assets/donut.stack.png';
import drink from './assets/dunkin.coffee.png';
import hot from './assets/dunkin.hot.coffee.png';
import sandwich from './assets/dunkin.sandwich.png';
import box from './assets/donunt2.png';
import map from './assets/dunkin.map.png';

import styled, {css} from 'styled-components'

const Button = styled.button`
background: ${props => props.primary ? "#df1973" : "white"};
color: ${props => props.primary ? "white" : "#df1973"};

  font-size: 15px;
  font-weight: bolder;
  height:50px;
  width: 200px;
  border-radius: 15px;
  &:hover {
    text-decoration: underline;
  } 
`
const Div = styled.div`
background: ${props => props.primary ? "#df1973" : "#FE7902"};

      width: 1600px;
      margin: 40px auto 0 auto;
      padding: 20px 50px;
      display: flex;
      height: 300px;
      position: absolute;
     
`

class Home extends Component{
    render(){
        return(
        
            <Div primary className= "column-layout">
                <div className="donut-stack">
                <img src={donut} alt="donut.stack" />
                </div>
                <div className="home-text">
                    <p>
                 <span> SOMETHING FRESH IS</span>
                <span>ALWAYS BREWIN' HERE</span>
                </p>
                <div className="menu-button">
                    <span><Button>VIEW MENU</Button></span>
                </div>
                </div>
                <div className="pink-coffee">
            <img src={coffee} alt="pink.coffee" />
            </div>
            
            <div className="home-page">
            <p>
                <span>SIPPING IS BELIEVING</span>
                <span1>HANDCRAFTED ESPRESSO BEVERAGES ></span1>
                <span2>FRESHLY MADE</span2>
                <span3>ALL-DAY BREAKFAST</span3>
                <span4>SANDWICHES ></span4>
                <span5>DUNKIN' CLASSIC </span5>
                <span6>HOT COFFEE ></span6>
                </p>
                <div className="food-items">
                <img src={drink} alt="dunkin.coffee" />
                <img src={sandwich} alt="dunkin.sandwich" />
                <img src={hot} alt="dunkin.hot.coffee" />
                </div>
                </div>
                <Div className="column-layout1">
                    <p>
                        <h2>MAKING PEOPLE SMILE</h2>
                        <h2>SINCE 1950</h2>
                        <span> Our delicious donuts come in a variety of flavors and are</span>
                        <span>free of artificial dyes, so there's a favorite for everyone.</span>
                    </p>
                    <div className="donut-box">
            <img src={box} alt="donut-box" />
            </div>
            </Div>
            <div className="map">
                
                    <h1>COME VISIT</h1>
                    <h2>Find a Dunkin' Near You</h2>
                    <p>
                    <span>CLOSEST DUNKIN'</span>
                    <span>670 Brandon Ave</span>
                    <span>Ronoake, VA 24015</span>
                    <span> Today: 5:00am - 10:00pm</span>
                    <Button primary>VIEW ALL LOCATIONS</Button>
                </p>
                <div className="map-pic">
                <img src={map} alt="map" />
                </div>
            </div>
                
                </Div> 
        );
    }
}

export default Home;