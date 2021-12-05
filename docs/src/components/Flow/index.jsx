import React from 'react'
import styles from './styles.module.scss';
import Image from '@site/src/components/Image';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const simpleHash = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0].toString(36);
};

export default class Flow extends React.Component {
  constructor(props) {
    super();

    this.state = {
      localStoragePrefix: "docs_flow_",
      inTransition: false,
      currentStep: 0,
      imageStyle: props.imageStyle,
    };

    if (ExecutionEnvironment.canUseDOM) {
      this.state.localStoragePrefix += simpleHash(window?.location.pathname || "") + "_"
      this.state.currentStep =  parseInt(window?.localStorage.getItem(this.state.localStoragePrefix + props.id) || 0)
    }
  }

  getCurrentImage(children, step) {
    let currentImageChild = null
    let currentImageProps = {}
    children.some((child, i) => {
      if (child.props?.image) {
        currentImageChild = child
        currentImageProps = {
          src: child.props.image,
          style: this.state.imageStyle,
          imageStyle: child.props.imageStyle,
          hoverStyle: child.props.hoverStyle,
        }
      } else {
        if (child.props?.imageStyle) {
          currentImageProps.imageStyle = child.props.imageStyle
        }

        if (child.props?.hoverStyle) {
          currentImageProps.hoverStyle = child.props.hoverStyle
        }
      }
      return i === (Number.isInteger(step) ? step : this.state.currentStep)
    })

    return {
      child: currentImageChild,
      props: currentImageProps
    }
  }

  render() {
    let children = this.props.children
    if (Array.isArray(children) === false) {
      children = [children]
    }

    const currentImage = this.getCurrentImage(children)

    return (
      <div className={styles.flow}>
        { currentImage.child && <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <Image {...currentImage.props} 
              onMouseEnter={() => {
                this.setState({
                  imageStyle: currentImage.props?.hoverStyle || currentImage.props?.imageStyle
                })
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  if (this.state.inTransition === false) {
                    this.setState({
                      imageStyle: currentImage.props?.imageStyle
                    })
                  }
                }, 100)
              }}
              onMouseDown={() => {
                this.setState({
                  imageStyle: {transition: "none", transform: "none"}
                }, () => {
                  this.setState({
                    imageStyle: {}
                  })
                })
              }} />
          </div>
        </div> }
        <ol>
          {React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
              current: i === this.state.currentStep,
              onClick: () => {
                if (this.state.currentStep !== i) {
                  let nextImage = this.getCurrentImage(children, i)
                  let newState = {
                    inTransition: true,
                  }

                  if (currentImage.props.src != nextImage.props.src) {
                    newState.imageStyle = Object.assign({}, this.state?.imageStyle, {
                      transition: "opacity 0.2s",
                      opacity: 0,
                    })
                  }

                  if (currentImage.props.src != nextImage.props.src || currentImage.props.imageStyle != nextImage.props.imageStyle || currentImage.props.hoverStyle != nextImage.props.hoverStyle) {
                    this.setState(newState, () => {
                      setTimeout(() => {
                        window?.localStorage.setItem(this.state.localStoragePrefix + this.props.id, i)
                        this.setState({
                          currentStep: i,
                        }, () => {
                          setTimeout(() => {
                            this.setState({
                              inTransition: false,
                              imageStyle: {
                                transition: "opacity 0.2s",
                                opacity: 1,
                              }
                            }, () => {
                              setTimeout(() => {
                                const currentImage = this.getCurrentImage(children)
                                this.setState({
                                  imageStyle: currentImage.props?.hoverStyle || currentImage.props?.imageStyle
                                })
                              }, 800)
                            })
                          }, 100)
                        })
                      }, 100)
                    })
                  } else {
                    this.setState({
                      currentStep: i,
                    })
                  }
                } else if (this.state.inTransition === false) {
                  const currentImage = this.getCurrentImage(children)
                  if (this.state.imageStyle === currentImage.props?.hoverStyle) {
                    this.setState({
                      imageStyle: currentImage.props?.imageStyle
                    })
                  } else {
                    this.setState({
                      imageStyle: currentImage.props?.hoverStyle || currentImage.props?.imageStyle
                    })
                  }
                }
              },
              onMouseLeave: () => {/*
                setTimeout(() => {
                  if (this.state.inTransition === false) {
                    this.setState({
                      imageStyle: child?.props?.style
                    })
                  }
                }, 100)*/
              },
            });
          })}
        </ol>
      </div>
    )
  }
}


export class Step extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <li className={ `${styles.step} ${this.props.current ? styles.current : ""} `} onClick={this.props.onClick} style={this.props.style} >
        {this.props.children}
      </li>
    )
  }
}
