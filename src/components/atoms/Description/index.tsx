import { HtmlHTMLAttributes } from 'react'
import { Text } from './styles'

interface DescriptionProps extends HtmlHTMLAttributes<HTMLElement> {
  description: string; 
  textLimit?: number; 
  color?: 'dark' | 'primary' | 'gray'
  size?: 'lg' | 'md'| 'sm'
}
export function Description({ description, textLimit, className = 'dark', size="md" ,...rest }: DescriptionProps){

  // TODO - this could be more generic, we can pass size, text, color using props
  const sliceDescription = (text: string) => {
    if(!textLimit) return text
    return text.slice(0, textLimit) + "..."
  }

  return <Text size={size} className={className} {...rest}>{sliceDescription(description)}</Text>
}