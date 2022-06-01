export const isSSL = <T extends { cert?: string | undefined; key?: string | undefined }>(
  v: T,
): v is T & { cert: string; key: string } => !!v.key && !!v.cert
