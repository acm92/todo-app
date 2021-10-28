package com.cmon92.rest.webservices.restfulwebservices.todo;

import java.util.Date;

public class Todo {
	
	private long id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;
	
	//Default constructor for PUT requests
	protected Todo() {
		
	}
	
	public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}

	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	
	public String getUsername() {
		return username;
	}
	
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	
	public String getDescription() {
		return description;
	}
	
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	public Date getTargetDate() {
		return targetDate;
	}
	

	void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	
	public boolean isDone() {
		return isDone;
	}
	
	
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (isDone != other.isDone)
			return false;
		if (targetDate == null) {
			if (other.targetDate != null)
				return false;
		} else if (!targetDate.equals(other.targetDate))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	
	
	

}
