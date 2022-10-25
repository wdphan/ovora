import 'tailwindcss/tailwind.css'
import Web3Provider from '@/components/Web3Provider'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
	return (
		
			<Web3Provider>
				<Component {...pageProps} />
			</Web3Provider>
		
	)
}

export default App
