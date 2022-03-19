const React = require('react');
const Default = require('./layouts/default');

function Index (props)  {
  const breads = props.breads;
    return (
      <Default title={props.title}>

        <h2>Index Page</h2>

        {
          breads.map((bread, index)=> {
            return (
              <li key={index}>
                <a href={`/breads/${bread.id}`}>
                  {bread.name}
                </a>
              </li>
            )
          })
        }

        <div className="newButton">
          <a href={`/breads/${breads.id}`}><button>Add a new bread</button></a>
        </div>

      </Default>
    )
    
}

module.exports = Index