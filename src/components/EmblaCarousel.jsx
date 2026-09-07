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
			</div>

			<div className="embla__controls">
				<PrevButton
					onClick={onPrevButtonClick}
					disabled={prevBtnDisabled}
				/>

				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex
									? ' embla__dot--selected'
									: '',
							)}
						/>
					))}
				</div>

				<NextButton
					onClick={onNextButtonClick}
					disabled={nextBtnDisabled}
				/>
			</div>
		</section>
	);
};

export default EmblaCarousel;
