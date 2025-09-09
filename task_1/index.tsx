import { Component, FC, memo, useMemo } from 'react'

type IUser = {
  name: string
  age: number
}

type IProps = {
  user: IUser
}

// functional component
// const FirstComponent = ({ name, age }: IUser) => (
//     <div>
//         my name is {name}, my age is {age}
//     </div>
// );

// пропсы не меняются, можно обойтись лишь memo
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
))

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
// const SecondComponent = ({ user: { name, age } }: IProps) => (
//   <div>
//     my name is {name}, my age is {age}
//   </div>
// )

// я бы сделал так
const HOC: FC = () => {
  const memoizedStanislav = useMemo<IUser>(
    () => ({
      name: 'Stanislav',
      age: 23,
    }),
    [],
  )

  return <SecondComponent user={memoizedStanislav} />
}

// class component
// class ThirdComponent extends Component<IUser> {
//     render() {
//         return (
//             <div>
//                 my name is {this.props.name}, my age is {this.props.age}
//             </div>
//         )
//     }
// }

class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(nextProps: IUser) {
    return (
      this.props.name !== nextProps.name || this.props.age !== nextProps.age
    )
  }

  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    )
  }
}

// class component
// class FourthComponent extends Component<IProps> {
//   render() {
//     return (
//       <div>
//         my name is {this.props.user.name}, my age is {this.props.user.age}
//       </div>
//     )
//   }
// }

class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return (
      this.props.user.name !== nextProps.user.name ||
      this.props.user.age !== nextProps.user.age
    )
  }

  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    )
  }
}
