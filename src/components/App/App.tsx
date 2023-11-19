import ImageSvg from '@/assets/atomstructure.svg'
import images from '@/assets/mo.jpg'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
	const [counter, setCounter] = useState(0)

	return (
		<div className={styles.container}>
			<Link to='/about'>To about page</Link>
			<br />
			<Link to='/'>To main page</Link>
			<br />
			<Link to='/shop'>To shop page</Link>
			<h1>{counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>
				Increment {__PLATFORM__} ddsadadasds
			</button>
			<img width={100} src={images} alt='' />
			<ImageSvg width={200} height={200} color={'red'} />
			<Outlet />
		</div>
	)
}
