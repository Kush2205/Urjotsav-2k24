"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import images from '../utils/importImages';

const allImages = Object.values(images);
const numImages = allImages.length;
const columnSize = Math.ceil(numImages / 4);

const column1 = allImages.slice(0, columnSize);
const column2 = allImages.slice(columnSize, columnSize * 2);
const column3 = allImages.slice(columnSize * 2, columnSize * 3);
const column4 = allImages.slice(columnSize * 3, numImages);

function LazyImage({ src, alt }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="mb-4 overflow-hidden rounded-2xl border-2 border-blue-100">
            {inView ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover"
                />
            ) : (
                <div className="w-full h-auto bg-gray-200"></div>
            )}
        </div>
    );
}

function Gallery() {

    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-[90vw] h-full">
                <div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl mt-[100px] font-semibold font-['megrim'] text-white text-center mb-8 md:mb-12 p-5">
                        Gallery
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-wrap md:w-1/2">
                        <div className="w-full sm:w-1/2 p-1">
                            {column1.map((image, index) => (
                                <LazyImage key={index} src={image} alt={`Image ${index + 1}`} />
                            ))}
                        </div>
                        <div className="w-full sm:w-1/2 p-1">
                            {column2.map((image, index) => (
                                <LazyImage key={index} src={image} alt={`Image ${index + 1}`} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap md:w-1/2">
                        <div className="w-full sm:w-1/2 p-1">
                            {column3.map((image, index) => (
                                <LazyImage key={index} src={image} alt={`Image ${index + 1}`} />
                            ))}
                        </div>
                        <div className="w-full sm:w-1/2 p-1">
                            {column4.map((image, index) => (
                                <LazyImage key={index} src={image} alt={`Image ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
