


export interface UploadProgressEvent extends ProgressEvent {
  percent: number;
}

export interface HttpRequesetOptions {
  headers: object;
  withCredentials: boolean;
  file: File;
  data: object;
  filename: string;
  action: string;
  onProgress: (e: UploadProgressEvent) => void;
  onSuccess: (response: any) => void;
  onError: (err: ErrorEvent) => void;
}
