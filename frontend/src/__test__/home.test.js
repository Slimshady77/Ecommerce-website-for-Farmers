import {render,screen,cleanup} from '@testing-library/react'
import Home from '../Home.js'
test('Should render Home component', ()=>{
   render(<Home/>);
   const homeElement=screen.getAllByTestId('myCarousel');
   expect((homeElement).toBeInTheDocument());
})