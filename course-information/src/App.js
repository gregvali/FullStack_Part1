const Header = (prop) => {
  return (
    <div>
      <h1>{prop.course}</h1>
    </div>
  )
}

const Part = (prop) => {
  return (
    <div>
      <p>
        {prop.part} {prop.e}
      </p>
    </div>
  )
}

const Content = (prop) => {
  return (
    <>
      <Part 
        part = {prop.part1}
        e = {prop.e1}
      />
      <Part 
        part = {prop.part2}
        e = {prop.e2}
      />
      <Part 
        part = {prop.part3}
        e = {prop.e3}
      />
    </>
  )
}

const Total = (prop) => {
  return (
    <div>
      <p>Number of exercises {prop.e1 + prop.e2 + prop.e3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content 
        part1 = {parts[0].name}
        part2 = {parts[1].name}
        part3 = {parts[2].name}
        e1 = {parts[0].exercises}
        e2 = {parts[1].exercises}
        e3 = {parts[2].exercises}
      />
      <Total 
        e1 = {parts[0].exercises}
        e2 = {parts[1].exercises}
        e3 = {parts[2].exercises}
      />
    </div>
  )
}

export default App