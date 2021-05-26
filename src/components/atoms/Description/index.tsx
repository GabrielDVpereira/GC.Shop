import { HtmlHTMLAttributes } from 'react'
import { Text } from './styles'

interface DescriptionProps extends HtmlHTMLAttributes<HTMLElement> {
  description: string; 
  textLimit: number; 
  className?: 'dark' | 'primary' | 'gray'
}
export function Description({ description, textLimit, ...rest }: DescriptionProps){

  // TODO - this could be more generic, we can pass size, text, color using props
  const sliceDescription = (text: string) => {
    return text.slice(0, textLimit) + "..."
  }

  return <Text {...rest}>{sliceDescription(description)}</Text>
}