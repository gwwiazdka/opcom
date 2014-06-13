<?php
require_once 'db.php';
connection();

class Todo{
	
	function show(){
		$result=mysql_query('select * from todo order by date');
		$text='';
		if(mysql_num_rows($result) > 0) {
   
   	 		while($row = mysql_fetch_assoc($result)) {
   	 			$text.='<p id="'.$row['id'].'" class="name">'.$row['name'].'</p>';
				$text.='<p id="'.$row['id'].'" class="date">'.$row['date'].'</p>';
				if($row['check']==1){
					$text.='<p class="notdane" id="'.$row['id'].'">Zrobione</p>';
				} else {
					$text.='<p class="dane" id="'.$row['id'].'">Nie zrobione</p>';
				}
				
				$text.='<p class="edit" id="'.$row['id'].'">Edytuj</p>';
				$text.='<p class="delete" id="'.$row['id'].'">Usuń</p><br/><hr/>';
				
    		}
		}
		return $text;
	}
	
	function add($data){
		$result=mysql_query('insert into todo  (name, date) values ("'.$data['name'].'","'.$data['date'].'")');
		$text = $this->show();
		return $text;
	}
	
	function edit($data){
		$result=mysql_query('update todo set `name`="'.$data['name'].'", `date`="'.$data['date'].'" where id='.$data['id']);
		$text = $this->show();
		return $text;
	}
	
	function delete($data){
		$result=mysql_query('DELETE FROM todo where id='.$data['id']);
		$text = $this->show();
		return $text;
	}
	
	function dane($data){
		$result=mysql_query('update todo set `check`=1 where id='.$data['id']);
		$text = $this->show();
		return $text;
	}
	
	function notdane($data){
		$result=mysql_query('update todo set `check`=0 where id='.$data['id']);
		$text = $this->show();
		return $text;
	}
	
	function doAction($name,$data){
		$methods = get_class_methods($this);
		if (in_array($name, $methods)) {
			return $this->$name($data);
		}
		
	}
	
	

}
