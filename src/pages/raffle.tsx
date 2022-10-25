import React from 'react'
import Header from '@/components/Header'
import Ovora from 'public/images/Ovora.png'
import Image from 'next/image'

const raffle = () => {
	return (
		<div>
			<Header />
			<section>
				<div className="flex items-center justify-center mt-44 font-Roboto pb-5">
					<h1 className="text-5xl text-center mb-5">
						ENTER THE LOTTERY <br /> WITH .01 ETHER
					</h1>
				</div>
				<div className="flex items-center justify-center">
					<button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5">PLAY NOW</button>
				</div>
			</section>
			<div className="flex items-center justify-center space-x-[12em] ">
				<div>
					<div className=" py-4">
						<section className="">
							{' '}
							<p className="font-Roboto font-normal pb-5">ADMIN</p>
							<button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5">
								SELECT WINNER
							</button>
						</section>
						<section>
							{' '}
							<p className="font-Roboto font-normal pb-5">ADMIN</p>
							<button className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-normal mb-5">
								PAY WINNER
							</button>
						</section>
						<section>
							{/* {' '}
					<p>{error}</p> */}
						</section>
						<section>
							{/* {' '}
					<p>{successMsg}</p> */}
						</section>
					</div>
				</div>
				{/* SPLIT SECTION HERE */}
				<section>
					<div className="flex items-center justify-center ml-[-1em]">
						<Image src={Ovora} alt="Picture of NFT" width={200} height={200} />
					</div>
				</section>
				{/* SPLIT SECTION HERE */}
				<div className="">
					<section className=" text-black py-4 font-Roboto font-normal">
						<section className="pb-5">
							<div>LOTTERY HISTORY</div>
							<p>___ </p>
						</section>
						<section className="pb-5">
							<div>PLAYERS</div>
							<p>___ </p>
						</section>
						<section className="pb-5">
							<div>POT</div>
							<p>___ ETH</p>
						</section>
					</section>
				</div>
			</div>
		</div>
	)
}

export default raffle
