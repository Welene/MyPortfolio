import React, { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
		if (onButtonClick) onButtonClick(emblaApi);
	}, [emblaApi, onButtonClick]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
		if (onButtonClick) onButtonClick(emblaApi);
	}, [emblaApi, onButtonClick]);

	const onSelect = useCallback((emblaApi) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

export const PrevButton = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			className="embla__button embla__button--prev"
			type="button"
			aria-label="Previous slide"
			{...restProps}>
			<svg viewBox="0 0 24 24" className="embla__button__svg">
				<path
					d="M15.5 3.5 L7 12 L15.5 20.5"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			{children}
		</button>
	);
};

export const NextButton = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			className="embla__button embla__button--next"
			type="button"
			aria-label="Next slide"
			{...restProps}>
			<svg viewBox="0 0 24 24" className="embla__button__svg">
				<path
					d="M8.5 3.5 L17 12 L8.5 20.5"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			{children}
		</button>
	);
};
