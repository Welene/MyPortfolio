import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './EmblaCarousel.css';

import { DotButton, useDotButton } from './EmblaCarouselDots';
import {
	PrevButton,
	NextButton,
	usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = (props) => {
	const { slides = [], options, className = '' } = props;

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			...options,
			axis: 'y',
			align: 'start',
		},
		[Autoplay()],
	);

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
		onNavButtonClick,
	);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavButtonClick);

	return (
		<section className={`embla ${className}`}>
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__inner">
								<img
									className="embla__slide__img"
									src={slide.src}
									alt={slide.alt || `Slide ${index + 1}`}
								/>
								{slide.caption && (
									<p className="embla__slide__caption">
										{slide.caption}
									</p>
								)}
							</div>
						</div>
					))}
				</div>

				<div className="embla__buttons">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					{/* loading bar for carousel / picture process */}
					<div
						className="embla__progress"
						role="group"
						aria-label="Carousel progress">
						<span
							className="embla__counter"
							aria-live="polite"
							aria-atomic="true">
							{selectedIndex + 1} / {scrollSnaps.length}
						</span>

						<div
							className="embla__progress-track"
							role="progressbar"
							aria-label="Slides viewed"
							aria-valuemin={1}
							aria-valuemax={scrollSnaps.length}
							aria-valuenow={selectedIndex + 1}>
							<div
								className="embla__progress-fill"
								style={{
									width: `${
										((selectedIndex + 1) /
											scrollSnaps.length) *
										100
									}%`,
								}}
							/>
						</div>
					</div>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
