import React, { CSSProperties, useEffect, useState } from "react";
import Image from "next/Image";
import styles from "@Styles/Alternate/Member/Member.module.css";
import { combineClasses, withAssetPrefix } from "@Utils";
import {
	IMemberScreenOptions,
	IMemberScreenProps,
	IScreenProps,
} from "@Types/interfaces";
import star from "@Public/star.png";

const Member = ({ isActive, member, options }: IMemberScreenProps) => {
	let [appeared, setAppeared] = useState(false);
	useEffect(() => {
		let appearance = setTimeout(() => setAppeared(true), 20);

		return () => clearTimeout(appearance);
	}, []);

	return (
		<section
			className={combineClasses(
				styles.wrapper,
				"appScreen",
				(options as IMemberScreenOptions).reversed ? styles.reversed : "",
				!isActive || !appeared ? styles.inactive : ""
			)}
		>
			{options.decorators.map((d, i) => (
				<div
					key={`decorator-${i}`}
					className={styles.decorator}
					style={
						{
							"--width": d.width + "px",
							"--height": d.height + "px",
							"--opacity": d.opacity ? d.opacity : ".7",
							"--color": d.color,
							"--delay": `0.${(i + 1) * 5}`,
							[`${d.position.top ? "--top" : "--bottom"}`]: d.position.top
								? d.position.top + "px"
								: d.position.bottom + "px",
							[`${d.position.left ? "--left" : "--right"}`]: d.position.left
								? d.position.left + "px"
								: d.position.right + "px",
						} as CSSProperties
					}
				></div>
			))}
			<div className={styles.animator}>
				<div className={styles.memberInner}>
					<div className={styles.image}>
						<Image
							src={withAssetPrefix(member.preview)}
							layout="fill"
							objectFit="contain"
						/>
					</div>
					<div className={styles.data}>
						<div className={styles.info}>
							<h3 className={combineClasses(styles.heading, styles.name)}>
								{member.name}
							</h3>
							<div className={styles.divider}>
								<Image src={star} layout="fill" objectFit="contain" />
							</div>
							<h3 className={combineClasses(styles.heading, styles.instrument)}>
								{member.instrument}
							</h3>
						</div>
						<div className={styles.text}>
							<p>{member.about}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Member;
