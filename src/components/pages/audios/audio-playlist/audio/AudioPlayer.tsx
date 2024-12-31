import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { DocumentDownload, Pause, Play, Stop } from "iconsax-react";
import { Button, Progress } from "@nextui-org/react";
import FileSaver from "file-saver";

//Interfaces
import { IAudio } from "@/common/interfaces";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

//Utils
import { formatTime } from "@/common/utils";

interface IProps {
  audio: IAudio;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}
export const AudioPlayer: FC<IProps> = ({ audio, duration, setDuration }) => {
  //States
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //Refs
  const audioRef = useRef<HTMLAudioElement>(null);

  //Functions
  function togglePlayPause() {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  function stopAudio() {
    audioRef.current?.pause();
    (audioRef.current as HTMLAudioElement).currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  }

  function updateProgress() {
    const current = audioRef.current?.currentTime as number;
    const total = audioRef.current?.duration as number;
    setCurrentTime(current);
    setProgress((current / total) * 100);
    if (current === duration) {
      stopAudio();
    }
  }

  function handleSeek(e: MouseEvent<HTMLDivElement>) {
    const width = e.currentTarget.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const total = audioRef.current?.duration as number;
    (audioRef.current as HTMLAudioElement).currentTime =
      (clickX / width) * total;
  }

  function handleLoadedMetadata() {
    setDuration(audioRef.current?.duration as number);
  }

  function downloadAudio() {
    FileSaver.saveAs(`${SERVER_BASE_API_URL}${audio?.url}`, audio.title);
  }

  return (
    <div className="flex flex-col gap-1" dir="ltr">
      <audio
        ref={audioRef}
        src={`${SERVER_BASE_API_URL}${audio.url}`}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="flex items-center gap-2 justify-between">
        <span className="text-sm">{formatTime(currentTime)}</span>
        <Progress
          onClick={handleSeek}
          aria-label={audio.title}
          value={progress}
          className="flex-1"
          size="sm"
        />
        <span className="text-sm">{formatTime(duration)}</span>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Button
          isIconOnly
          onClick={downloadAudio}
          className=""
          color="primary"
          variant="flat"
          size="sm"
        >
          <DocumentDownload className="w-5 h-5" />
        </Button>
        <Button
          isIconOnly
          onClick={togglePlayPause}
          className=""
          color="primary"
          variant="flat"
          size="sm"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
        <Button
          isIconOnly
          onClick={stopAudio}
          className=""
          color="primary"
          variant="flat"
          size="sm"
        >
          <Stop className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
