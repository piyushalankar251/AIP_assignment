import "./Desktop01.css";
//import desktop7 from './Desktop07';
import { Routes, Route, useNavigate } from 'react-router-dom';


const Desktop01 = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("desktop-07");

  }
  const nav = useNavigate();
  function handleCl() {
    nav("desktop-05");

  }
  const nv = useNavigate();
  function handlCl() {
    nv("desktop-01");

  }
  return (
    <div className="desktop-01">
      <div className="navbar">
        <img className="ai-planet-logo" alt="" src="/ai-planet-logo.svg" onFocus={handlCl} />
        <div className="menu-item">
          <img className="person-icon" alt="" src="/person.svg" />
          <img
            className="arrow-drop-down-icon"
            alt=""
            src="/arrowdropdown.svg"
          />
        </div>
        <div className="menu">
          <div className="menu-item1">
            <div className="learn-ai">Learn AI</div>
            <img
              className="arrow-drop-down-icon"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item1">
            <div className="learn-ai">Marketplace</div>
            <img
              className="arrow-drop-down-icon2"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item1">
            <div className="learn-ai">AI Planet for Teams</div>
            <img
              className="arrow-drop-down-icon2"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item1">
            <div className="learn-ai">About Us</div>
            <img
              className="arrow-drop-down-icon2"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item1">
            <div className="learn-ai">Wall of Love ❤</div>
            <img
              className="arrow-drop-down-icon2"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
        </div>
      </div>
      <div className="hero">
        <img className="waves-icon" alt="" src="/waves@2x.png" />
        <div className="text-button">
          <div className="hackathon-submissions">Hackathon Submissions</div>
          <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. `}</div>

          <button className="sign-up-button" onClick={handleClick}>
            <div className="join-for-free">
              Upload Submission
              </div>
            
      
          </button>

        </div>
        <img
          className="untitled-design-1"
          alt=""
          src="/untitled-design-1@2x.png"
        />
      </div>
      <div className="tabs">
        <div className="all-submissions-wrapper">
          <div className="all-submissions">All Submissions</div>
        </div>
        <div className="favourite-submissions-wrapper">
          <div className="all-submissions">Favourite Submissions</div>
        </div>
      </div>
      <div className="utilities">
        <div className="search">
          <img className="arrow-drop-down-icon" alt="" src="/search.svg" />
          <input type="search" className="srch"></input>
        </div>
        <div className="newest">
          <select name="filter" className="newest" form="carform">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="card" onClick={handleCl}>
        <div className="heading">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="interviewme">InterviewMe</div>
        </div>
        <div className="desc">
          Built with GPT-3, React, and Flask. Practice interviews with AI and
          ace your next interview.
        </div>
        <div className="stats">
          <div className="view">
            <img
              className="remove-red-eye-icon"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-6-days">uploaded 6 days ago</i>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="heading">
          <img className="image-icon" alt="" src="/rectangle-6767@2x.png" />
          <div className="interviewme">Pizza Impsum</div>
        </div>
        <div className="desc">
          Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.
        </div>
        <div className="stats">
          <div className="view">
            <img
              className="remove-red-eye-icon"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-6-days">uploaded 12 days ago</i>
          </div>
        </div>
      </div>
      <div className="card2">
        <div className="heading">
          <img className="image-icon" alt="" src="/rectangle-6766@2x.png" />
          <div className="interviewme">Lorem Ipsum</div>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus
          egestas libero tristique nec.
        </div>
        <div className="stats">
          <div className="view">
            <img
              className="remove-red-eye-icon"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-6-days">uploaded 8 days ago</i>
          </div>
        </div>
      </div>
      <div className="card3">
        <div className="heading">
          <img className="image-icon" alt="" src="/rectangle-67671@2x.png" />
          <div className="interviewme">Figma Ipsum</div>
        </div>
        <div className="desc">
          Figma ipsum component variant main layer. Blur hand object thumbnail
          subtract flows font bold image. Font.
        </div>
        <div className="stats">
          <div className="view">
            <img
              className="remove-red-eye-icon"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-6-days">uploaded 16 days ago</i>
          </div>
        </div>
      </div>
      <div className="card4">
        <div className="heading">
          <img className="image-icon" alt="" src="/rectangle-67661@2x.png" />
          <div className="interviewme">Potter Ipsum</div>
        </div>
        <div className="desc">
          Potter ipsum wand elf parchment wingardium. Ghost glass hall tears
          hair must train. Snape alohamora bathrooms.
        </div>
        <div className="stats">
          <div className="view">
            <img
              className="remove-red-eye-icon"
              alt=""
              src="/removeredeye1.svg"
            />
            <i className="uploaded-6-days">uploaded 9 days ago</i>
          </div>
        </div>
      </div>
      <div className="card5">
        <div className="heading">
          <img className="image-icon" alt="" src="/rectangle-67672@2x.png" />
          <div className="interviewme">Office Ipsum</div>
        </div>
        <div className="desc">Office ipsum you must be muted.</div>
        <div className="stats">
          <div className="view">
            <img
              className="remove-red-eye-icon"
              alt=""
              src="/removeredeye1.svg"
            />
            <i className="uploaded-6-days">uploaded 28 days ago</i>
          </div>
        </div>
      </div>
      {/* <div className="filter-options">
        <div className="filter-option">
          <div className="newest">Newest</div>
        </div>
        <div className="filter-option1">
          <div className="newest">Oldest</div>
        </div>
      </div> */}
    </div>
  );
};

export default Desktop01;
