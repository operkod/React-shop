import React from "react"

const SortBy = ({ setChangeSortBy, selectSort, sortItems }) => {
  const activeSortBY = sortItems.find((obj) => obj.type === selectSort).name

  const sortRef = React.useRef()
  const [visiblePopup, setVisiblePopup] = React.useState(false)

  const onChangePopup = () => {
    setVisiblePopup(!visiblePopup)
  }
  const handleOutsideClick = (event) => {
    const path = event.path
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
              <li key={`${item}_${index}`} onClick={() => setChangeSortBy(item.type)}>
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
