import person from "../../assets/image/person1.png";
import susan from "../../assets/image/susan.png";
import visitor from "../../assets/image/visitor.png";
import send from "../../assets/image/send.png";
import camera from "../../assets/image/camera.png";
import microphone from "../../assets/image/microphone.png";
import copyIcon from "../../assets/image/copyIcon.svg";
import circle from "../../assets/image/circle.png";

type MessagesProps = {
  visitorImg?: string;
  visitorName: string;
};
const MessageContainer = (props: MessagesProps) => {
  return (
    <div>
      <div className="message-card">
        <center>
          <img className="person-image" src={person}></img>
          <img className="circle-image" src={circle}></img>
        </center>
      </div>
      <div className="messagecard">
        <div className="input-value">
          <div className="l-card">
            <div className="l-row">
              <img src={susan}></img>
              <p className="doctor-visitor-named-text">Susan</p>
            </div>
            <div className="contain-left">
              <p className="p-tag">
                Tell me who I am and how I can help you. Give me a purpose and
                add goals for what you want me to do.
              </p>
            </div>
            <div className="timing-cont-right">09:25 AM</div>
          </div>
          <div className="r-main-card">
            <div className="r-card">
              <div className="r-row">
                <img src={props.visitorImg ? props.visitorImg : visitor}></img>
                <p className="doctor-visitor-named-text">{props.visitorName}</p>
              </div>
              <div className="contain-right">
                <p className="ptag">
                  Very cool, so you can be my personal assistant or creative
                  brainstom collaborator, or both?
                </p>
              </div>
              <div className="timing-cont-left">09:25 AM</div>
            </div>
          </div>
          <div className="l-card">
            <div className="l-row">
              <img src={susan}></img>
              <p className="doctor-visitor-named-text">Susan</p>
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
              <p className="doctor-visitor-named-text">{props.visitorName}</p>
            </div>
            <div className="contain-right">
              <p className="ptag">
                Very cool, so you can be my personal assistant or creative
                brainstom collaborator, or both?
              </p>
            </div>
            <div className="timing-cont-left">09:25 AM</div>
          </div>
        </div>
        <div className="messfoot">
          <div className="messfoot-cont-1">
            <img className="icon-mess" src={send} />
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

export default MessageContainer;
