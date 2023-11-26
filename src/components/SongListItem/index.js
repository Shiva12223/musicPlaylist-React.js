import './index.css'
import {RiDeleteBin7Line} from 'react-icons/ri'

const SongListItem = props => {
  const {songDetails, deleteSongItem} = props
  const {name, id, genre, duration, imageUrl} = songDetails
  const deleteSongBtn = () => {
    deleteSongItem(id)
  }

  return (
    <li className="song-item">
      <div className="song-content-container">
        <img className="song-img" src={imageUrl} alt="track" />
        <div className="song-content">
          <div>
            <p className="song-name">{name}</p>
            <p className="genre-type">{genre}</p>
          </div>
          <p className="song-duration">{duration}</p>
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        aria-label="deleteSongButton"
        onClick={deleteSongBtn}
        className="delete-btn"
      >
        <RiDeleteBin7Line size={20} color="#ffffff" />
      </button>
    </li>
  )
}

export default SongListItem
