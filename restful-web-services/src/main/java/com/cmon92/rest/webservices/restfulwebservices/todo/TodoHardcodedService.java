package com.cmon92.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(idCounter++, "angel", "Buy pizza", new Date(), false));
		todos.add(new Todo(idCounter++, "angel", "Play GTA Trilogy", new Date(), false));
		todos.add(new Todo(idCounter++, "angel", "Workout", new Date(), false));
	}
	
	//To retrieve all todos
	public List<Todo> findAll() {
		return todos;
	}
	
	//To save changes
	public Todo save(Todo todo) {
		if(todo.getId() == -1) { //Adding a new Todo
			todo.setId(++idCounter);
			todos.add(todo);
		} else {	//Updating a new Todo
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	
	
	public Todo deleteById(long id) {
		
		Todo todo = findById(id);
		
		if(todo == null) return null;
				
		todos.remove(todo);
		
		return todo;
	}
	
	

	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	
	
	

}
