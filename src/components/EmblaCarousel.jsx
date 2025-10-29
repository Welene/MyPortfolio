import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './EmblaCarousel.css';

import { DotButton, useDotButton } from './EmblaCarouselDots';
// import {
// 	PrevButton,
// 	NextButton,
// 	usePrevNextButtons,
// } from './EmblaCarouselArrows';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = (props) => {
	const { slides = [], options, className = '' } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	const onNavButtonClick = useCallback((emblaApi) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick
	);

	// const {
	// 	prevBtnDisabled,
	// 	nextBtnDisabled,
	// 	onPrevButtonClick,
	// 	onNextButtonClick,
	// } = usePrevNextButtons(emblaApi, onNavButtonClick);

	return (
		<section className={`embla ${className}`}>
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((src, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__inner">
								<img
									className="embla__slide__img"
									src={src}
									alt={`Slide ${index + 1}`}
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <div className="embla__controls"> */}
			{/* <div className="embla__buttons">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div> */}

			<div className="embla__dots">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={'embla__dot'.concat(
							index === selectedIndex
								? ' embla__dot--selected'
								: ''
						)}
					/>
				))}
			</div>
			{/* </div> */}
		</section>
	);
};

export default EmblaCarousel;

// export function EmblaCarousel({ photos = [] }) {
// 	const [emblaRef, emblaApi] = useEmblaCarousel();
// 	const [selectedIndex, setSelectedIndex] = useState(0);

// 	const onSelect = useCallback(() => {
// 		if (!emblaApi) return;
// 		setSelectedIndex(emblaApi.selectedScrollSnap());
// 	}, [emblaApi]);

// 	useEffect(() => {
// 		if (!emblaApi) return;
// 		emblaApi.on('select', onSelect);
// 		onSelect();
// 	}, [emblaApi, onSelect]);

// 	const scrollTo = useCallback(
// 		(index) => emblaApi && emblaApi.scrollTo(index),
// 		[emblaApi]
// 	);

// 	const scrollPrev = useCallback(
// 		() => emblaApi && emblaApi.scrollPrev(),
// 		[emblaApi]
// 	);
// 	const scrollNext = useCallback(
// 		() => emblaApi && emblaApi.scrollNext(),
// 		[emblaApi]
// 	);

// 	return (
// 		<div className="embla">
// 			<div className="embla__viewport" ref={emblaRef}>
// 				<button
// 					className="embla__arrow embla__arrow--prev"
// 					onClick={scrollPrev}
// 					aria-label="Previous slide">
// 					◀
// 				</button>
// 				<button
// 					className="embla__arrow embla__arrow--next"
// 					onClick={scrollNext}
// 					aria-label="Next slide">
// 					▶
// 				</button>
// 				<div className="embla__container">
// 					{photos.map((src, index) => (
// 						<div className="embla__slide" key={index}>
// 							<figure className="embla__slide-figure">
// 								<img
// 									src={src}
// 									alt={`Slide ${index + 1}`}
// 									className="embla__slide-img"
// 								/>
// 							</figure>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			<div className="embla__dots">
// 				{photos.map((_, index) => (
// 					<button
// 						key={index}
// 						onClick={() => scrollTo(index)}
// 						className={`embla__dot ${
// 							index === selectedIndex ? 'is-selected' : ''
// 						}`}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// }
