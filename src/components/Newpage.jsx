import React from 'react'
import { FeatureLists, PhoneLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Newpage = () => {

     useGSAP(() => {
	const parallaxTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#cocktails',
		start: 'top 30%',
		end: 'bottom 80%',
		scrub: true,
	 }
	})
	
	parallaxTimeline
	 .from('#c-left-leaf', {
		x: -100, y: 100
	})
	 .from('#c-right-leaf', {
		x: 100, y: 100
	})
 })

  return (
<section id="cocktails" className="noisy">
	 <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
	 <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
	 
	 <div className="list">
		<div className="popular">
		 <h2>Most popular Products:</h2>
		 
		 <ul>
			{PhoneLists.map(({ name, country, price }) => (
			 <li key={name}>
				<div className="md:me-28">
				 <h3>{name}</h3>
				 <p>{country}</p>
				</div>
				<span>- {price}</span>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="loved">
		 <h2 className='gap-3 ml-8'>Most loved Features:</h2>
		 
		 <ul>
			{FeatureLists.map(({ detail }) => (
			 <li>
				<div className="me-45 gap-3 ml-8">
                    <h1>{detail}</h1>
				</div>
			 </li>
			))}
		 </ul>
		</div>
	 </div>
	</section>
  )
}

export default Newpage