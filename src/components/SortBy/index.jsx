import React from "react"
import PropTypes from "prop-types"

import "./Sortby.scss"

const SortBy = ({ setChangeSortBy, selectSort, sortItems }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const activeSortBY = sortItems.find((obj) => obj.type === selectSort).name
  const sortRef = React.useRef()

  const onChangePopup = () => {
    setVisiblePopup(!visiblePopup)
  }
  const handleOutsideClick = (e) => {
    const path = e.path
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [])

  return (
    <div ref={sortRef} className="sort" onClick={onChangePopup}>
      <div className="sort__label">
        <span>Сортировка по: </span>
        <b className="sort__label">{activeSortBY}</b>
      </div>

      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortItems.map((item, index) => (
              <li key={`${item}_${index}`} onClick={setChangeSortBy.bind(null, item.type)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default React.memo(SortBy)

SortBy.propTypes = {
  sortItems: PropTypes.string,
  selectSort: PropTypes.array
}
