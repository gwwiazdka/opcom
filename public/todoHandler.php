<?php
require_once 'todo.php';

if(isset( $_POST['action'] )) {
	if(isset($_POST['content'])){
		$data=$_POST['content'];
	} else {
		$data=NULL;
	}

     $myTodo = new todo();
     $result = $myTodo->doAction($_POST['action'],$data);
}
echo $result;