import React, { Component } from 'react'

export class Sticky extends Component {
  componentDidMount() {
    const setInitialHeights = (elements) => {
      elements.forEach.call(elements, (sticky) => {
        sticky.setAttribute('data-sticky-inital', sticky.getBoundingClientRect().top)
      })
    }
    const stickies = document.querySelectorAll('[data-sticky]')
    setinitialHeights(stickies)
  }
  render() {
    const { className, enter, exit, children } = this.props
    return (
      <div
        className={`Sticky ${className}`}
        data-sticky
        data-sticky-enter={enter}
        data-sticky-exit={exit}
      >
        {children}
      </div>
    )
  }
}

Sticky.propTypes = {
  className: React.PropTypes.string,
  enter: React.PropTypes.string,
  exit: React.PropTypes.string,
  children: React.PropTypes.node,
}
