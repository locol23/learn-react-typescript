export interface TextProps {
  text: string | number
}

export interface ButtonProps {
  name: string
  handler: () => void
}

export type ContentsProps = ButtonProps
