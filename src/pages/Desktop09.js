import "./Desktop09.css";
import { Routes, Route, useNavigate } from 'react-router-dom';

const Desktop09 = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("../desktop-10");
  }
  return (
    <div className="desktop-09">
      <div className="navbar10">
        <img className="ai-planet-logo10" alt="" src="/ai-planet-logo4.svg" />
        <div className="menu-item60">
          <img className="person-icon10" alt="" src="/person6.svg" />
          <img
            className="arrow-drop-down-icon65"
            alt=""
            src="/arrowdropdown.svg"
          />
        </div>
        <div className="menu10">
          <div className="menu-item61">
            <div className="learn-ai50">Learn AI</div>
            <img
              className="arrow-drop-down-icon65"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item61">
            <div className="learn-ai50">Marketplace</div>
            <img
              className="arrow-drop-down-icon67"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item61">
            <div className="learn-ai50">AI Planet for Teams</div>
            <img
              className="arrow-drop-down-icon67"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item61">
            <div className="learn-ai50">About Us</div>
            <img
              className="arrow-drop-down-icon67"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item61">
            <div className="learn-ai50">Wall of Love ❤</div>
            <img
              className="arrow-drop-down-icon67"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
        </div>
      </div>
      <div className="hero9">
        <img className="waves-icon5" alt="" src="/waves@2x.png" />
        <div className="text-button5">
          <div className="hackathon-submissions5">Hackathon Submissions</div>
          <div className="lorem-ipsum-dolor7">{`Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. `}</div>
          <div className="sign-up-button8">
            <div className="join-for-free8">Upload Submission</div>
          </div>
        </div>
        <img
          className="untitled-design-15"
          alt=""
          src="/untitled-design-1@2x.png"
        />
      </div>
      <div className="tabs5">
        <div className="all-submissions-wrapper2">
          <div className="all-submissions5">All Submissions</div>
        </div>
        <div className="favourite-submissions-wrapper3">
          <div className="all-submissions5">Favourite Submissions</div>
        </div>
      </div>
      <div className="utilities5">
        <div className="search10">
          <img className="arrow-drop-down-icon65" alt="" src="/search5.svg" />
          <input className="search11"type="search"placeholder="Search"></input>
        </div>
        <div className="filter5">
          <div className="search11">Newest</div>
          <img
            className="arrow-drop-down-icon65"
            alt=""
            src="/arrowdropdown1.svg"
          />
        </div>
      </div>
      <div className="card25" onClick={handleClick}>
        <div className="heading27">
          <img className="image-icon9" alt="" src="/image3@2x.png" />
          <div className="pirate-ipsum2">Pirate Ipsum</div>
        </div>
        <div className="desc25">
          Shiver to tender hempen brig quarterdeck jolly pay. Furl sail crimp
          furl pinnace.
        </div>
        <div className="stats25">
          <div className="view25">
            <img
              className="remove-red-eye-icon25"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-just-now">uploaded just now</i>
          </div>
        </div>
      </div>
      <div className="card26">
        <div className="heading27">
          <img className="image-icon9" alt="" src="/image@2x.png" />
          <div className="pirate-ipsum2">InterviewMe</div>
        </div>
        <div className="desc25">
          Built with GPT-3, React, and Flask. Practice interviews with AI and
          ace your next interview.
        </div>
        <div className="stats25">
          <div className="view25">
            <img
              className="remove-red-eye-icon25"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-just-now">uploaded 6 days ago</i>
          </div>
        </div>
      </div>
      <div className="card27">
        <div className="heading27">
          <img className="image-icon9" alt="" src="/rectangle-6766@2x.png" />
          <div className="pirate-ipsum2">Lorem Ipsum</div>
        </div>
        <div className="desc25">
          Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus
          egestas libero tristique nec.
        </div>
        <div className="stats25">
          <div className="view25">
            <img
              className="remove-red-eye-icon25"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-just-now">uploaded 8 days ago</i>
          </div>
        </div>
      </div>
      <div className="card28">
        <div className="heading27">
          <img className="image-icon9" alt="" src="/rectangle-67661@2x.png" />
          <div className="pirate-ipsum2">Potter Ipsum</div>
        </div>
        <div className="desc25">
          Potter ipsum wand elf parchment wingardium. Ghost glass hall tears
          hair must train. Snape alohamora bathrooms.
        </div>
        <div className="stats25">
          <div className="view25">
            <img
              className="remove-red-eye-icon25"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-just-now">uploaded 9 days ago</i>
          </div>
        </div>
      </div>
      <div className="card29">
        <div className="heading27">
          <img className="image-icon9" alt="" src="/rectangle-6767@2x.png" />
          <div className="pirate-ipsum2">Pizza Impsum</div>
        </div>
        <div className="desc25">
          Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.
        </div>
        <div className="stats25">
          <div className="view25">
            <img
              className="remove-red-eye-icon25"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-just-now">uploaded 12 days ago</i>
          </div>
        </div>
      </div>
      <div className="card30">
        <div className="heading27">
          <img className="image-icon9" alt="" src="/rectangle-67671@2x.png" />
          <div className="pirate-ipsum2">Figma Ipsum</div>
        </div>
        <div className="desc25">
          Figma ipsum component variant main layer. Blur hand object thumbnail
          subtract flows font bold image. Font.
        </div>
        <div className="stats25">
          <div className="view25">
            <img
              className="remove-red-eye-icon25"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-just-now">uploaded 16 days ago</i>
          </div>
        </div>
      </div>
      <div className="card31">
        <div className="heading27">
          <img className="image-icon9" alt="" src="/rectangle-67672@2x.png" />
          <div className="pirate-ipsum2">Office Ipsum</div>
        </div>
        <div className="desc25">Office ipsum you must be muted.</div>
        <div className="stats25">
          <div className="view25">
            <img
              className="remove-red-eye-icon25"
              alt=""
              src="/removeredeye.svg"
            />
            <i className="uploaded-just-now">uploaded 28 days ago</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop09;
