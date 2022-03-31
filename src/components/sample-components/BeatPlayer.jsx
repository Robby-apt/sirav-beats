import React, { useState, useRef, useEffect } from 'react';

const BeatPlayer = (props) => {
	// state
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	// references
	const audioPlayer = useRef(); // reference our audio component
	const progressBar = useRef(); // reference our progress bar
	const animationRef = useRef(); // reference the animation

	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [
		audioPlayer?.current?.loadedmetadata,
		audioPlayer?.current?.readyState,
	]);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);
		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			'--seek-before-width',
			`${(progressBar.current.value / duration) * 100}%`
		);
		setCurrentTime(progressBar.current.value);
	};

	const backFive = () => {
		progressBar.current.value = Number(progressBar.current.value - 5);
		changeRange();
	};

	const forwardFive = () => {
		progressBar.current.value = Number(progressBar.current.value + 5);
		changeRange();
	};

	return (
		<div className="audioPlayer">
			<audio ref={audioPlayer} src={props.audio} preload="metadata" />

			<div className="audioStats">
				{/* current time */}
				<div className="currentTime">{calculateTime(currentTime)}</div>

				{/* progress bar */}
				<div className="progressBarContainer">
					<input
						type="range"
						className="progressBar"
						defaultValue="0"
						ref={progressBar}
						onChange={changeRange}
					/>
				</div>

				{/* duration */}
				<div className="duration">
					{duration && !isNaN(duration) && calculateTime(duration)}
				</div>
			</div>

			<div className="audioControls">
				<button className="forwardBackward" onClick={backFive}>
					<i class="fa-solid fa-angles-left" />
				</button>
				<button onClick={togglePlayPause} className="playPause">
					{isPlaying ? (
						<i class="fa-regular fa-circle-pause playPauseBtn" />
					) : (
						<i class="fa-regular fa-circle-play playPauseBtn" />
					)}
				</button>
				<button className="forwardBackward" onClick={forwardFive}>
					<i class="fa-solid fa-angles-right"/>
				</button>
			</div>
		</div>
	);
};

export default BeatPlayer;
