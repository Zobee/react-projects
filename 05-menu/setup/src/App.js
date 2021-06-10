import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

let uniqueCats = items.reduce((unique, curr) => {
    if(!unique.includes(curr.category)){
      unique.push(curr.category)
    }
    return unique
  }, [])

function App() {
  const [menu, setMenu] = useState(items)
  const [categories, setCategories] = useState([uniqueCats])

  return <main>
    <section className='menu-section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories menu={menu} categories={categories}/>
      <Menu menu={menu}/>
    </section>
  </main>;
}

export default App;
