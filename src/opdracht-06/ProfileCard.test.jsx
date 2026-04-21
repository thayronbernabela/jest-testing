import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    // TODO: Render ProfileCard met name="Piet" en age={30}
    // TODO: Check of tekst "Leeftijd: 30" op het scherm staat
    // Hint: gebruik screen.getByText()
    render(<ProfileCard name="Jan" age={30} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument('leeftijd: 30');
  });

  test('toont bio als die er is', () => {
    // TODO: Render ProfileCard met bio="Ik hou van programmeren"
    // TODO: Check of die tekst op het scherm staat
    render(<ProfileCard bio="ik hou van progameren"  />);
    const heading = screen.getByText("ik hou van progameren")
    expect(heading).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    // TODO: Render ProfileCard ZONDER bio prop
    // TODO: Check of "Geen bio beschikbaar" op het scherm staat
     render(<ProfileCard />);
    const heading = screen.getByText("Geen bio beschikbaar")
    expect(heading).toBeInTheDocument();
  
  })

});