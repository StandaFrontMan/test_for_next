import { Fragment, memo, useCallback } from 'react'

const MainComponent = () => {
  // const makeLog = () => console.log('hi from MainComponent'); // function to make logs from MainComponent

  // обычная практика оптимизации, с которой риходится сталкиваться каждый день
  const makeLog = useCallback(() => {
    console.log('hi from MainComponent')
  }, [])

  return (
    <Fragment>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  )
}

// memoized component
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>say Hi from ChildComponent</button>
))
