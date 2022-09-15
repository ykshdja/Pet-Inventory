import React from 'react';

class AboutPage extends React.Component{
    componentDidMount(){
      document.title = "About";
    }
    render()
    {
      return(
        <div className="about">
          <h2>About</h2>
          <p className="about">Petland is a privately owned operator and franchisor of pet stores based in Chillicothe, Ohio. Ed Kunzelman founded the company in 1967.
             Petland currently operates 131 stores in the United States, and at least 63 in foreign markets including Canada, Japan, China, Mexico, Brazil and El Salvador.
             The chain is notable for its controversy over documentation from the Humane Society of the United States revealing the purchase of dogs from puppy mills.</p>
             <img className="image-dog-web" src="https://placedog.net/500"  alt="Dog-Place-dog img" align="right" ></img>
             <h3>History</h3>
             <p  className="about">Petland was started in 1967 when opened up his first store in Chillicothe, Ohio. The company originally owned and operated pet stores in Ohio, West Virginia, and Kentucky. In the early 1980s, Petland began expanding its presence in Canada and entered foreign markets.
  
  By 2008, Petland had become a $50 million company with about 230 stores. Petland sells products and services worth about $300,000,000 in the United States, South Africa, Canada, Japan, and Mexico. The 2008 financial crisis and subsequent public relations issues have drastically affected Petland. Petland currently operates 84 domestic locations, down from over 140 stores just a few years ago. The company currently sells birds, fish, small animals, puppies, and kittens.
  
  While Petland has endorsed efforts to raise standards at commercial dog breeding kennels, the company continues to find itself in the middle of animal welfare controversies. In 2018, a delivery vehicle at a Petland store in Florida was searched by authorities. Nearly 2 dozen puppies were seized due to the conditions they were in. The year before, the Henderson, NV Petland store was fined for keeping sick dogs in overcrowded conditions.</p>
  <img className="image-dog-web" src="https://placedog.net/640/480?random" height="400" alt="Dog-Place-dog img"  ></img>
          </div>
      );
    }
    
  }

  export default AboutPage;