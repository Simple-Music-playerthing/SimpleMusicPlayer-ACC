import { forwardRef } from 'react'

const AudioPlayer = forwardRef((props, ref) => {
    return <audio ref={ref} src={props.src}/>;
});

export default AudioPlayer;