import { forwardRef } from 'react'

const AudioPlayer = forwardRef((props, ref) => {
    return <audio ref={ref} src={props.src} onEnded={props.ended}/>;
});

export default AudioPlayer;