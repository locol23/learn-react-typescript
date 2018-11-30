export interface HeaderProps {
  title: string
}

export interface ButtonProps {
  handler: (str: string) => void
  value: string
}

export interface FooterProps {
  text: string
}

export type ContentsProps = HeaderProps & FooterProps & ButtonProps
