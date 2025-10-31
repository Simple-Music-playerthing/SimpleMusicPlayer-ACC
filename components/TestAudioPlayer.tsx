// Audio player for testing
import { useState, useRef, useEffect, forwardRef } from 'react'

type AudioPlayerProps = {
    src: string;
};

const AudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps>(({ src }, ref) => {
    return <audio ref={ref} src={src} />;
});

export default AudioPlayer;