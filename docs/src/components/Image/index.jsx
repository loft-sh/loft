import React from 'react'

export default class Image extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <figure>
        <img alt={this.props?.caption} {...this.props} />
        { this.props?.caption && <figcaption>{this.props.caption}</figcaption> }
      </figure>
    )
  }
}
