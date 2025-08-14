// Render the header
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// Render the content (receives an array of objects)
const Content = (props) => {
  return props.contents.map((content, index) => <p key={index}>{content.part} {content.exercises}</p>)
}

// Render the total number of exercises
const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content contents={[
        {part: part1, exercises: exercises1},
        {part: part2, exercises: exercises2},
        {part: part3, exercises: exercises3}
      ]} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App