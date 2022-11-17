import { useEffect } from 'react'

export const useAsyncComponentDidMount = (fn: () => void) => {
  useEffect(() => {
    fn()
  }, [])
}
