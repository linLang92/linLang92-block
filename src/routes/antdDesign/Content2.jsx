import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import vueImg from './img/vue.svg'; 
class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              Vue
            </h1>
            <p key="p" id={`${props.id}-content`}>
              <p>Vue文档<br/><a target='_blank' href="http://cn.vuejs.org/">http://cn.vuejs.org/</a></p>
              <p>Vue-router文档<br/><a target='_blank' href="http://router.vuejs.org/zh-cn/index.html">http://router.vuejs.org/zh-cn/index.html</a></p>
              <p>Vuex文档<br/><a target='_blank' href="http://vuex.vuejs.org/zh-cn/">http://vuex.vuejs.org/zh-cn/</a></p>
              <p>Vue组件库<br/><a target='_blank' href="https://vux.li/#/">https://vux.li/#/</a></p>
              <p>element组件库<br/><a target='_blank' href="http://element.eleme.io/#/">http://element.eleme.io/#/</a></p>
            </p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={vueImg} />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
