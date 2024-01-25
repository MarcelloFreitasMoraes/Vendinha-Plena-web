export interface Storage {
  get: (key: string) => any
  set: (key: string, value: object) => void
}
