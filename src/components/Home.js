import React from 'react';
import HomeHeader from './HomeHeader';
import HomeYellowBar from './HomeYellowBar';
import HomeInstruction from './HomeInstruction';
import HomeAboutUs from './HomeAboutUs';
import HomeFundations from './HomeFundations';
import HomeFooter from './HomeFooter';

function Home() {
    return (
        <>
            <HomeHeader/>
            <HomeYellowBar/>
            <HomeInstruction/>
            <HomeAboutUs/>
            <HomeFundations/>
            <HomeFooter/>
        </>
    )
}

export default Home;