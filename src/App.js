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
        name: "Message me on Facebook",
        url: "https://www.facebook.com/profile.php?id=100087142953727",
        icon: "facebook",
      },
      {
        name: "Message me on Discord",
        url: "https://discordapp.com/users/551209559557931043",
        icon: "discord",
      },
      {
        name: "Check out my Marketplace store",
        url: "https://marketplace.secondlife.com/stores/244066",
        icon: "shopping-cart",
      },
      {
        name: "Pay me via CashApp",
        url: "https://cash.app/$KaseyLittlepaws",
        icon: "money-bill",
      }
    ]
  }
  return <div style = {{height:"100%"}}className="bg-pink-50">
    <div className="flex flex-wrap align-items-center justify-content-center padding pt-5">
      <img src="https://i.imgur.com/x44TKRG.png" height="auto" width="15%" alt="Kasey Littlepaws" />
    </div>
    <div className="flex flex-wrap align-items-center justify-content-center">
      <h1>{data.name}</h1>
    </div>
    <div className="flex flex-wrap align-items-center justify-content-center text-center">
      <p>{data.bio} <Emoji symbol="💛" label="yellow-heart" /></p>
    </div>
    <div className="flex flex-column align-items-center justify-items-center w-screen ">
      {data.links.map((link) => <a href ={`${link.url}`}>
      <div className="flex flex-column align-items-center justify-items-center w-screen">
        <Button className="flex m-2 p-4 w-8 p-button-raised p-button-rounded bg-yellow-300 border-none text-800 text-xl font-bold  transition-colors transition-duration-500 lg:w-4 xl:w-4 hover:bg-yellow-400 hover:text-gray-900">
        <i className={`pi pi-${link.icon} flex m-1 p-1`}></i>
          <span className="px-3">{link.name}</span>
        </Button> 
      </div>
      </a>)}
    </div>
  </div>
}

export default App;