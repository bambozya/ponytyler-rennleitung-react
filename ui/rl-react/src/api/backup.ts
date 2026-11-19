import { apiUrl, http } from "./http";

export const backupDownloadUrl = `${apiUrl}api/backup/download`;

export async function isDownloadPossible(): Promise<boolean> {
  try {
    return Boolean(await http.get<boolean>("api/backup/download-possible"));
  } catch {
    return false;
  }
}
