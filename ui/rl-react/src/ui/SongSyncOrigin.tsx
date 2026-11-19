import Icon from "@mui/material/Icon";
import type { Origin } from "../api/song";

const iconByOrigin: Record<Origin, string> = {
  LEGACY: "question_mark",
  FROM_FILE_SYNC: "file_upload",
  FROM_CLOUD_SYNC: "cloud",
  FROM_DIRECT_INPUT: "keyboard",
};

export function SongSyncOrigin({ origin }: { origin?: Origin }) {
  const icon = origin ? iconByOrigin[origin] : undefined;
  return icon ? <Icon>{icon}</Icon> : null;
}
