import React from "react";
import { KvartetDisplay } from "..";
import { IKvartet } from "../../types";

export default function Intro({ kvartet }: IKvartet): JSX.Element {
	return (
		<section>
			<div>
				test
				<KvartetDisplay kvartet={kvartet} />
			</div>
		</section>
	);
}
