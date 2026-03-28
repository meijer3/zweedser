interface WaveDividerProps {
	topColor: string;
	bottomColor: string;
	flip?: boolean;
}

export default function WaveDivider(props: WaveDividerProps) {
	return (
		<div
			class="w-full h-[60px] md:h-[80px] lg:h-[100px] -mt-px"
			style={{ background: props.bottomColor }}
		>
			<svg
				viewBox="0 0 1440 120"
				preserveAspectRatio="none"
				role="presentation"
				class="block w-full h-full"
				style={{
					transform: props.flip ? "scaleY(-1)" : undefined,
				}}
			>
				<path
					d="M0,0 L0,80 C240,120 480,40 720,60 C960,80 1200,120 1440,80 L1440,0 Z"
					fill={props.topColor}
				/>
			</svg>
		</div>
	);
}
