import React from 'react'
import Image from '@site/src/components/Image';
import styles from './styles.module.scss';

export default class Field extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={styles.field} data-type={this.props?.type}>
        { this.props.img && 
          <Image alt={this.props?.caption} src={this.props?.img} />
        }
        {this.props.jsonPath && <div className={styles.jsonpath}>
            <span className={styles.label}>JSONPath in <a href="#crds">{this.props.crd} CRD</a>:</span><pre> {this.props.jsonPath} (type: {this.props.type || "string"}){this.props.default && `         # default: ${this.props.default}`}</pre>
          </div> }
      </div>
    )
  }
}
