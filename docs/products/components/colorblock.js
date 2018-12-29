import React from 'react';

function ColorBlock(props) {
    return (
      <div>
        { props.name.map((color) =>
          <div className={`color-variant-block bg-${ color.name }`} key={ color.name }>
            <div class="color-details">
            {color.name}
            </div>
          </div>
        )
      }
      </div>
)}

export default ColorBlock;