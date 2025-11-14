import { useState, useRef, useEffect, forwardRef } from 'react'

// type AudioPlayerProps = {
//     src: string;
// };

// const AudioPlayer = forwardRef<HTMLAudioElement | null>(({ src }, ref) => {
//     return <audio ref={ref} src={src} />;
// });
// function AudioPlayer({src, ref}) {
//     return <audio ref={ref} src={src}/>;
// }
const AudioPlayer = forwardRef((props, ref) => {
    return <audio ref={ref} src={props.src}/>;
});

export default AudioPlayer;