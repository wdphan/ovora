import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Ovora from 'public/images/Ovora.png'
import Image from 'next/image'
import Header from '@/components/Header'
import Link from 'next/link'

const Home: FC = () => {
	return (
		<div>
			<div className="">
				<Header />
			</div>

			<div className="relative flex min-h-screen bg-white items-center pt-14">
				<div className="max-w-7xl mx-auto mb-24 ">
					<h1 className="mb-10 font-Roboto  text-5xl text-black leading-snug">
						OVORA IS AN NFT LOTTERY <br /> DAPP FOR EVERYONE. ENTER <br /> FOR A CHANCE TO WIN A <br />
						RARE OVORA ORB.
					</h1>

					<div className="">
						<Link href="/raffle">
							<button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal">
								ENTER APP
							</button>
						</Link>
						<div className="flex ml-[30em] mt-[-7em]">
							<Image src={Ovora} alt="Picture of NFT" width={200} height={200} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
