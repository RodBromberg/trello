import { ColumnContainer, ColumnTitle, CardContainer } from './styles/styles'

type ColumnProps = { 
    text: string
}

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <CardContainer>
            Generate App Scaffold
        </CardContainer>
        <CardContainer>
            Learn Typescript
        </CardContainer>
        <CardContainer>
            Static
        </CardContainer>
    </ColumnContainer>
  )
}

type ParentProps = {
    children: React.ReactNode
    name?: any
}

export const Parent: React.FC<ParentProps> = ({ children, name}) => {
    return (
    <div>
        <>
        {children}
        {name}
        </>
    </div>
        )
}
