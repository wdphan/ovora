import { FC } from 'react'
import ConnectWallet from './ConnectWallet'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<div className="flex items-center justify-center space-x-[30em] mt-5">
			<Link href="/">
				<a className="font-Roboto max-w-7xl text-2xl">OVORA</a>
			</Link>
			<ConnectWallet />
		</div>
	)
}

export default Header
