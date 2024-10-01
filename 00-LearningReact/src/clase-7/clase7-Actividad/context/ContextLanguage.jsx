import { createContext } from "react"

export const ContextLanguage = createContext()

export const DataLanguage = ({children}) => {

  return (
    <ContextLanguage.Provider>
      {children}
    </ContextLanguage.Provider>
  )
}
