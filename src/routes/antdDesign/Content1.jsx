import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import reactImg from './img/react-native.svg'; 

class Content extends React.Component {
  static defaultProps = {
    className: 'content0', 
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={reactImg} />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              React
            </h1>
            <p key="p" id={`${props.id}-content`}>
              <p>React文档 <br/><a target='_blank' href="https://facebook.github.io/react/docs/hello-world.html">https://facebook.github.io/react/docs/hello-world.html</a></p>
              <p>React使用教程 <a target='_blank' href="http://www.ruanyifeng.com/blog/2015/03/react.html">http://www.ruanyifeng.com/blog/2015/03/react.html</a></p>
              <p>React-router使用教程 <a target='_blank' href="http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu">http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu</a></p>
              <p>React-redux使用教程 <a target='_blank' href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html">http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html</a></p>
              <p>Antd组件库 <br/><a target='_blank' href="https://ant.design/docs/react/introduce-cn">https://ant.design/docs/react/introduce-cn</a></p>
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
