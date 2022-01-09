import React, { CSSProperties, useEffect, useState } from "react";
import Image from "next/Image";
import styles from "@Styles/Alternate/Quotes/Quotes.module.css";
import { combineClasses } from "@Utils";
import { IScreenWithOptionsProps } from "@Types/interfaces";
import { quotes } from "@Quotes";
import star from "@Public/star.png";

const Quotes = ({ isActive, options }: IScreenWithOptionsProps) => {
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
				<div className={styles.block}>
					<div className={styles.line}>
						<div className={styles.quote}>
							<div className={styles.content}>{quotes[0].content}</div>
							<div className={styles.star}>
								<Image src={star} layout="fill" objectFit="contain" />
							</div>
							<div className={styles.author}>{quotes[0].author}</div>
						</div>
						<div className={styles.divider}></div>
						<div className={styles.quote}>
							<div className={styles.content}>{quotes[1].content}</div>
							<div className={styles.star}>
								<Image src={star} layout="fill" objectFit="contain" />
							</div>
							<div className={styles.author}>{quotes[1].author}</div>
						</div>
					</div>
					<div className={styles.line}>
						<div className={styles.quote}>
							<div className={styles.content}>{quotes[2].content}</div>
							<div className={styles.star}>
								<Image src={star} layout="fill" objectFit="contain" />
							</div>
							<div className={styles.author}>{quotes[2].author}</div>
						</div>
						<div className={styles.divider}></div>
					</div>
					<div className={styles.line}>
						<div className={styles.divider}></div>
						<div className={styles.quote}>
							<div className={styles.content}>{quotes[3].content}</div>
							<div className={styles.star}>
								<Image src={star} layout="fill" objectFit="contain" />
							</div>
							<div className={styles.author}>{quotes[3].author}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Quotes;
