const CopyIcon = props => 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
  </svg>

const PlayButtonIcon = props => 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    className="play-icon" onClick={props.func}>
      <title>{props.result ? 'Unshow result' : 'Show result'}</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3.21a1 1 0 011.293-.25L18.5 12l-12.207 8.04A1 1 0 015 19.79V3.21z"/>
  </svg>

const EditIcon = props => 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" onClick={props.func}>
    <title>Edit</title>
    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
  </svg>

const TickIcon = () => 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
    <path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/>
  </svg>

export  {
  CopyIcon,
  PlayButtonIcon,
  EditIcon,
  TickIcon
};