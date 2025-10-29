function Stars({ count = 400, wrapperHeight = 7500 }) {
	const stars = Array.from({ length: count }, () => ({
		top: Math.random() * wrapperHeight + 'px',
		left: Math.random() * 100 + '%',
		duration: 1 + Math.random() * 2 + 's', // 1s to 3s
		delay: Math.random() * 2 + 's', // 0s to 2s delay
	}));

	return (
		<>
			{stars.map((star, i) => (
				<div
					key={i}
					className="star"
					style={{
						top: star.top,
						left: star.left,
						animationDuration: star.duration,
						animationDelay: star.delay,
					}}
				/>
			))}
		</>
	);
}

export default Stars;
