import { render } from '@testing-library/react';
import react,{Component} from 'react';
import Card from './Card';
const CardList = ({robots}) =>{
const cardcomponent = robots.map((user,i)=>{
    return(
        
<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}></Card>
    );
});

    return(
        
<div>
{cardcomponent}

</div>



    );
}

export default  CardList;

