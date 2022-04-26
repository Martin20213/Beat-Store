import "../App.css";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Contact() {
  return (
    <div className="App">
      <div className="bg">
        <h1>Contact</h1>
        <div id="Contactcucc">
          Instagram:{" "}
          <a target="_blank" href="https://www.instagram.com/sss_stex/">
            <InstagramIcon color="action" />
          </a>
          Soundcloud:{" "}
          <a target="_blank" href="https://soundcloud.com/stexbeats">
            <MusicNoteIcon color="action" />
          </a>
          Youtube:{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCl2iALJZB2EZ0Cen9Ze9r6Q"
          >
            <MusicNoteIcon color="action" />
          </a>
        </div>
        <p id="Emailc">
          Email: bystexbeats@gmail.com <EmailIcon color="action" />
        </p>
        © 2022, STEXBEATS
        <footer>
          <p>
            Created by <i className="fa fa-heart"></i>
            <a target="_blank" href="https://www.instagram.com/sss_stex/">
              STEXBEATS{" "}
            </a>
            ,2022
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
