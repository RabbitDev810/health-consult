import "../assets/css/info.css";
import person2 from "../../assets/image/person2.png";
import doctor from "../../assets/image/doctor.png";
import visitor from "../../assets/image/visitor.png";
import send from "../../assets/image/send.png";
import camera from "../../assets/image/camera.png";
import microphone from "../../assets/image/microphone.png";
import circle from "../../assets/image/circle.png";
import copyIcon from "../../assets/image/copyIcon.svg";

const MessEncounter = () => {
  return (
    <div>
      <div className="message-card">
        <center>
          <img src={person2}></img>
          <img className="circle-image" src={circle}></img>
        </center>
      </div>
      <div className="messagecard">
        <div className="input-value">
          <div className="l-card">
            <div className="l-row">
              <img src={doctor}></img>
              <p className="doctor-visitor-named-text">Doctor</p>
            </div>
            <div className="contain-left">
              <p className="p-tag">
                Tell me who I am and how I can help you. Give me a purpose and
                add goals for what you want me to do.
              </p>
            </div>
            <div className="timing-cont-right">09:25 Am</div>
          </div>
          <div className="r-card">
            <div className="r-row">
              <img src={visitor}></img>
              <p className="doctor-visitor-named-text">Visitor</p>
            </div>
            <div className="contain-right">
              <p className="ptag">
                Very cool, so you can be my personal assistant or creative
                brainstom collaborator, or both?
              </p>
            </div>
            <div className="timing-cont-left">09:25 AM</div>
          </div>
          <div className="l-card">
            <div className="l-row">
              <img src={doctor}></img>
              <p className="doctor-visitor-named-text">Doctor</p>
            </div>
            <div className="contain-left">
              <p className="p-tag">
                yep! and the more time we spend together, the more I can
                proactively support
              </p>
            </div>
            <div className="timing-cont-right">09:25 AM</div>
          </div>
          <div className="r-card">
            <div className="r-row">
              <img src={visitor}></img>
              <p className="doctor-visitor-named-text">Visitor</p>
            </div>
            <div className="contain-right">
              <p className="ptag">
                Very cool, so you can be my personal assistant or creative
                brainstom collaborator, or both?
              </p>
            </div>
            <div className="timing-cont-left">09:25 AM</div>
          </div>
          <div className="l-card">
            <div className="l-row">
              <img src={doctor}></img>
              <p className="doctor-visitor-named-text">Doctor</p>
            </div>
            <div className="contain-left">
              <p className="p-tag">
                Tell me who I am and how I can help you. Give me a purpose and
                add goals for what you want me to do.
              </p>
            </div>
            <div className="timing-cont-right">09:25 AM</div>
          </div>
          <div className="r-card">
            <div className="r-row">
              <img src={visitor}></img>
              <p className="doctor-visitor-named-text">Visitor</p>
            </div>
            <div className="contain-right">
              <p className="ptag">
                Very cool, so you can be my personal assistant or creative
                brainstom collaborator, or both?
              </p>
            </div>
            <div className="timing-cont-left">09:25 AM</div>
          </div>
          <div className="l-card">
            <div className="l-row">
              <img src={doctor}></img>
              <p className="doctor-visitor-named-text">Doctor</p>
            </div>
            <div className="contain-left">
              <p className="p-tag">
                yep! and the more time we spend together, the more I can
                proactively support
              </p>
            </div>
            <div className="timing-cont-right">09:25 AM</div>
          </div>
          <div className="r-card">
            <div className="r-row">
              <img src={visitor}></img>
              <p className="doctor-visitor-named-text">Visitor</p>
            </div>
            <div className="contain-right">
              <p className="ptag">
                Very cool, so you can be my personal assistant or creative
                brainstom collaborator, or both?
              </p>
            </div>
            <div className="timing-cont-left">09:25 AM</div>
          </div>
          <div className="l-card">
            <div className="l-row">
              <img src={doctor}></img>
              <p className="doctor-visitor-named-text">Doctor</p>
            </div>
            <div className="contain-left">
              <p className="p-tag">
                Tell me who I am and how I can help you. Give me a purpose and
                add goals for what you want me to do.
              </p>
            </div>
            <div className="timing-cont-right">09:25 AM</div>
          </div>
        </div>
        <div className="messfoot">
          <div className="messfoot-cont-1">
            <img className="icon-mess" src={send}></img>
            <input className="mess-input" placeholder="Write Your Message" />
            <img className="copy-icon" src={copyIcon} />
          </div>
          <div>
            <img src={camera} />
          </div>
          <div>
            <img className="mess-icon" src={microphone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessEncounter;
