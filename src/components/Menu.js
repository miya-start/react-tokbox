import { CameraIcon } from '@heroicons/react/solid'
import { useVideoDispatch } from '../contexts/video-context'

export default function Menu() {
  const videoDispatch = useVideoDispatch()
  return (
    <div className="flex justify-center h-[50px] gap-4 text-sm text-gray-400">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => videoDispatch({ type: 'video' })}
      >
        <div>カメラ</div>
        <CameraIcon width={44} height={44} />
      </div>
      <div>
        <div>音声</div>
      </div>
      <div>
        <div>画面共有</div>
      </div>
    </div>
  )
}
