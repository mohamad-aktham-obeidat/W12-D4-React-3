import React from "react";

const Practice3 = () => {
  const title = "Hello World";
  const author = "Zac Gordon";
  return (
    <div className="practice">
      {/* 
        1. Pass title and author into Post as props        
      */}
      <Post title={title} author={author} />
    </div>
  );
};

/*
  2. Make the Post component accept props
  3. Pass title to the Heading component as props
  4. Pass author to the Byline component as props
*/
const Post = (props) => (
  <React.Fragment>
    <article className="post">Add Header and Byline here</article>
    <Heading title={props.title} author={props.author}/>
  </React.Fragment>

);

/*
  5. Create a component named <Heading /> that accepts props
  6. Have it display an H1 with a title from props
*/


export default Heading = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Byline author={props.author}/>
    </div>
  )
}

/*
  5. Create a component named <Byline /> that accepts props
  6. Have it display a p with the author
*/

import React from 'react'

export default Byline = (props) => {
  return (
    <div>
      <p>{props.author}</p>
    </div>
  )
}


export default Practice3;
