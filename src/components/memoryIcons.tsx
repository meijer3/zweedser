import type { JSX } from "solid-js";

type IconProps = JSX.SvgSVGAttributes<SVGSVGElement>;

// bil: NL = bil (buttock), SV = auto (car)
export function ButtIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Bil</title>
			<ellipse cx="24" cy="36" rx="14" ry="16" fill="#ffcc80" />
			<ellipse cx="40" cy="36" rx="14" ry="16" fill="#ffcc80" />
			<line x1="32" y1="22" x2="32" y2="50" stroke="#e6b06e" stroke-width="2" />
		</svg>
	);
}

export function CarIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Auto</title>
			<rect x="8" y="24" width="48" height="20" rx="4" fill="#3a6b1e" />
			<rect x="16" y="14" width="32" height="16" rx="3" fill="#7cb342" />
			<circle cx="18" cy="46" r="5" fill="#333" />
			<circle cx="18" cy="46" r="2" fill="#999" />
			<circle cx="46" cy="46" r="5" fill="#333" />
			<circle cx="46" cy="46" r="2" fill="#999" />
			<rect x="20" y="18" width="10" height="8" rx="1" fill="#b3e5fc" />
			<rect x="34" y="18" width="10" height="8" rx="1" fill="#b3e5fc" />
			<circle cx="10" cy="30" r="2" fill="#ffee58" />
			<circle cx="54" cy="30" r="2" fill="#ef5350" />
		</svg>
	);
}

// bord: NL = bord (plate), SV = tafel (table)
export function PlateIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Bord</title>
			<ellipse cx="32" cy="36" rx="22" ry="14" fill="#e0e0e0" />
			<ellipse cx="32" cy="34" rx="22" ry="14" fill="#f5f5f5" />
			<ellipse cx="32" cy="34" rx="14" ry="8" fill="#fff" />
			<circle cx="26" cy="32" r="2" fill="#66bb6a" />
			<circle cx="36" cy="30" r="3" fill="#ef5350" />
			<circle cx="32" cy="36" r="2" fill="#ffa726" />
		</svg>
	);
}

export function TableIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Tafel</title>
			<rect x="8" y="20" width="48" height="6" rx="2" fill="#8d6e63" />
			<rect x="12" y="26" width="4" height="24" rx="1" fill="#6d4c41" />
			<rect x="48" y="26" width="4" height="24" rx="1" fill="#6d4c41" />
			<ellipse cx="32" cy="16" rx="8" ry="3" fill="#7cb342" />
			<rect x="30" y="10" width="4" height="10" rx="1" fill="#4caf50" />
			<circle cx="28" cy="10" r="2" fill="#c62828" />
		</svg>
	);
}

// dike: NL = dijk (levee), SV = sloot (ditch)
export function DykeIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Dijk</title>
			<rect x="0" y="40" width="64" height="24" rx="0" fill="#42a5f5" />
			<path d="M0 40 Q16 20 32 18 Q48 20 64 40 Z" fill="#8bc34a" />
			<path d="M0 44 L64 44" stroke="#1e88e5" stroke-width="1" />
			<rect x="28" y="10" width="8" height="12" rx="1" fill="#795548" />
			<circle cx="32" cy="8" r="4" fill="#4caf50" />
		</svg>
	);
}

export function DitchIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Sloot</title>
			<rect x="0" y="0" width="64" height="64" fill="#8bc34a" rx="4" />
			<path
				d="M0 30 Q16 44 32 38 Q48 32 64 42 L64 54 Q48 44 32 50 Q16 56 0 42 Z"
				fill="#42a5f5"
			/>
			<path
				d="M0 34 Q16 48 32 42 Q48 36 64 46 L64 58 Q48 48 32 54 Q16 60 0 46 Z"
				fill="#1e88e5"
			/>
			<path
				d="M4 24 L8 16 L6 24"
				stroke="#4caf50"
				stroke-width="1.5"
				fill="none"
			/>
			<path
				d="M56 22 L60 12 L58 22"
				stroke="#4caf50"
				stroke-width="1.5"
				fill="none"
			/>
		</svg>
	);
}

// glass: NL = glas (drinking glass), SV = ijsje (ice cream)
export function GlassIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Glas</title>
			<path
				d="M20 12 L22 40 L42 40 L44 12 Z"
				fill="#e3f2fd"
				stroke="#90caf9"
				stroke-width="1.5"
			/>
			<rect x="28" y="40" width="8" height="10" rx="1" fill="#90caf9" />
			<rect x="22" y="50" width="20" height="4" rx="2" fill="#90caf9" />
			<path d="M22 20 L42 20" stroke="#bbdefb" stroke-width="1" />
			<ellipse cx="32" cy="26" rx="6" ry="2" fill="#bbdefb" opacity="0.5" />
		</svg>
	);
}

export function IceCreamIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>IJsje</title>
			<polygon points="24,36 40,36 32,58" fill="#d4a24e" />
			<circle cx="32" cy="30" r="10" fill="#f8bbd0" />
			<circle cx="24" cy="26" r="8" fill="#fff9c4" />
			<circle cx="40" cy="26" r="8" fill="#a5d6a7" />
			<circle cx="26" cy="22" r="2" fill="#c62828" />
			<circle cx="36" cy="20" r="1.5" fill="#c62828" />
		</svg>
	);
}

// orm: NL = worm, SV = slang (snake)
export function WormIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Worm</title>
			<rect x="0" y="44" width="64" height="20" rx="0" fill="#8d6e63" />
			<path
				d="M20 44 Q20 28 28 28 Q36 28 36 38 Q36 44 42 44"
				stroke="#e91e63"
				stroke-width="5"
				stroke-linecap="round"
				fill="none"
			/>
			<circle cx="20" cy="44" r="4" fill="#e91e63" />
			<circle cx="18" cy="42" r="1.2" fill="#fff" />
			<circle cx="22" cy="42" r="1.2" fill="#fff" />
			<circle cx="18" cy="42" r="0.6" fill="#333" />
			<circle cx="22" cy="42" r="0.6" fill="#333" />
		</svg>
	);
}

export function SnakeIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Slang</title>
			<path
				d="M12 48 Q12 20 24 20 Q36 20 36 36 Q36 48 48 48 Q56 48 56 40 L56 36"
				stroke="#4caf50"
				stroke-width="5"
				stroke-linecap="round"
				fill="none"
			/>
			<circle cx="56" cy="32" r="5" fill="#388e3c" />
			<circle cx="54" cy="30" r="1.5" fill="#fff" />
			<circle cx="58" cy="30" r="1.5" fill="#fff" />
			<circle cx="54" cy="30" r="0.8" fill="#333" />
			<circle cx="58" cy="30" r="0.8" fill="#333" />
			<path d="M56 36 L54 40 L58 40 Z" fill="#c62828" />
		</svg>
	);
}

// snor: NL = snor (moustache), SV = snottebel (runny nose)
export function MoustacheIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Snor</title>
			<path
				d="M8 32 Q14 24 22 30 Q28 34 32 30 Q36 34 42 30 Q50 24 56 32 Q50 40 42 36 Q36 32 32 36 Q28 32 22 36 Q14 40 8 32 Z"
				fill="#5d4037"
			/>
		</svg>
	);
}

export function SnotIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Snottebel</title>
			<circle cx="32" cy="28" r="16" fill="#ffcc80" />
			<circle cx="26" cy="24" r="3" fill="#fff" />
			<circle cx="38" cy="24" r="3" fill="#fff" />
			<circle cx="26" cy="24" r="1.5" fill="#333" />
			<circle cx="38" cy="24" r="1.5" fill="#333" />
			<ellipse cx="32" cy="32" rx="4" ry="3" fill="#ffab91" />
			<path
				d="M30 38 Q32 44 34 38"
				stroke="#81c784"
				stroke-width="2.5"
				stroke-linecap="round"
				fill="#a5d6a7"
			/>
			<path
				d="M28 16 Q26 10 30 12"
				stroke="#ffcc80"
				stroke-width="2"
				fill="none"
			/>
			<path
				d="M36 16 Q38 10 34 12"
				stroke="#ffcc80"
				stroke-width="2"
				fill="none"
			/>
		</svg>
	);
}

// NL flag — desaturated / greyscale tint
export function NlFlag(props: IconProps) {
	return (
		<svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>Nederlandse vlag</title>
			<defs>
				<filter id="nl-desat">
					<feColorMatrix type="saturate" values="0.35" />
				</filter>
			</defs>
			<rect width="36" height="24" rx="3" fill="#ddd" />
			<g filter="url(#nl-desat)">
				<rect x="1" y="1" width="34" height="7.3" rx="2" fill="#AE1C28" />
				<rect x="1" y="8.3" width="34" height="7.3" fill="#FFF" />
				<rect x="1" y="15.6" width="34" height="7.3" rx="2" fill="#21468B" />
			</g>
			<rect
				x="1"
				y="1"
				width="34"
				height="22"
				rx="2"
				stroke="#bbb"
				stroke-width="0.8"
				fill="none"
			/>
		</svg>
	);
}

// Swedish flag — desaturated / greyscale tint
export function SvFlag(props: IconProps) {
	return (
		<svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>Zweedse vlag</title>
			<defs>
				<filter id="sv-desat">
					<feColorMatrix type="saturate" values="0.35" />
				</filter>
			</defs>
			<rect width="36" height="24" rx="3" fill="#ddd" />
			<g filter="url(#sv-desat)">
				<rect x="1" y="1" width="34" height="22" rx="2" fill="#006AA7" />
				<rect x="11" y="1" width="4.5" height="22" fill="#FECC00" />
				<rect x="1" y="9.5" width="34" height="5" fill="#FECC00" />
			</g>
			<rect
				x="1"
				y="1"
				width="34"
				height="22"
				rx="2"
				stroke="#bbb"
				stroke-width="0.8"
				fill="none"
			/>
		</svg>
	);
}

// god: NL = god (deity), SV = goed (good/thumbs up)
export function DeityIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>God</title>
			<circle cx="32" cy="20" r="10" fill="#ffcc80" />
			<path d="M22 32 L42 32 L40 54 L24 54 Z" fill="#fff" />
			<circle
				cx="32"
				cy="10"
				r="14"
				fill="none"
				stroke="#fdd835"
				stroke-width="2"
			/>
			<circle cx="28" cy="18" r="1.5" fill="#333" />
			<circle cx="36" cy="18" r="1.5" fill="#333" />
			<path
				d="M28 24 Q32 28 36 24"
				stroke="#333"
				stroke-width="1.2"
				fill="none"
			/>
		</svg>
	);
}

export function ThumbsUpIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Duim omhoog</title>
			<path
				d="M28 44 L28 24 Q28 16 34 14 L36 14 L36 24 L46 24 Q50 24 50 28 L48 44 Q48 48 44 48 L32 48 Q28 48 28 44 Z"
				fill="#ffcc80"
				stroke="#e6b06e"
				stroke-width="1.5"
			/>
			<rect x="16" y="24" width="10" height="24" rx="2" fill="#7cb342" />
		</svg>
	);
}

// glass (extra set): NL = glas, SV = ijsje — already defined above

// rock: NL = rok (skirt), SV = overjas (coat)
export function SkirtIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Rok</title>
			<path d="M24 16 L40 16 L48 52 L16 52 Z" fill="#e91e63" />
			<rect x="24" y="12" width="16" height="6" rx="2" fill="#c2185b" />
			<path
				d="M24 16 L32 52"
				stroke="#ad1457"
				stroke-width="0.8"
				opacity="0.3"
			/>
			<path
				d="M40 16 L32 52"
				stroke="#ad1457"
				stroke-width="0.8"
				opacity="0.3"
			/>
		</svg>
	);
}

export function CoatIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Jas</title>
			<path
				d="M20 16 L28 12 L36 12 L44 16 L46 48 L36 48 L36 52 L28 52 L28 48 L18 48 Z"
				fill="#5d4037"
			/>
			<rect x="30" y="12" width="4" height="36" rx="0" fill="#4e342e" />
			<rect x="22" y="16" width="6" height="4" rx="1" fill="#795548" />
			<rect x="36" y="16" width="6" height="4" rx="1" fill="#795548" />
			<circle cx="32" cy="22" r="1.2" fill="#fdd835" />
			<circle cx="32" cy="30" r="1.2" fill="#fdd835" />
			<circle cx="32" cy="38" r="1.2" fill="#fdd835" />
		</svg>
	);
}

// stor: NL = stoer (tough), SV = groot (big)
export function ToughIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Stoer</title>
			<circle cx="32" cy="22" r="10" fill="#ffcc80" />
			<rect x="22" y="32" width="20" height="22" rx="3" fill="#333" />
			<rect x="18" y="32" width="8" height="16" rx="2" fill="#333" />
			<rect x="38" y="32" width="8" height="16" rx="2" fill="#333" />
			<circle cx="28" cy="20" r="1.5" fill="#333" />
			<circle cx="36" cy="20" r="1.5" fill="#333" />
			<path
				d="M28 26 L36 26"
				stroke="#333"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export function BigIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Groot</title>
			<circle cx="20" cy="44" r="8" fill="#90caf9" />
			<circle cx="20" cy="44" r="3" fill="#333" />
			<circle cx="44" cy="30" r="18" fill="#42a5f5" />
			<circle cx="44" cy="30" r="7" fill="#333" />
			<path
				d="M30 50 L14 58"
				stroke="#666"
				stroke-width="1"
				stroke-dasharray="2"
			/>
		</svg>
	);
}

// puss: NL = poes (cat), SV = kus (kiss)
export function CatIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Kat</title>
			<ellipse cx="32" cy="36" rx="16" ry="14" fill="#ff8a65" />
			<polygon points="18,28 14,12 24,24" fill="#ff8a65" />
			<polygon points="46,28 50,12 40,24" fill="#ff8a65" />
			<circle cx="26" cy="32" r="2.5" fill="#fff" />
			<circle cx="38" cy="32" r="2.5" fill="#fff" />
			<circle cx="26" cy="32" r="1.2" fill="#333" />
			<circle cx="38" cy="32" r="1.2" fill="#333" />
			<ellipse cx="32" cy="38" rx="2" ry="1.5" fill="#e91e63" />
			<path d="M24 40 Q20 42 16 40" stroke="#ff8a65" stroke-width="1" />
			<path d="M40 40 Q44 42 48 40" stroke="#ff8a65" stroke-width="1" />
		</svg>
	);
}

export function KissIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Kus</title>
			<path
				d="M20 28 Q20 16 32 16 Q44 16 44 28 Q44 40 32 48 Q20 40 20 28 Z"
				fill="#e91e63"
			/>
			<path
				d="M32 16 Q32 28 44 28"
				stroke="#c2185b"
				stroke-width="1"
				fill="none"
			/>
			<circle cx="28" cy="26" r="2" fill="#f48fb1" opacity="0.6" />
		</svg>
	);
}

// vrede: NL = vrede (peace), SV = woede (anger)
export function PeaceIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Vrede</title>
			<circle
				cx="32"
				cy="32"
				r="20"
				fill="none"
				stroke="#7cb342"
				stroke-width="3"
			/>
			<line x1="32" y1="12" x2="32" y2="52" stroke="#7cb342" stroke-width="3" />
			<line x1="32" y1="32" x2="18" y2="46" stroke="#7cb342" stroke-width="3" />
			<line x1="32" y1="32" x2="46" y2="46" stroke="#7cb342" stroke-width="3" />
		</svg>
	);
}

export function AngerIcon(props: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Woede</title>
			<circle cx="32" cy="30" r="16" fill="#ffcc80" />
			<path
				d="M22 24 L28 28"
				stroke="#c62828"
				stroke-width="2.5"
				stroke-linecap="round"
			/>
			<path
				d="M42 24 L36 28"
				stroke="#c62828"
				stroke-width="2.5"
				stroke-linecap="round"
			/>
			<circle cx="27" cy="30" r="2" fill="#333" />
			<circle cx="37" cy="30" r="2" fill="#333" />
			<path
				d="M24 38 Q32 34 40 38"
				stroke="#333"
				stroke-width="2"
				fill="none"
			/>
			<path d="M16 14 L22 20" stroke="#c62828" stroke-width="2" />
			<path d="M48 14 L42 20" stroke="#c62828" stroke-width="2" />
			<path d="M32 8 L32 16" stroke="#c62828" stroke-width="2" />
		</svg>
	);
}

export const memoryPairs = [
	{ nlWord: "bil", svWord: "bil", nlIcon: ButtIcon, svIcon: CarIcon },
	{ nlWord: "bord", svWord: "bord", nlIcon: PlateIcon, svIcon: TableIcon },
	{ nlWord: "dijk", svWord: "dike", nlIcon: DykeIcon, svIcon: DitchIcon },
	{ nlWord: "glas", svWord: "glass", nlIcon: GlassIcon, svIcon: IceCreamIcon },
	{ nlWord: "worm", svWord: "orm", nlIcon: WormIcon, svIcon: SnakeIcon },
	{ nlWord: "snor", svWord: "snor", nlIcon: MoustacheIcon, svIcon: SnotIcon },
	{ nlWord: "god", svWord: "god", nlIcon: DeityIcon, svIcon: ThumbsUpIcon },
	{ nlWord: "rok", svWord: "rock", nlIcon: SkirtIcon, svIcon: CoatIcon },
	{ nlWord: "stoer", svWord: "stor", nlIcon: ToughIcon, svIcon: BigIcon },
	{ nlWord: "poes", svWord: "puss", nlIcon: CatIcon, svIcon: KissIcon },
	{ nlWord: "vrede", svWord: "vrede", nlIcon: PeaceIcon, svIcon: AngerIcon },
];
