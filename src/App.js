import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
   {
     img: 20,
     name: 'john',
     job: 'developer'
   },
   {
     img: 30,
     name: 'bob',
     job: 'designer'
   },
   {
     img: 40,
     name: 'peter',
     job: 'artist'
   },
  ]

  return (
    <section>
      <Person pers={people[0]}/>;
      <Person pers={people[1]}>
       Lorem ipsum dolor sit amet 
       consectetur adipisicing elit.
      </Person>;
      <Person pers={people[2]}>
      Vero possimus distinctio hic 
      dicta consequatur similique 
      cum, minima est dolor enim, 
      tempore quod dolore iure 
      voluptatum vitae esse 
      excepturi tempora odit.
      </Person>;
    </section>
  );
};

const Person = (props) => {
  console.log(props);
  
  const {img, name, job} = props.pers;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  // const url = "./img/20.jpg";
  return (
    <div className="person">
      <img src={url} alt=""/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  )
}

export default App;
