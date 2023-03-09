import React from 'react'

function ButtonOne({link, btnText}) {
  return (
    <button
    className="nav__button c-button contact-scroll"
    onClick={() => {
      window.open(
        `${link}`,
        "_blank"
      );
    }}
  >
    <span className="c-link">
      <span className="c-link__inner">
        <span> {btnText} </span>
        <span className="c-link__animated"> {btnText} </span>
      </span>
    </span>
  </button>
  )
}

export default ButtonOne

