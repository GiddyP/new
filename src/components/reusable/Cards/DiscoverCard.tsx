import { FranklySpeaking } from "@public/images";
import React from "react";

const DiscoverCard = () => {
	return (
		<div className='py-2 bg-white w-[230px] flex flex-col items-center'>
			<img
				src={FranklySpeaking.src}
				alt={FranklySpeaking.alt}
				className='w-[159px] h-[159px] object-cover rounded-full'
			/>

			<div className='flex flex-col gap-1 items-center'>
				<span className='text-lg font-bold'>Sarah Leah</span>
				<span className='text-sm'>Suggested for you</span>
				<span className='text-sm'>Member since May 4, 2022</span>
			</div>
			<div className='flex gap-1 mt-2 items-center justify-center w-full'>
				<button className='border border-[#7B61FF] px-3 rounded-2xl w-full'>
					Follow
				</button>
			</div>
		</div>
	);
};

export default DiscoverCard;
