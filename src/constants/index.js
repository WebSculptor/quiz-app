import {
  AiOutlineSwapRight as NextIcon,
  AiOutlineSwapLeft as PrevIcon,
} from "react-icons/ai";
import {
  IoMdVolumeHigh as VolumeOnIcon,
  IoMdVolumeOff as VolumeOffIcon,
} from "react-icons/io";

export { NextIcon, PrevIcon, VolumeOnIcon, VolumeOffIcon };

export const difficultyOptions = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Medium" },
  { id: "hard", name: "Hard" },
];

export const typeOptions = [
  { id: "multiple", name: "Multiple Choices" },
  { id: "boolean", name: "True or False" },
];
