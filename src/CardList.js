import { render } from '@testing-library/react';
import react, { Component } from 'react';
import Card from './Card';

// we have to do destructuring to be able to use what the function recives  ======> const CardList = ({robots}) =>{
const CardList = ({ robots }) => {
    //     mapping around the array using map gets us an index for the array and a object we name the object user
    const cardcomponent = robots.map((user, i) => {
        //inside map we have to return something to be able to map around we return a component that hold each user data 
        return (
            // writing with {robots[i]} inside the brackets {} we type js and not jsx
            <Card key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            ></Card>
        );
    }); 

    return (

        <div>

            {cardcomponent}

        </div>



    );
}

export default CardList;

