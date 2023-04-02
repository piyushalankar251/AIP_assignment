import "./Desktop08.css";
import { Routes, Route, useNavigate } from 'react-router-dom';

const Desktop08 = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("../desktop-09");

  }
  return (
    <div className="desktop-08">
      <div className="navbar9">
        <img className="ai-planet-logo9" alt="" src="/ai-planet-logo1.svg" />
        <div className="menu-item54">
          <img className="person-icon9" alt="" src="/person5.svg" />
          <img
            className="arrow-drop-down-icon59"
            alt=""
            src="/arrowdropdown2.svg"
          />
        </div>
        <div className="menu9">
          <div className="menu-item55">
            <div className="learn-ai45">Learn AI</div>
            <img
              className="arrow-drop-down-icon59"
              alt=""
              src="/arrowdropdown3.svg"
            />
          </div>
          <div className="menu-item55">
            <div className="learn-ai45">Marketplace</div>
            <img
              className="arrow-drop-down-icon61"
              alt=""
              src="/arrowdropdown4.svg"
            />
          </div>
          <div className="menu-item55">
            <div className="learn-ai45">AI Planet for Teams</div>
            <img
              className="arrow-drop-down-icon61"
              alt=""
              src="/arrowdropdown3.svg"
            />
          </div>
          <div className="menu-item55">
            <div className="learn-ai45">About Us</div>
            <img
              className="arrow-drop-down-icon61"
              alt=""
              src="/arrowdropdown2.svg"
            />
          </div>
          <div className="menu-item55">
            <div className="learn-ai45">Wall of Love ❤</div>
            <img
              className="arrow-drop-down-icon61"
              alt=""
              src="/arrowdropdown2.svg"
            />
          </div>
        </div>
      </div>
      <div className="content2">
        <div className="new-hackathon-submission1">
          New Hackathon Submission
        </div>
        <div className="item18">
          <div className="title8">Title</div>
          <div className="pirate-ipsum-container">
            <input className="title8"placeholder="Pirate Ipsum"type="text"></input>
          </div>
        </div>
        <div className="item18">
          <div className="title8">Summary</div>
          <div className="pirate-ipsum-container">
            <input className="shiver-to-tender1"type="text"placeholder="Shiver to tender hempen brig quarterdeck jolly pay. Furl sail
              crimp furl pinnace.">
              
            </input>
          </div>
        </div>
        <div className="item20">
          <div className="description4">Description</div>
          <div className="pirate-ipsum-arrgh-bounty-warp-container">
            <div className="shiver-to-tender1">
              <textarea placeholder=" Shiver to tender hempen brig quarterdeck jolly pay. Furl sail
              crimp furl pinnace.Pirate ipsum arrgh bounty warp jack. Locker rig hail-shot log
              jack parrel. Keelhaul swab lugsail me cat blow ensign. Spot dock
              pinnace quarterdeck yawl ketch cup mizzen coxswain. Tell halter
              chase locker boatswain pink guns piracy gaff grog. On chain
              fluke measured arr execution spanker driver. Keelhaul crow's
              weigh reef nipperkin lanyard timbers spirits keelhaul. Sloop
              sink dock yard pillage jennys lubber jennys salmagundi bounty.Gaff ahoy the shrouds anchor pirate bow cat aft. Black nest
                pounders hearties or tales guns hail-shot pinnace brethren.
                Nipper crack fathom schooner fleet blimey. Quarterdeck pink gaff
                spanker of. Fer pirate crow's scourge boatswain the jib chain
                pounders blow. Spanker clipper jones' jib guns shot jib. Aye
                pounders sheet gabion parrel fer sails weigh. Gold ahoy shrouds
                scurvy clipper crack spot locker."maxLength={3000}></textarea>
            </div>
          </div>
          <div className="characters2">1,580 / 3,000 characters</div>
        </div>
        <div className="item21">
          <div className="cover-image2">Cover Image</div>
          <div className="minimum-resolution-360px2">
            Minimum resolution: 360px X 360px
          </div>
          <div className="upload4">
            <img className="image-icon8" alt="" src="/image2@2x.png" />
            <div className="shiver-to-tender1">PirateIpsume_thumbnail.png</div>
            <div className="white-button2">
              <div className="edit-profile2">Reupload</div>
             <input type="file"accept=".jpg,.png,.jpeg"></input>
            </div>
          </div>
        </div>
        <div className="item18">
          <input type="text" className="title8"placeholder="Hackathon Name"></input>
          <div className="pirate-ipsum-container">
            <input type="text" className="title8"placeholder="Oceanic Treasure Hunt"></input>
          </div>
        </div>
        <div className="item23">
          <div className="section-012">
            <div className="title8">Hackathon Start Date</div>
            <div className="field8">
              <div className="shiver-to-tender1">01/03/2023</div>
              <img
                className="calendar-today-icon8"
                alt=""
                src="/calendartoday3.svg"
              />
            </div>
          </div>
          <div className="section-012">
            <div className="title8">Hackathon End Date</div>
            <div className="field8">
              <div className="shiver-to-tender1">31/03/2023</div>
              <img
                className="calendar-today-icon8"
                alt=""
                src="/calendartoday3.svg"
              />
            </div>
          </div>
        </div>
        <div className="item18">
          <div className="title8">GitHub Repository</div>
          <div className="pirate-ipsum-container">
            <input type="url" className="title8"placeholder=" https://github.com/username/projectname/releases">
             
            </input>
          </div>
        </div>
        <div className="item18">
          <div className="title8">Other Links</div>
          <div className="pirate-ipsum-container">
            <input type="url" className="title8"placeholder="https://drive.google.com/file/d/csdkbcsdbCJKD_skjaa122xs/view">
              
            </input>
          </div>
        </div>
        <div className="item26">
          <div className="file-upload2">File Upload</div>
          <div className="recommended-resolution-abcd2">
            Recommended resolution: ABCD x WXYZ
          </div>
          <div className="title8">File size should not exceed 100MB</div>
          <div className="upload4">
            <img
              className="insert-drive-file-icon1"
              alt=""
              src="/insertdrivefile.svg"
            />
            <div className="shiver-to-tender1">PirateIpsum_notebook.ipynb</div>
            <div className="white-button2">
              <div className="edit-profile2">Reupload</div>
              <img
                className="arrow-drop-down-icon59"
                alt=""
                src="/cloudupload1.svg"
              />
            </div>
          </div>
        </div>
        <div className="section-42">
          <div className="data-description-container2">
            <span>{`Data Description `}</span>
            <span className="span2">*</span>
          </div>
          <div className="group-div">
            <div className="rectangle-container">
              <div className="group-child1" />
              <img
                className="screenshot-2022-03-02-at-11532"
                alt=""
                src="/screenshot-20220302-at-1153-1@2x.png"
              />
            </div>
            <div className="group-child2" />
            <img
              className="bitriangle-fill-icon2"
              alt=""
              src="/bitrianglefill2.svg"
            />
          </div>
        </div>
        <div className="section-102">
          <div className="title9">
            <div className="data-description-container2">Evaluation Metric</div>
            <img
              className="calendar-today-icon8"
              alt=""
              src="/informationoutline.svg"
            />
          </div>
          <div className="title-container">
            <div className="title10">
              <div className="data-description-container2">Evaluator</div>
              <img
                className="information-outline-icon7"
                alt=""
                src="/informationoutline3.svg"
              />
            </div>
            <div className="field10">
              <div className="title8">--</div>
              <img
                className="calendar-today-icon8"
                alt=""
                src="/menudown.svg"
              />
            </div>
          </div>
          <div className="field11">
            <div className="title10">
              <div className="data-description-container2">Column</div>
              <img
                className="information-outline-icon7"
                alt=""
                src="/informationoutline3.svg"
              />
            </div>
            <div className="field-inner" />
          </div>
        </div>
        <div className="line-container">
          <div className="frame-child1" />
          <button className="sign-up-button7" onClick={handleClick}>
            <div className="learn-ai35">Upload Submission</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop08;
