import { useCallback } from "react";

export const nextCarousel = useCallback(() => {
    setActive(prev =>
        prev === images.length - 1 ? 0 : prev + 1
    );
}, []);

export const prevCarousel = useCallback(() => {
    setActive(prev =>
        prev === 0 ? images.length - 1 : prev - 1
    );
}, []);