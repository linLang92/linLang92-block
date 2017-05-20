import React, {
	Component
} from 'react';
import swipper from './libs/swiper-3.4.2.min.js';
import swipperCSS from './libs/swiper-3.4.2.min.css';
import styles from './swipper.css'

class MySwipper extends Component {
	constructor(props) {
		super();
		this.state = {
			name: 'swipper',
			lists: ['slide1', 'slide2', 'slide3']
		};
	}
	componentDidMount() {
		console.log(document.querySelector('.swiper-container'))
		var mySwiper = new swipper('.swiper-container', {})
		this.setState({
			lists: ['fk', 'slide2', 'slide3']
		})

	}
	render() {
		return (
			<div className='swiper-container'>
				<ul className="swiper-wrapper">
					{
						this.state.lists.map((val)=>{
							return <li key={val} className={"swiper-slide"}>{val}</li>
						})
					}
				</ul>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
}


module.exports = MySwipper;