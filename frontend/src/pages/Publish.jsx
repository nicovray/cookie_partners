/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import Navigation from "@components/Navigation";
import React, { useState, useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Swal from "sweetalert2";
import imageideaplant from "../assets/image_idea_plant.png";
import persona1 from "../assets/persona1.jpg";
import "./Publish.css";

export default function Publish() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [categoryProject, setCategoryProject] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState([]);
  const [resources, setResources] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    addResponseMessage("Do you think we can call later?");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const options = [
    "Javascript",
    "Java",
    "PHP",
    "C#",
    "Python",
    "Ruby",
    "Other languages",
  ];

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const checkmarks = [
    "#collaboration",
    "#ecology",
    "#industry",
    "#medical",
    "#innovation",
    "#numeric",
    "#sciences",
    "#business",
    "#banking",
    "#arts",
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguages(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeCollaborators = (event) => {
    const {
      target: { value },
    } = event;
    setCollaborators(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeTags = (event) => {
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Congratulations, your project is saved!",
      width: 400,
      padding: "2rem",
      color: "#041678",
      background: "#ffff",
      backdrop: `
        "#041678"
      `,
    });
  };
  return (
    <div>
      <Navigation />
      <div id="projectadd">
        <h1 className="project_title">Add a project or an idea</h1>

        <form className="project_form" onSubmit={handleSubmit}>
          <label className="project_label" htmlFor="name">
            {`Project's name`}
            <input
              className="project_input"
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="project_label" htmlFor="date">
            {`Project's end date`}
            <input
              className="project_input"
              id="date"
              name="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label className="project_label" htmlFor="category">
            Is it an idea or an ongoing project?
            <select
              className="project_input"
              name="category_id"
              id="category"
              value={categoryProject}
              onChange={(e) => setCategoryProject(e.target.value)}
            >
              <option value="">Choisir une catégorie... </option>
              <option value="1">An idea</option>
              <option value="2">An ongoing project</option>
            </select>
          </label>

          <label className="project_label" htmlFor="description">
            Description of your concept
            <textarea
              className="project_textarea"
              id="description"
              name="description"
              type="number"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className="project_label" htmlFor="languages">
            Languages used
            <InputLabel className="project-input" />
            <Select
              labelId="project-input"
              id="project-input"
              multiple
              value={languages}
              onChange={handleChange}
              input={<OutlinedInput label="Language" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={languages.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </label>

          <label className="project_label" htmlFor="resources">
            Resources you need for your project
            <textarea
              className="project_textarea"
              id="resources"
              name="resources"
              type="number"
              value={resources}
              onChange={(e) => setResources(e.target.value)}
            />
          </label>

          <label className="project_label" htmlFor="Collaborators">
            Invite collaborators to this project
            <InputLabel className="project-input" />
            <Select
              labelId="dproject-input"
              id="project-input"
              multiple
              value={collaborators}
              onChange={handleChangeCollaborators}
              input={<OutlinedInput label="Collaborators" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((collaborator) => (
                <MenuItem key={collaborator} value={collaborator}>
                  <Checkbox
                    checked={collaborators.indexOf(collaborator) > -1}
                  />
                  <ListItemText primary={collaborator} />
                </MenuItem>
              ))}
            </Select>
          </label>

          <label className="project_label" htmlFor="tags">
            Add tags to help collaborators find your project
            <InputLabel className="project-input" />
            <Select
              labelId="dproject-input"
              id="project-input"
              multiple
              value={tags}
              onChange={handleChangeTags}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {checkmarks.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  <Checkbox checked={tags.indexOf(tag) > -1} />
                  <ListItemText primary={tag} />
                </MenuItem>
              ))}
            </Select>
          </label>

          <button className="button" type="submit">
            Add your project
          </button>
          <div className="div-image-idea-plant">
            <img className="image-idea-plant" src={imageideaplant} alt="" />
          </div>
        </form>
      </div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={persona1}
        title="My chat with Jessica"
        subtitle="What's up?"
      />
    </div>
  );
}
