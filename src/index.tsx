import { LazyAbout, LazyShop } from '@/pages'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './components/App/App'
import './index.scss'

const root = document.getElementById('root')

if (!root) {
	throw new Error('Root is undefined!')
}

const container = createRoot(root)

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: (
					<Suspense fallback={'Is loading'}>
						<LazyAbout />
					</Suspense>
				),
			},
			{
				path: '/shop',
				element: (
					<Suspense fallback={'Is loading'}>
						<LazyShop />
					</Suspense>
				),
			},
		],
	},
])

container.render(<RouterProvider router={router} />)
