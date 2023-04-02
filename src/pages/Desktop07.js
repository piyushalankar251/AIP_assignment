import "./Desktop07.css";
import { Routes, Route, useNavigate } from 'react-router-dom';

const Desktop07 = () => {
  const nv = useNavigate();
  function hClick() {
    nv("../desktop-08");

  }
 
  return (
    <div className="desktop-07">
      <div className="navbar7">
        <img className="ai-planet-logo7" alt="" src="/ai-planet-logo.svg" />
        <div className="menu-item42">
          <img className="person-icon7" alt="" src="/person4.svg" />
          <img
            className="arrow-drop-down-icon47"
            alt=""
            src="/arrowdropdown.svg"
          />
        </div>
        <div className="menu7">
          <div className="menu-item43">
            <div className="learn-ai35">Learn AI</div>
            <img
              className="arrow-drop-down-icon47"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item43">
            <div className="learn-ai35">Marketplace</div>
            <img
              className="arrow-drop-down-icon49"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item43">
            <div className="learn-ai35">AI Planet for Teams</div>
            <img
              className="arrow-drop-down-icon49"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item43">
            <div className="learn-ai35">About Us</div>
            <img
              className="arrow-drop-down-icon49"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
          <div className="menu-item43">
            <div className="learn-ai35">Wall of Love ❤</div>
            <img
              className="arrow-drop-down-icon49"
              alt=""
              src="/arrowdropdown.svg"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="new-hackathon-submission">New Hackathon Submission</div>
        <div className="item">
          <div className="title">Title</div>
          <div className="title-of-your-submission-wrapper">
            <input className="title"placeholder="Title of your submission"type="text"></input>
          </div>
        </div>
        <div className="item">
          <div className="title">Summary</div>
          <div className="title-of-your-submission-wrapper">
            <input className="title"type="text" placeholder=" A short summary of your submission (this will be visible with your
              submission)">
             
            </input>
          </div>
        </div>
        <div className="item2">
          <div className="description2">Description</div>
          <div className="write-a-long-description-of-yo-wrapper">
            <textarea className="title"placeholder="Write a long description of your project. You can describe your
              idea and approach here."maxLength={3000}>
              
            </textarea>
          </div>
          <div className="characters">0 / 3,000 characters</div>
        </div>
        <div className="item">
          <div className="title">Cover Image</div>
          <div className="minimum-resolution-360px">
            Minimum resolution: 360px X 360px
          </div>
          <div className="upload">
            <img
              className="add-photo-alternate-icon"
              alt=""
              src="/addphotoalternate.svg"
            />
             <input type="file" accept=".jpg,.jpeg,.png"></input>
          </div>
        </div>
        <div className="item">
          <div className="title">Hackathon Name</div>
          <div className="title-of-your-submission-wrapper">
            <input className="title"type="text"placeholder="Enter the name of the hackathon"></input>
          </div>
        </div>
        <div className="item5">
          <div className="section-01">
            <div className="title">Hackathon Start Date</div>
            <div className="field">
              <div className="select-start-date">Select start date</div>
              <img
                className="information-outline-icon"
                alt=""
                src="/calendartoday3.svg"
              />
            </div>
          </div>
          <div className="section-01">
            <div className="title">Hackathon End Date</div>
            <div className="field">
              <div className="select-start-date">Select end date</div>
              <img
                className="information-outline-icon"
                alt=""
                src="/calendartoday3.svg"
              />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="title">GitHub Repository</div>
          <div className="title-of-your-submission-wrapper">
            <input className="title"type="text"placeholder=" Enter your submission’s public GitHub repository link">
             
            </input>
          </div>
        </div>
        <div className="item">
          <div className="title">Other Links</div>
          <div className="title-of-your-submission-wrapper">
            <input className="title"type="text"placeholder=" You can upload a video demo or URL of you demo app here.">
             
            </input>
          </div>
        </div>
        <div className="item8">
          <div className="file-upload">File Upload</div>
          <div className="recommended-resolution-abcd">
            Recommended resolution: ABCD x WXYZ
          </div>
          <div className="title">File size should not exceed 100MB</div>
          <div className="upload">
            <img
              className="add-photo-alternate-icon"
              alt=""
              src="/cloudupload.svg"
            />
          </div>
        </div>
        <div className="section-4">
          <div className="data-description-container">
            <span>{`Data Description `}</span>
            <span className="span">*</span>
          </div>
          <div className="group-parent">
            <div className="rectangle-parent">
              <div className="group-child" />
              <img
                className="screenshot-2022-03-02-at-1153"
                alt=""
                src="/screenshot-20220302-at-1153-1@2x.png"
              />
            </div>
            <div className="group-item" />
            <img
              className="bitriangle-fill-icon"
              alt=""
              src="/bitrianglefill.svg"
            />
          </div>
        </div>
        <div className="section-10">
          <div className="title1">
            <div className="data-description-container">Evaluation Metric</div>
            <img
              className="information-outline-icon"
              alt=""
              src="/informationoutline.svg"
            />
          </div>
          <div className="title-parent">
            <div className="title2">
              <div className="data-description-container">Evaluator</div>
              <img
                className="information-outline-icon1"
                alt=""
                src="/informationoutline1.svg"
              />
            </div>
            <div className="field2">
              <div className="title">--</div>
              <img
                className="information-outline-icon"
                alt=""
                src="/menudown.svg"
              />
            </div>
          </div>
          <div className="field3">
            <div className="title2">
              <div className="data-description-container">Column</div>
              <img
                className="information-outline-icon1"
                alt=""
                src="/informationoutline1.svg"
              />
            </div>
            <div className="field-child" />
          </div>
        </div>
        <div className="line-parent">
          <div className="frame-inner" />
          <button className="sign-up-button5" onClick={hClick}>
            <div className="learn-ai35">Upload Submission</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop07;
