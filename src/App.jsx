import React from 'react';
import './App.css'
import ProfileCard from '../src/components/ProfileCard';
import headshot from './assets/images/adelaniHeadshot.jpg';

function App() {
  return (
    <div>
      <ProfileCard
        name="Adelani Adeyinka Adelaja"
        picture={headshot}
        bio="Creative UI/UX Designer 🎨 & Front-End web developer 👨‍💻| Millitary Personnel | ReacJs | NextJs | Crafting Human-Centered, Impactful Digital Experiences | Bridging User Needs with Business Success |Kodecamp Alumni 🎓 "
      />
    </div>
  );
}

export default App;

