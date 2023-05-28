import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


class User extends Component {
    state = {
      user: [
        {
            id: 1,
            Name: 'John',
            Last_Name: 'Smith',
            Age: 17,
            Dept_number: 200,
            City: 'Chicago',
            State: 'IL',
            Salary: '1000'
        },
        {
            id: 2,
            Name: 'Eldor',
            Last_Name: 'Kenjabayev',
            Age: 20,
            Dept_number: 200,
            City: 'Xorazm',
            State: 'IX',
            Salary: '1000'
        },
        {
            id: 3,
            Name: 'Jane',
            Last_Name: 'Smithss',
            Age: 15,
            Dept_number: 200,
            City: 'NewYork',
            State: 'IL',
            Salary: '1050'
        },
        {
            id: 4,
            Name: 'Jonoton',
            Last_Name: 'Smith',
            Age: 24,
            Dept_number: 200,
            City: 'Chicago',
            State: 'IL',
            Salary: '5000'
        },
        {
            id: 5,
            Name: 'Elyor',
            Last_Name: 'Karimboyev',
            Age: 20,
            Dept_number: 200,
            City: 'Uzbekistan',
            State: 'IL',
            Salary: '400'
        },
        {
            id: 6,
            Name: 'Mary',
            Last_Name: 'Smith',
            Age: 21,
            Dept_number: 200,
            City: 'Done',
            State: 'IL',
            Salary: '1000'
        },
        {
            id: 7,
            Name: 'George',
            Last_Name: 'Edwards',
            Age: 17,
            Dept_number: 200,
            City: 'London',
            State: 'IXI',
            Salary: '1000'
        }
        // ... остальные объекты пользователей ...
      ]
    };
  
    BtnClick = (index) => {
      let updatedUsers = this.state.user.filter((user) => user.Age >= 18);
      this.setState({ user: updatedUsers });
    };
  
    render() {
      return (
        <div style={{width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'3%'}}>
          <button
          className='btn_3d'
            style={{marginBottom:'5%' }}
            onClick={this.BtnClick}
          >
            Armiyaga Qabul qilish
          </button>
          <table border={'1'} style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Dept_number</th>
                <th>City</th>
                <th>State</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.user.map((item, index) => (
                <tr key={index}>
                  <td>{index +1}</td>
                  <td>{item.Name}</td>
                  <td>{item.Last_Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Dept_number}</td>
                  <td>{item.City}</td>
                  <td>{item.State}</td>
                  <td>{item.Salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <User />
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
