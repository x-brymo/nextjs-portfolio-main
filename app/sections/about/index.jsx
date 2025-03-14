"use client";

import { HeadingDivider } from "components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My Name is Mahmoud Hafez. I successfully graduated Technical University ,
							Bachelor of Information Systems Higher Institute for Advanced Studies, Katameya, Cairo, Egypt

						</p>
						<p>
						During my university years, I developed a deep passion for Mobile apps , web apps programming, and I consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>So, officially, my programming August began in 2023 as a Flutter developer.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with Flutter.
						</p>
						<p>
							One day, I decided to try something new, and I started learning React. I was so
							excited to see how fast I can build a website with it, and how easy it is to maintain
							it. Consequently, I quickly learnt Next.js and I used it to build some 
							projects working in a team with a backend dev with my friends
						</p>
						{/* <p className="my-3.5">
							In december 2023, I had an opportunity to start working as a React developer for a
							company with the possibility of transitioning to mobile development. I was skeptical
							about it at first, but I decided to give it a try, and I don&lsquo;t regret it. Now, I
							thoroughly enjoy working with Flutter and Dart.
						</p> */}
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
