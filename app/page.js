import Image from "next/image";

export default function Home() {
	return (
		<main className="flex bg-white flex-col">
			<div className="h-[80px] px-40 bg-green-600 w-full items-center lg:flex">
				<Image
					src="/icon.png"
					alt="Vercel Logo"
					width={25}
					height={25}
					priority
					style={{ marginRight: 10 }}
				/>
				<h1 class="text-2xl font-bold">FleetDart</h1>
			</div>

			<div className="bg-green-100 h-[650px] w-full flex items-center justify-center">
				<div className="relative w-full h-full">
					<Image
						src="/homepage-pay-desk.png"
						alt="Vercel Logo"
						layout="fill"
						objectFit="cover"
						priority
						className="w-full"
					/>
				</div>
			</div>

			<div className="bg-white text-black h-[650px] w-full flex items-center justify-between px-36 gap-3">
				<div class="border rounded-3xl h-[400px] w-[300px] border-green-500 flex flex-col items-center p-5">
					<h1 class="text-2xl font-bold mb-3">Tracking</h1>
					<p class="text-center">Track your vehicle in real-time with our advanced tracking system.</p>

					<div className="relative w-full h-[50%] mt-10">
						<Image
							src="/welcome_1.png"
							alt="Vercel Logo"
							layout="fill"
							objectFit="fill"
							priority
						/>
					</div>

				</div>
				<div class="border rounded-3xl h-[400px] w-[300px] border-green-500 flex flex-col items-center p-5">
					<h1 class="text-2xl font-bold mb-3">Fuel Monitoring</h1>
					<p class="text-center">Prevent theft, optimize efficiency, and stay in control of your fleet&apos;s fuel usage.</p>
					<div className="relative w-full h-[50%] mt-10">
						<Image
							src="/welcome_4.png"
							alt="Vercel Logo"
							layout="fill"
							objectFit="fill"
							priority
						/>
					</div>
				</div>
				<div class="border rounded-3xl h-[400px] w-[300px] border-green-500 flex flex-col items-center p-5">
					<h1 class="text-2xl font-bold mb-3">Trip Tracking</h1>
					<p class="text-center">Navigate your fleet with confidence using our seamless trip tracking solution.</p>
					<div className="relative w-full h-[50%] mt-10">
						<Image
							src="/welcome_2.png"
							alt="Vercel Logo"
							layout="fill"
							objectFit="fill"
							priority
						/>
					</div>
				</div>
				<div class="border rounded-3xl h-[400px] w-[300px] border-green-500 flex flex-col items-center p-5">
					<h1 class="text-2xl font-bold mb-3">Fleet Surveillance</h1>
					<p class="text-center">Enhance fleet security and efficiency through real-time monitoring with fleet surveillance.</p>
					<div className="relative w-full h-[50%] mt-10">
						<Image
							src="/welcome_3.png"
							alt="Vercel Logo"
							layout="fill"
							objectFit="fill"
							priority
						/>
					</div>
				</div>
			</div>

			<div className="bg-slate-100 px-40">
				<div className="h-[300px] grid grid-cols-3 gap-4 my-14">
					<div className="text-black ">
						<p className="font-semibold mb-5">Our Solutions</p>
						<p className="font-semibold text-slate-700 text-sm mb-3">Tracking</p>
						<p className="font-semibold text-slate-700 text-sm mb-3">Fleet Management</p>
						<p className="font-semibold text-slate-700 text-sm mb-3">Fuel Monitoring</p>
						<p className="font-semibold text-slate-700 text-sm mb-3">Trip Management</p>
						<p className="font-semibold text-slate-700 text-sm mb-3">Fleet Surveillance</p>
					</div>
					<div className="text-black ">
						<p className="font-semibold mb-5">Our Company</p>
						<p className="font-semibold text-slate-700 text-sm mb-3">About Us</p>
					</div>
					<div className="text-black ">
						<p className="font-semibold mb-5">Quick Links</p>
						<p className="font-semibold text-slate-700 text-sm mb-3">Contact Us</p>
					</div>
				</div>
			</div>
			<div className="bg-slate-100">
				<hr />
				<div className="flex items-center py-5  px-40">
					<Image
						src="/icon.png"
						alt="Vercel Logo"
						width={13}
						height={13}
						priority
						className="mr-3"
					/>
					<p className="text-sm text-slate-500 font-medium">© 2024 Fleetdart Technologies</p>
				</div>
			</div>

		</main>
	);
};