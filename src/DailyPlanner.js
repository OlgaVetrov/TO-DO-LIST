import { Component } from "react";
import icon from './icons8-done-64.png';

export class DailyPlanner extends Component {
    state ={
        userInput: "",
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addThing(input) {
        if (input === "") {
            alert("Please write a thing to do");
        } else {
        let listUp = this.state.todoList;
        listUp.push({
               text:input,
               completed: false
        }); 
        this.setState({todoList: listUp, userInput: ""});
        }
    }

    crossedWord(id) {
       let listUp = [...this.state.todoList];
       listUp[id].completed = !listUp[id].completed;
       this.setState({todoList: listUp});
    }


        deleteThing() {
        this.setState({
            todoList:this.state.todoList.filter(item => !item.completed)
        })
    }

    onSubmitForm(e) {
        e.preventDefault();
    }

    render() {
        return(
             <form onSubmit={this.onSubmitForm}>
            <div className="container">
            <input type='text'
            placeholder="What do you need to do today?" 
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
            </div>

            <div className="container">
            <button onClick={() => this.addThing(this.state.userInput)} className="add">Add</button>
            </div>

            <ul>
              {this.state.todoList.map((item, id) => (
                    <li onClick={ () => this.crossedWord(id) }
                        className={item.completed ? 'crossed' : ''}
                        key={id}>
                        <img src={icon} width="30px" alt="icon" />
                        {item.text}
                        </li>
                ))}
            </ul>

             <div className="container">
                <button onClick={() => this.deleteThing()} className="delete">
                Delete
                </button>
             </div>

            </form>
        )
    }
}