'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './CategorySlider.module.css';

export default function CategorySlider({ categories }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px) to trigger a slide change
    const minSwipeDistance = 50;

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % categories.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, categories.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
        setIsAutoPlaying(false);
    };

    // Touch handlers for swipe support
    const onTouchStart = (e) => {
        setTouchEnd(null); // Reset touch end
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }
    };

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderContainer}>
                {/* Previous Button */}
                <button
                    onClick={goToPrevious}
                    className={`${styles.navButton} ${styles.prevButton}`}
                    aria-label="Previous category"
                >
                    <ChevronLeft size={32} strokeWidth={1.5} />
                </button>

                {/* Slider Track */}
                <div
                    className={styles.sliderTrack}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className={styles.slideContainer}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {categories.map((cat, index) => (
                            <Link
                                href={`/shop?category=${cat.path}`}
                                key={cat.path}
                                className={styles.categoryCard}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className={styles.categoryImage}
                                />
                                <div className={styles.categoryContent}>
                                    <h3>{cat.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={goToNext}
                    className={`${styles.navButton} ${styles.nextButton}`}
                    aria-label="Next category"
                >
                    <ChevronRight size={32} strokeWidth={1.5} />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className={styles.dotsContainer}>
                {categories.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
