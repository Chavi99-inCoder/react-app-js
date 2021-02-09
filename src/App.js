import "./App.css";
import React, { useState, useEffect} from "react";
import Timer from "./components/Timer";
import Icon from "./components/Icon";
import { IOSSwitch } from "./Switch";
import { BrowserRouter } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination]);
function App() {
  const [toggle, setToggle] = useState(false);
  const [screen, setScreen] = useState("l");
  const [border, setBorder] = useState("50%");
  const [slide, setSlide] = useState(1);
  const [notification, setNotification] = useState("./Images/notification.png");
  const [settings, setSettings] = useState("./Images/settings.png");
  const [display, setDisplay] = useState("none");

  function swap() {
      return (
        <Swiper
          key={slide}
          className="swiper"
          id="swipe"
          spaceBetween={100}
          slidesPerView={1}
          onSlideChange={(swiper) =>
            swiper.activeIndex == 0 ? setScreen("l") : setScreen("r")
          }
          onSwiper={(swiper) => swiper.slideTo(0, 1000)}
        >
          <SwiperSlide>
            <div className="app__main__middle__left">
              <div className="icons__top">
                <div className="icons__top__left">
                  <Icon
                    name={app[0].name}
                    image={app[0].image}
                    border={border}
                    link={app[0].link}
                  />
                  <Icon
                    name={app[1].name}
                    image={app[1].image}
                    border={border}
                    link={app[1].link}
                  />
                </div>
                <div className="icons__top__right">
                  <Icon
                    name={app[2].name}
                    image={app[2].image}
                    border={border}
                    link={app[2].link}
                  />
                  <Icon
                    name={app[3].name}
                    image={app[3].image}
                    border={border}
                    link={app[3].link}
                  />
                </div>
              </div>
              <div className="icons__bottom">
                <div className="icons__bottom__left">
                  <Icon
                    name={app[4].name}
                    image={app[4].image}
                    border={border}
                    link={app[4].link}
                  />
                  <Icon
                    name={app[5].name}
                    image={app[5].image}
                    border={border}
                    link={app[5].link}
                  />
                </div>
                <div className="icons__bottom__right">
                  <Icon
                    name={app[6].name}
                    image={app[6].image}
                    border={border}
                    link={app[6].link}
                  />
                  <Icon
                    name={app[7].name}
                    image={app[7].image}
                    border={border}
                    link={app[7].link}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="app__main__middle__right">
              <div className="icons__top">
                <div className="icons__top__left">
                  <Icon
                    name={app[8].name}
                    image={app[8].image}
                    border={border}
                    link={app[8].link}
                  />
                  <Icon
                    name={app[9].name}
                    image={app[9].image}
                    border={border}
                    link={app[9].link}
                  />
                </div>
                <div className="icons__top__right">
                  <Icon
                    name={app[10].name}
                    image={app[10].image}
                    border={border}
                    link={app[10].link}
                  />
                  <Icon
                    name={app[11].name}
                    image={app[11].image}
                    border={border}
                    link={app[11].link}
                  />
                </div>
              </div>
              <div className="icons__bottom">
                <div className="icons__bottom__left">
                  <Icon
                    name={app[12].name}
                    image={app[12].image}
                    border={border}
                    link={app[12].link}
                  />
                  <Icon
                    name={app[13].name}
                    image={app[13].image}
                    border={border}
                    link={app[13].link}
                  />
                </div>
                <div className="icons__bottom__right">
                  <Icon
                    name={app[14].name}
                    image={app[14].image}
                    border={border}
                    link={app[14].link}
                  />
                  <Icon
                    name={app[15].name}
                    image={app[15].image}
                    border={border}
                    link={app[15].link}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )
    
    
  }

  const app = [
    // { name: "Phone", image: "./Images/phone.png", link: "tel://phonenumber" },
    { name: "Phone", image: "./Images/phone.png", link: "tel://" },
    {
      name: "Messages",
      image: "./Images/messages.png",
      // link: "sms://phonenumber",
      link: "messages://",
    },
    {
      name: "Google Maps",
      image: "./Images/googlemaps.png",
      link: "googlemaps://",
    },
    { name: "Youtube", image: "./Images/youtube.png", link: "youtube://" },
    { name: "Netflix", image: "./Images/netflix.png", link: "nflx://" },
    { name: "Facebook", image: "./Images/facebook.png", link: "fb://" },
    { name: "Waze", image: "./Images/waze.png", link: "waze://" },
    {
      name: "Whatsapp",
      image: "./Images/whatsapp.png",
      //link: "mobilephone://",
      link: "whatsapp://",
    },
    { name: "Podcasts", image: "./Images/podcasts.png", link: "podcast://" },
    { name: "Audible", image: "./Images/audible.png", link: "Audible://" },
    {
      name: "Messenger",
      image: "./Images/messenger.png",
      link: "fb-messenger://",
    },
    { name: "TuneIn", image: "./Images/tunein.png", link: "tunein://" },
    { name: "Gmail", image: "./Images/gmail.png", link: "googlegmail://" },
    { name: "Music", image: "./Images/music.png", link: "music://" },
    { name: "WeChat", image: "./Images/wechat.png", link: "wechat://" },
    { name: "Zoom", image: "./Images/zoom.png", link: "zoom://" },
  ];

  const Toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
    border == "50%" ? setBorder("10%") : setBorder("50%");
  };

  const Left = () => {
    setSlide(0);
    setScreen("l");

    if (screen == "r" && slide == 0) {
      setSlide(1);
      setScreen("l");
    }
  };
  const Right = () => {
    setScreen("r");
  };

  function Display(left, right) {
    if (left === "r") {
      return { flex: "1", display: "none" };
    }
  }

  useEffect(() => {
    console.log(screen, slide);
    // Left();
    swap();
  }, [screen, slide]);

  return (
    <BrowserRouter >
      <div className="app"><div className="notification" style={{ display: display }}>
          <div className="notification__close">
            <button
              onClick={() => setDisplay("none")}
              style={{ width: "40px", height: "40px", color: "green" }}
            >
              x
            </button>
          </div>

        
          <p style={{ height: "20%" }}>
            Before opening an app in the app menu, you have to have relevant app
            installed on your iDevice!
          </p>
          {/* link  */}
          <a href="https://www.apple.com/app-store/" target="_blank">
            <button onClick={() => setDisplay("none")}>Install</button>{" "}
          </a>
        </div>

        <div className="app__side">
          <div className="app__side__top">
            <div className="app__side__top__text">CARPLAY UI</div>
            <div className="app__side__top__button">
              <IOSSwitch onClick={Toggler} color="primary" />
            </div>
          </div>
          <div className="app__side__middle">
            <div className="month">
              <Timer type="DD/MM/YY" />
            </div>
            <div className="date">
              <Timer type="h:mm a" />
            </div>
          </div>
          
          <div className="app__side__notification">
            <img
              src={notification}
              onClick={() => (
                setDisplay("flex"), setNotification("./Images/bell.png")
              )}
            />
          </div>
          <div className="app__side__bottom">
            <img src="./Images/HomeIcon.png" onClick={Left} />
          </div>
        </div>

        <div className="app__main">
          <div className="app__main__top"></div>
          <div className="app__main__middle">{swap()}</div>
          <div className="app__main__bottom">
            <button
              style={
                screen == "l"
                  ? { backgroundColor: "#ffffff" }
                  : { backgroundColor: "#AAAAAA" }
              }
            ></button>
            <button
              style={
                screen == "r"
                  ? { backgroundColor: "#ffffff" }
                  : { backgroundColor: "#AAAAAA" }
              }
            ></button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
