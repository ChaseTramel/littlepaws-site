import "primereact/resources/themes/bootstrap4-light-purple/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";

import Emoji from 'a11y-react-emoji'
import { Button } from 'primereact/button';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap');
</style>
        

function App() {
  const data = {
    name: "Kasey Chase Littlepaws",
    image: "",
    bio: "Scripter, Graphic Designer, & Marketing Consultant",
    links: [
      {
        name: "Message me on SL Facebook",
        url: "https://www.facebook.com/profile.php?id=100087142953727",
        icon: "facebook",
      },
      {
        name: "Message me at Chase#7689 on Discord",
        url: "https://discord.com/channels/@me",
        icon: "discord",
      },
      {
        name: "",
        url: "",
        icon: "",
      },
      {
        name: "",
        url: "",
        icon: "",
      }
    ]
  }
  return <div >
    <div className="flex flex-wrap align-items-center justify-content-center padding pt-5">
      <img src="https://i.imgur.com/x44TKRG.png" height="auto" width="15%" alt="Kasey Littlepaws" />
    </div>
    <div className="flex flex-wrap align-items-center justify-content-center">
      <h1>{data.name}</h1>
    </div>
    <div className="flex flex-wrap align-items-center justify-content-center">
      <p>{data.bio} <Emoji symbol="💛" label="yellow-heart" /></p>
    </div>
    <div className="flex flex-column align-items-center justify-items-center">
      <div className="flex flex-column align-items-center justify-items-center">
        {data.links.map((link) => (<div className= "flex flex-column align-items-center justify-items-center"><a href={link.url}> <Button label={link.name} className="flex w-12 m-3 p-3 p-button-raised p-button-rounded bg-yellow-300 border-none text-xl font-bold transition-colors transition-duration-500 hover:bg-yellow-400 text-white hover:text-gray-900" /> </a></div>
        ))}
      </div>
    </div>
  </div>
}

export default App;